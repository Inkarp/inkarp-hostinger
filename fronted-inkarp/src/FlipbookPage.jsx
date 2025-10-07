// src/pages/FlipbookPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// ✅ rename the import so it doesn't clash with a local const
import bgDefault from "/BgCatalyst.jpg";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function FlipbookPage() {
  const q = useQuery();
  const fileParam = q.get("file"); // decoded
  const title = q.get("title") || "Flipbook";

  // Background params (optional)
  const bgParam = q.get("bg") || "";                 // e.g. /images/catalyst-bg.webp
  const bgFit = (q.get("bgfit") || "cover").toLowerCase(); // cover | contain | fill
  const bgAlpha = Math.min(Math.max(parseFloat(q.get("bgalpha") || "0.35"), 0), 1);

  const [err, setErr] = useState("");
  const [fallbackMode, setFallbackMode] = useState(false);
  const shellRef = useRef(null);
  const initedRef = useRef(false);

  // Resolve absolute URL for PDF
  const file = (() => {
    try { return fileParam ? new URL(fileParam, window.location.origin).href : ""; }
    catch { return fileParam || ""; }
  })();

  // ✅ Resolve background URL:
  // 1) use ?bg= if provided
  // 2) else use imported default image (bgDefault)
  const bgUrl = (() => {
    if (bgParam) {
      try { return new URL(bgParam, window.location.origin).href; }
      catch { return bgParam; }
    }
    return bgDefault || ""; // may be empty if you remove the import
  })();

  const looksLikePDF = (() => {
    if (!file) return false;
    try {
      const u = new URL(file);
      return /\.pdf(\b|$)/i.test(u.pathname) || /\.pdf(\b|$)/i.test(u.search);
    } catch {
      return /\.pdf(\b|$)/i.test(file);
    }
  })();

  useEffect(() => { document.title = title; }, [title]);

  // Soft preflight (warn-only)
  useEffect(() => {
    let cancelled = false;
    if (!file) return;

    if (window.location.protocol === "https:" && file.startsWith("http://")) {
      setErr("Blocked: HTTPS page cannot load an HTTP PDF (mixed content). Move the PDF to HTTPS.");
      return;
    }

    fetch(file, { method: "GET", headers: { Range: "bytes=0-0" } })
      .then((res) => { if (!cancelled && !res.ok) setErr(`Could not prefetch PDF (HTTP ${res.status}). Viewer will still try.`); })
      .catch(() => { if (!cancelled) setErr((e) => e || "Preload blocked (CORS/range). Trying viewer anyway."); });

    return () => { cancelled = true; };
  }, [file]);

  // DearFlip init
  useEffect(() => {
    if (!file || initedRef.current || fallbackMode) return;

    if (!looksLikePDF) {
      setErr((e) => e || "The provided URL does not look like a .pdf. Falling back to native viewer.");
      setFallbackMode(true);
      return;
    }

    const setup = () => {
      if (initedRef.current) return;
      const shell = shellRef.current;
      if (!shell) return;

      const book = document.createElement("div");
      book.className = "_df_book w-full h-full";
      book.id = "flipbook_embed";
      book.setAttribute("source", file);

      book.addEventListener("df-error", () => {
        setErr((e) => e || "DearFlip failed to render the PDF. Falling back to native viewer.");
        setFallbackMode(true);
      }, { passive: true });

      shell.replaceChildren(book);

      // Transparent so background shows through around the pages/toolbar
      window.option_flipbook_embed = {
        webgl: false,
        backgroundColor: "transparent",
        duration: 800,
        singlePageMode: false,
        autoEnableOutline: true,
        maxTextureSize: 4096,
        controlsProps: {
          download: true,
          share: true,
          sound: false,
          fullscreen: true,
        },
        pdfjs: { disableRange: false, cMapPacked: true },
      };

      try {
        if (window.DFLIP) {
          if (typeof window.DFLIP.parseBooks === "function") window.DFLIP.parseBooks();
          initedRef.current = true;
        } else {
          setTimeout(setup, 100);
        }
      } catch (e) {
        console.error(e);
        setErr("Unexpected error initializing DearFlip. Falling back to native viewer.");
        setFallbackMode(true);
      }
    };

    if (document.readyState === "complete") setup();
    else {
      const onLoad = () => setup();
      window.addEventListener("load", onLoad, { once: true, passive: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, [file, fallbackMode, looksLikePDF]);

  // DearFlip toolbar + UI overrides scoped to this page only
  const dfScopedCss = `
  #flipbook-page .df-ui, #flipbook-page .df-ui .df-container { background: transparent !important; }
  #flipbook-page .df-ui .df-toolbar {
    position: fixed !important;
    left: 50% !important;
    transform: translateX(-50%);
    bottom: 20px !important;
    z-index: 60;
    background: rgba(255,255,255,0.85) !important;
    color: #1f2937 !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255,255,255,0.5);
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    padding: 6px 8px;
  }
  #flipbook-page .df-ui .df-toolbar .df-btn { color: inherit !important; border-radius: 8px; transition: background .15s, transform .05s; }
  #flipbook-page .df-ui .df-toolbar .df-btn:hover { background: rgba(0,0,0,.05); }
  #flipbook-page .df-ui .df-toolbar .df-btn:active { transform: scale(.96); }
  #flipbook-page .df-ui .df-toolbar .df-page, #flipbook-page .df-ui .df-toolbar .df-page input { color: #334155 !important; }
  #flipbook-page .df-ui .df-toolbar .df-sep { margin: 0 .25rem; height: 1.5rem; width: 1px; background: rgba(0,0,0,.2); }
  #flipbook-page .df-ui .df-toolbar .df-menu {
    background: rgba(255,255,255,0.95);
    color: #1f2937;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 10px;
    box-shadow: 0 12px 32px rgba(0,0,0,.35);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
  #flipbook-page .df-ui .df-toolbar .df-menu .df-item:hover { background: rgba(0,0,0,.05); }
  #flipbook-page .df-ui .df-nav .df-next, #flipbook-page .df-ui .df-nav .df-prev { color: rgba(255,255,255,.7); transition: color .15s ease; }
  #flipbook-page .df-ui .df-nav .df-next:hover, #flipbook-page .df-ui .df-nav .df-prev:hover { color: rgba(255,255,255,1); }
  `;

  // if (!file) {
  //   return (
  //     <div className="min-h-screen grid place-items-center bg-black text-white">
  //       <div className="rounded-xl border border-white/10 bg-white/5 p-7 text-center">
  //         <h1 className="text-xl mb-2">No PDF provided</h1>
  //         <p>Use: <code>/flipbook?file=/pdfs/sample.pdf&amp;title=CatalystCue&amp;bg=/BgCatalyst.jpg</code></p>
  //       </div>
  //     </div>
  //   );
  // }

  // Choose CSS object-fit equivalent
  const bgSize = bgFit === "contain" ? "contain" : bgFit === "fill" ? "100% 100%" : "cover";

  return (
    <div
      id="flipbook-page"
      className="fixed inset-0 flex flex-col text-white font-sans"
      style={{
        backgroundImage: bgUrl ? `url('${bgUrl}')` : undefined,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: bgSize,
        backgroundColor: bgUrl ? "transparent" : "#0b0b0b",
      }}
    >
      {/* Dim overlay for contrast over busy images */}
      {bgUrl && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${bgAlpha})` }}
        />
      )}

      <style>{dfScopedCss}</style>

      {/* {err && (
        <div className="px-3 py-1 text-sm border-b border-red-500/40 bg-red-900/30 relative z-50">
          {err}
          <span className="opacity-80 ml-2">
            (Tip: keep PDFs under <code>/public/pdfs/</code> and link as <code>/pdfs/your.pdf</code>.)
          </span>
        </div>
      )} */}

      <div className="relative w-full flex-1 grid place-items-center pb-10 z-10">
        {!fallbackMode ? (
          <div ref={shellRef} className="w-full h-full rounded-lg overflow-hidden" />
        ) : (
          <object data={file} type="application/pdf" className="w-full h-[80vh]">
            <iframe title={title} src={file} className="w-full h-full border-0" />
          </object>
        )}
      </div>
    </div>
  );
}

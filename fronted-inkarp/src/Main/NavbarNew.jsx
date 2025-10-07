// src/components/NavbarNew.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ArrowDownToLine } from "lucide-react";
import { createPortal } from "react-dom";

import InkarpLogo from "/InkarpLogo.svg";
import CatalystLogo from "/CatalystNew.svg";

import SearchDialog from "../components/SearchDialog";
// import FeedbackModal from "../components/pages/Home/FeedbackModal"; // unused

import { Heidolph } from "../components/pages/Search/SFC/Heidolph";
// import { Bruker } from "../components/pages/Search/SFC/Bruker";
// import { Polyscience } from "../components/pages/Search/SFC/Polyscience"; 


/* ---------- Portal that truly covers the viewport ---------- */
function Portal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const el = elRef.current;
    el.id = "search-dialog-portal";
    Object.assign(el.style, {
      position: "fixed",
      inset: "0",
      zIndex: "2147483647",
      pointerEvents: "auto",
    });
    document.body.appendChild(el);
    return () => {
      try { document.body.removeChild(el); } catch { }
    };
  }, []);

  return createPortal(children, elRef.current);
}

/* ---------- EXACT same search logic as your Hero.handleSearch ---------- */
function heroStyleSearch(query, callback) {
  const q = (query || "").toLowerCase();
  const results = [];
  const vertical = Heidolph.vertical;
  const principal = Heidolph.principal;
  const products = Heidolph.products;

  // vertical match
  if (vertical.toLowerCase().includes(q)) {
    const allProducts = [];
    products.forEach((product) => {
      if (typeof product === "string") {
        allProducts.push({
          name: product,
          image: null,
          principal,
          productSlug: product.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        });
      } else if (typeof product === "object" && product.name) {
        allProducts.push({
          name: product.name,
          image: null,
          principal,
          productSlug:
            product.slug ||
            product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        });
        if (Array.isArray(product.models)) {
          product.models.forEach((model) => {
            if (model.name) {
              allProducts.push({
                name: model.name,
                image: model.image ? model.image : null,
                principal,
                productSlug:
                  product.slug ||
                  product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
                modelSlug:
                  model.slug ||
                  model.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
              });
            }
          });
        }
      }
    });
    results.push({ title: vertical, products: allProducts, vertical });
    callback(results);
    return;
  }

  // product match (object with name)
  let foundProduct = null;
  products.forEach((product) => {
    if (typeof product === "object" && product.name && product.name.toLowerCase().includes(q)) {
      foundProduct = product;
    }
  });
  if (foundProduct) {
    const productResults = [];
    productResults.push({
      name: foundProduct.name,
      image: null,
      principal,
      productSlug:
        foundProduct.slug ||
        foundProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    });
    if (Array.isArray(foundProduct.models)) {
      foundProduct.models.forEach((model) => {
        if (model.name) {
          productResults.push({
            name: model.name,
            image: model.image ? model.image : null,
            principal,
            productSlug:
              foundProduct.slug ||
              foundProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
            modelSlug:
              model.slug ||
              model.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
          });
        }
      });
    }
    results.push({ title: foundProduct.name, products: productResults, vertical });
    callback(results);
    return;
  }

  // generic match (strings, product names, model names)
  const matchedProducts = [];
  products.forEach((product) => {
    if (typeof product === "string") {
      if (product.toLowerCase().includes(q)) {
        matchedProducts.push({
          name: product,
          image: null,
          principal,
          productSlug: product.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        });
      }
    } else if (typeof product === "object" && product.name) {
      if (product.name.toLowerCase().includes(q)) {
        matchedProducts.push({
          name: product.name,
          image: null,
          principal,
          productSlug:
            product.slug ||
            product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        });
      }
      if (Array.isArray(product.models)) {
        product.models.forEach((model) => {
          if (model.name && model.name.toLowerCase().includes(q)) {
            matchedProducts.push({
              name: model.name,
              image: model.image ? model.image : null,
              principal,
              productSlug:
                product.slug ||
                product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
              modelSlug:
                model.slug ||
                model.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
            });
          }
        });
      }
    }
  });
  if (matchedProducts.length > 0) {
    results.push({ title: synthesisVertical.principal, products: matchedProducts, vertical });
  }
  callback(results);
}

/* ================================================================ */

export default function NavbarNew() {
  const ProductProfile = "/ProductProfile/Inkarp_product_profile_2025.pdf";
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Verticals", path: "/verticals" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown on route change
  useEffect(() => {
    setInsightsOpen(false);
  }, [location.pathname]);

  // Close sidebar if click outside (except when modal open)
  useEffect(() => {
    function handleClickOutside(event) {
      if (showSearchModal) return;
      if (navRef.current && !navRef.current.contains(event.target)) {
        const hamburgerButton = document.querySelector(".hamburger-button");
        if (!hamburgerButton?.contains(event.target)) {
          const closeSidebarEvent = new CustomEvent("closeSidebar");
          window.dispatchEvent(closeSidebarEvent);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearchModal]);

  // Keyboard shortcut to open search
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "/" && !showSearchModal) {
        const tag = (e.target?.tagName || "").toLowerCase();
        if (tag !== "input" && tag !== "textarea") {
          e.preventDefault();
          setShowSearchModal(true);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showSearchModal]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!showSearchModal) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev || "";
    };
  }, [showSearchModal]);

  // SAME signature your SearchDialog expects
  const handleSearch = (query, callback) => {
    try {
      heroStyleSearch(query, callback);
    } catch (e) {
      console.error("Search error:", e);
      callback([]);
    }
  };

  // ✅ Close dialog when a product is clicked (SearchDialog must call onSelect)
  const handleSelectProduct = (item) => {
    setShowSearchModal(false);
    // optionally close the sidebar too:
    window.dispatchEvent(new CustomEvent("closeSidebar"));
    // navigation usually happens via <Link> inside SearchDialog
  };

  return (
    <>
      <div
        ref={navRef}
        className="flex bg-black/10 flex-col h-screen max-h-screen w-full py-4 px-3 space-y-3 overflow-y-auto"
      >
        {/* Logo (desktop only) */}
        <div className="hidden lg:flex items-center justify-center mb-2">
          <Link to="/" className="block">
            <img
              src={InkarpLogo}
              alt="Inkarp Logo"
              className="h-[70px] lg:h-[90px] w-auto max-w-full object-contain"
            />
          </Link>
        </div>

        <nav className="flex-1 space-y-2 font-medium mt-15 lg:mt-0">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${isActive(path) ? "bg-[#BE0010] text-white shadow" : "text-black hover:bg-gray-300"
                }`}
              onClick={() => {
                window.dispatchEvent(new CustomEvent("closeSidebar"));
              }}
            >
              {name}
            </Link>
          ))}

          {/* Insights & Updates */}
          <div className="w-full relative">
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex items-center justify-between w-full py-2 rounded-md text-black hover:bg-gray-300 transition-all whitespace-nowrap"
            >
              <span className="text-left pl-3">Insights & Updates</span>
              <ChevronDown
                className={`h-4 w-5 transition-transform duration-200 ${insightsOpen ? "rotate-180" : ""}`}
                color="#E63946"
              />
            </button>

            {insightsOpen && (
              <div
                className="z-[10005] w-full bg-[#F5F5F5] rounded-md overflow-hidden shadow-lg font-normal
                  md:absolute md:left-0 md:top-full md:mt-1"
              >
                <div className="flex flex-col py-2">
                  <Link
                    to="/insights-and-updates/blogs"
                    className={`block px-4 py-2 transition-all ${isActive("/insights-and-updates/blogs") ? "bg-[#E63946] text-white" : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/insights-and-updates/news-and-events"
                    className={`block px-4 py-2 transition-all ${isActive("/insights-and-updates/news-and-events") ? "bg-[#E63946] text-white" : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    News & Events
                  </Link>
                  <Link
                    to="/insights-and-updates/webinars"
                    className={`block px-4 py-2 transition-all ${isActive("/insights-and-updates/webinars") ? "bg-[#BE0010] text-white" : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    Webinars
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* CatalystCue */}
          <Link
            to="/catalystcue"
            className="block"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            <img
              src={CatalystLogo}
              alt="CatalystCue"
              className="w-32 h-12 object-contain hover:bg-gray-300 rounded-md p-2"
            />
          </Link>
          {/* <Link
             
              to="/service"
              className={`block px-3 py-2 rounded-md transition-all duration-200  text-black hover:bg-gray-300
                }`}
              onClick={() => {
                window.dispatchEvent(new CustomEvent("closeSidebar"));
              }}
            >
             Service
            </Link> */}
        </nav>


        {/* Bottom Buttons */}
        <div className="space-y-2 pt-5 border-t border-gray-200 mt-4">
          <button
            onClick={() => setShowSearchModal(true)}
            className="flex items-center justify-between px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full hover:border-[#E63946] hover:bg-[#F5F5F5] transition"
          >
            <span className="inline-flex items-center gap-2">
              <Search className="w-4 h-4 text-[#E63946]" />
              Search
            </span>
          </button>

          <a
            href={ProductProfile}
            download
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            <button className="w-full flex items-center justify-between gap-2 px-4 py-2 h-11 bg-[#BE0010] text-white font-medium rounded-md hover:bg-[#E63946] transition whitespace-nowrap">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis tracking-tight">Product Profile</span>
              <ArrowDownToLine className="w-4 h-4 shrink-0" />
            </button>
          </a>
        </div>
      </div>

      {/* Search Dialog as a fullscreen overlay via Portal */}
      {showSearchModal && (
        <Portal>
          {/* Backdrop + centering layer, click to close */}
          <div
            className="fixed inset-0 z-[2147483646] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowSearchModal(false)}
          >
            {/* Stop click bubbling so clicks inside dialog don't close it */}
            <div onClick={(e) => e.stopPropagation()}>
              <SearchDialog
                isOpen={showSearchModal}
                onClose={() => setShowSearchModal(false)}
                onSearch={handleSearch}
                onSelect={() => {
                  setShowSearchModal(false);
                  window.dispatchEvent(new CustomEvent('closeSidebar'));
                }}
              />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

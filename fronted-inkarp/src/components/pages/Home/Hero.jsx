import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Search } from "lucide-react";

import HeroImg1 from "/CatalystTeamInkarp.webp";
import HeroImg2 from "/src/assets/HeroSection/RadleysCollabration.jpg";
import BGVideo from "/RC-intro.webm";
import FoutyYearsBgVideo from "/Video40Years.mp4";

import SearchDialog from "../../SearchDialog";

import { Heidolph } from "../Search/SFC/Heidolph";
import { Bruker } from "../Search/SFC/Bruker";
import { Polyscience } from "../Search/SFC/Polyscience";


const slides = [
  { id: 1, title: "", subtitle: "", isVideo: true, videoUrl: FoutyYearsBgVideo },
  { id: 2, title: "Catalyst 2025", subtitle: "Inkarp Team", image: HeroImg1, isVideo: false },
  { id: 3, title: "25 Years OF Collaboration with Radleys", subtitle: "TRUST.GROWTH.SCIENCE", image: HeroImg2, isVideo: false },
  { id: 4, title: "", subtitle: "", isVideo: true, videoUrl: BGVideo },
];

const TypingText = ({ text = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const t = setTimeout(() => {
        setDisplayText((p) => p + text[currentIndex]);
        setCurrentIndex((p) => p + 1);
      }, 100);
      return () => clearTimeout(t);
    }
  }, [currentIndex, text]);
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
      {displayText}
    </motion.span>
  );
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [introPlayed, setIntroPlayed] = useState(false);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const hasText = Boolean(
    (slides[current]?.title && slides[current].title.trim()) ||
    (slides[current]?.subtitle && slides[current].subtitle.trim())
  );

  const nextSlide = () =>
    setCurrent((prev) => {
      const len = slides.length;
      let next = (prev + 1) % len;
      if (introPlayed && next === 0) next = (next + 1) % len;
      return next;
    });

  const prevSlide = () =>
    setCurrent((prev) => {
      const len = slides.length;
      let next = (prev - 1 + len) % len;
      if (introPlayed && next === 0) next = len - 1;
      return next;
    });

  // Keep users off the intro slide after it has played once
  useEffect(() => {
    if (introPlayed && current === 0) {
      setCurrent(1);
    }
  }, [introPlayed, current]);

  // Handle video playback & timing
  useEffect(() => {
    const slide = slides[current];

    // cleanup previous timers/listeners
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const video = videoRef.current;
    const twoSeconds = 2000;

    // SPECIAL CASE: first slide (intro video) should only run 5 seconds, then move on
    const isIntroSegment = current === 0 && slide.isVideo && !introPlayed;

    if (slide.isVideo && video) {
      // clear any lingering listeners before re-attaching
      const cleanup = () => {
        video.onended = null;
        video.onloadedmetadata = null;
      };
      cleanup();

      // If we're back on intro after it already played, skip
      if (current === 0 && introPlayed) {
        setCurrent(1);
        return;
      }

      // Try playback
      try {
        video.currentTime = 0;
        video.play().catch((err) => {
          console.log("Autoplay failed:", err);
          if (current === 0) setIntroPlayed(true);
          nextSlide();
        });
      } catch (e) {
        console.log("Playback error:", e);
        if (current === 0) setIntroPlayed(true);
        nextSlide();
      }

      if (isIntroSegment) {
        // Only 5 seconds for the intro, then mark played and advance to the image
        timerRef.current = setTimeout(() => {
          setIntroPlayed(true);
          nextSlide(); // moves to slide 2 (image)
        }, 5000);

        // cleanup on unmount/slide change
        return () => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
          cleanup();
        };
      }

      // NORMAL behavior for other videos (e.g., slide 3): play to end, then +2s pause, then advance
      video.onended = () => {
        timerRef.current = setTimeout(() => {
          nextSlide();
        }, twoSeconds);
      };

      // Fallback in case 'ended' never fires: use (duration + 2s)
      const setFallback = () => {
        const dur = Number.isFinite(video.duration) ? video.duration * 1000 : 6000;
        timerRef.current = setTimeout(() => {
          nextSlide();
        }, dur + twoSeconds);
      };

      if (Number.isFinite(video.duration) && video.duration > 0) {
        setFallback();
      } else {
        video.onloadedmetadata = () => setFallback();
        // extra safety fallback if metadata never loads
        timerRef.current = setTimeout(() => {
          nextSlide();
        }, 6000 + twoSeconds);
      }

      // cleanup on unmount/slide change
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        cleanup();
      };
    }

    // Non-video slides still auto-advance (image = 5s)
    return () => { };
  }, [current, introPlayed]);

  // Auto-slide images every 5s (videos handled by logic above)
  useEffect(() => {
    if (!slides[current].isVideo) {
      const id = setInterval(() => nextSlide(), 5000);
      return () => clearInterval(id);
    }
  }, [current, introPlayed]);

  // Kept for compatibility (no-op now)
  const handleIntroEnded = () => { };

  const searchModules = [
   Bruker,
   Heidolph,
   Polyscience,
  ];

  const slugify = (s = "") =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSearch = (query, callback) => {
    const q = (query || "").toLowerCase().trim();
    const results = [];

    // Helper: expand all products of a module
    const expandAllProducts = ({ products = [], principal, vertical }) => {
      const allProducts = [];

      products.forEach((product) => {
        if (typeof product === "string") {
          allProducts.push({
            name: product,
            image: null,
            principal,
            productSlug: slugify(product),
          });
        } else if (product && typeof product === "object" && product.name) {
          allProducts.push({
            name: product.name,
            image: null,
            principal,
            productSlug: product.slug || slugify(product.name),
          });

          if (Array.isArray(product.models)) {
            product.models.forEach((model) => {
              if (model?.name) {
                allProducts.push({
                  name: model.name,
                  image: model.image ?? null,
                  principal,
                  productSlug: product.slug || slugify(product.name),
                  modelSlug: model.slug || slugify(model.name),
                });
              }
            });
          }
        }
      });

      return { title: vertical, products: allProducts, vertical };
    };

    // Search in each module and aggregate
    searchModules.forEach((mod) => {
      if (!mod) return;
      const { vertical, principal, products = [] } = mod;

      if (!vertical || !principal) return;

      // 1) Vertical match -> return all products for that module
      if (vertical.toLowerCase().includes(q)) {
        results.push(expandAllProducts(mod));
        return;
      }

      // 2) Specific product match (object with name)
      let foundProduct = null;
      products.forEach((p) => {
        if (p && typeof p === "object" && p.name && p.name.toLowerCase().includes(q)) {
          foundProduct = p;
        }
      });
      if (foundProduct) {
        const productResults = [
          {
            name: foundProduct.name,
            image: null,
            principal,
            productSlug: foundProduct.slug || slugify(foundProduct.name),
          },
        ];

        if (Array.isArray(foundProduct.models)) {
          foundProduct.models.forEach((model) => {
            if (model?.name) {
              productResults.push({
                name: model.name,
                image: model.image ?? null,
                principal,
                productSlug: foundProduct.slug || slugify(foundProduct.name),
                modelSlug: model.slug || slugify(model.name),
              });
            }
          });
        }

        results.push({ title: foundProduct.name, products: productResults, vertical });
        return;
      }

      // 3) Fuzzy match across product strings / product names / model names
      const matchedProducts = [];
      products.forEach((p) => {
        if (typeof p === "string") {
          if (p.toLowerCase().includes(q)) {
            matchedProducts.push({
              name: p,
              image: null,
              principal,
              productSlug: slugify(p),
            });
          }
        } else if (p && typeof p === "object" && p.name) {
          if (p.name.toLowerCase().includes(q)) {
            matchedProducts.push({
              name: p.name,
              image: null,
              principal,
              productSlug: p.slug || slugify(p.name),
            });
          }
          if (Array.isArray(p.models)) {
            p.models.forEach((model) => {
              if (model?.name && model.name.toLowerCase().includes(q)) {
                matchedProducts.push({
                  name: model.name,
                  image: model.image ?? null,
                  principal,
                  productSlug: p.slug || slugify(p.name),
                  modelSlug: model.slug || slugify(model.name),
                });
              }
            });
          }
        }
      });

      if (matchedProducts.length > 0) {
        // ✅ Use the current module’s principal (removed hard-coded synthesisVertical)
        results.push({ title: principal, products: matchedProducts, vertical });
      }
    });

    callback(results);
  };


  return (
    <div className="relative md:my-2 w-[98%] rounded-xl max-w-[98vw] mx-auto h-[320px] xs:h-[450px] md:h-[520px] lg:h-[600px] overflow-hidden">
      {/* Background: image or video */}
      <AnimatePresence mode="sync">
        {slides[current].isVideo ? (
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) =>
              slide.isVideo ? (
                <video
                  key={slide.id}
                  ref={index === current ? videoRef : null}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  muted
                  playsInline
                  loop={false}
                  preload="auto"
                  onEnded={index === 0 ? undefined : undefined}
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                </video>
              ) : null
            )}
          </div>
        ) : (
          <motion.div
            key={slides[current].id}
            className="absolute inset-0 z-0"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={slides[current].image}
              alt={slides[current].title || "slide"}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Button */}
      <div className="absolute top-3 right-2 xs:top-4 xs:right-4 sm:top-6 sm:right-6 z-20">
        <button
          onClick={() => setShowSearchDialog(true)}
          className="relative h-10 xs:h-11 sm:h-12 px-3 xs:px-4 sm:px-6 pr-6 xs:pr-8 sm:pr-10 min-w-[140px] xs:min-w-[160px] sm:min-w-[200px] lg:min-w-[300px]
                     rounded-xl text-xs xs:text-sm sm:text-base backdrop-blur-md border-2 border-[#E63946] shadow-md
                     text-gray-800 flex items-center gap-2 transition-all duration-300 hover:ring-2 hover:ring-[#E63946] hover:bg-white/30
                     group bg-white/80"
        >
          <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full animate-pulse shadow-lg">
            NEW
          </span>
          <Search className="h-4 w-4 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-gray-700 font-medium group-hover:text-[#E63946] group-hover:scale-105 transform transition-all duration-300">
            Search<span className="hidden sm:inline">&nbsp;for Products</span>
          </span>
        </button>
      </div>

      {/* Caption Bar */}
      {hasText && (
        <motion.div
          key={`text-${slides[current].id}`}
          className="absolute bottom-0 z-10 w-full text-white text-center px-2 xs:px-4 pb-6 xs:pb-10 sm:pb-12 flex justify-center"
        >
          <div className="bg-white opacity-90 backdrop-blur-[1px] rounded-t-2xl p-3 xs:p-6 max-w-xs xs:max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
            {slides[current].title?.trim() ? (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase tracking-widest border font-[Roboto] px-2 xs:px-4 py-1 rounded-full text-base xs:text-lg mb-2 xs:mb-4 inline-block bg-white text-[#E63946]"
              >
                <TypingText text={slides[current].title} />
              </motion.span>
            ) : null}
            {slides[current].subtitle?.trim() ? (
              <h1 className="text-base xs:text-xl md:text-2xl uppercase text-black leading-tight font-[Roboto] drop-shadow-lg">
                <TypingText text={slides[current].subtitle} delay={0.5} />
              </h1>
            ) : null}
          </div>
        </motion.div>
      )}

      {/* Right-side controls */}
      <div className="bg-white p-2 xs:p-4 absolute rounded-l-xl right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 xs:gap-4 z-20">
        <motion.button
          onClick={prevSlide}
          className="bg-gray-200/70 text-black p-1 xs:p-2 rounded-full hover:bg-red-200 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="bg-gray-200/70 text-black p-1 xs:p-2 rounded-full hover:bg-red-200 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
        </motion.button>
      </div>

      {/* Watch Video (only on first slide) */}
      {current === 0 && (
        <div className="relative z-10">
          <a
            href="https://www.youtube.com/@InkarpInstrument/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 xs:bottom-4 right-2 xs:right-4 flex items-center gap-2 px-3 xs:px-5 py-2 xs:py-4 rounded-full shadow hover:bg-red-500 hover:text-white transition-all duration-300 bg-red-100 group"
          >
            <div className="bg-red-600 border-2 border-red-300 rounded-full p-1 xs:p-2 group-hover:bg-white group-hover:border-white">
              <Play className="w-4 h-4 text-white group-hover:text-red-600" />
            </div>
            <span className="text-xs xs:text-sm font-medium text-black group-hover:text-white">Watch More</span>
          </a>
        </div>
      )}

      {/* Search Dialog */}
      <SearchDialog
        isOpen={showSearchDialog}
        onClose={() => setShowSearchDialog(false)}
        onSearch={handleSearch}
      />
    </div>
  );
}

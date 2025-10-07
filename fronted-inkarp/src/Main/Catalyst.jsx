// src/pages/Catalyst.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// Banner
import CatalystBannerImage from "../assets/Catalyst/CatalystcueBannerVolume02Issue01.jpeg";

// Cover images
import Issue6 from "../assets/Catalyst/Images/Issue6.png";
import Issue5 from "../assets/Catalyst/Images/Issue5.png";
import Issue4 from "../assets/Catalyst/Images/Issue4.png";
import Issue3 from "../assets/Catalyst/Images/Issue3.png";
import Issue2 from "../assets/Catalyst/Images/Issue2.png";
import Issue1 from "../assets/Catalyst/Images/Issue1.png";

import Issue1V2 from "../assets/Catalyst/Images/Issue1V2.jpeg";
// PDFs (V1)
import MagazineIssue1 from "../assets/Catalyst/Pdfs/MagazineV1I1.pdf";
import MagazineIssue2 from "../assets/Catalyst/Pdfs/MagazineV1I2.pdf";
import MagazineIssue3 from "../assets/Catalyst/Pdfs/MagazineV1I3.pdf";
import MagazineIssue4 from "../assets/Catalyst/Pdfs/MagazineV1I4.pdf";
import MagazineIssue5 from "../assets/Catalyst/Pdfs/MagazineV1I5.pdf";
import MagazineIssue6 from "../assets/Catalyst/Pdfs/MagazineV1I6.pdf";

// PDFs (V2)
import MagazineIssueV2I1 from "../assets/Catalyst/Pdfs/MagazineV2I1.pdf";

// Modal
import CatalystModal from "../components/pages/CatalystCue/CatalystModal";

// ---- Data ----
const cards = [
  { id: 6, Volume: "Volume-1", subTitle: "Issue 06", image: Issue6, Date: "June 2025", link: MagazineIssue6, url: '/catalystcue-magazine-vol-1-issue-6-june-2025/' },
  { id: 5, Volume: "Volume-1", subTitle: "Issue 05", image: Issue5, Date: "April 2025", link: MagazineIssue5, url: '/catalystcue-magazine-vol-1-issue-5-april-2025/' },
  { id: 4, Volume: "Volume-1", subTitle: "Issue 04", image: Issue4, Date: "February 2025", link: MagazineIssue4, url: '/catalystcue-magazine-vol-1-issue-4-february-2025/' },
  { id: 3, Volume: "Volume-1", subTitle: "Issue 03", image: Issue3, Date: "December 2024", link: MagazineIssue3, url: '/catalystcue-magazine-vol-1-issue-3-december-2024/' },
  { id: 2, Volume: "Volume-1", subTitle: "Issue 02", image: Issue2, Date: "October 2024", link: MagazineIssue2, url: '/catalystcue-magazine-vol-1-issue-2-october-2024/' },
  { id: 1, Volume: "Volume-1", subTitle: "Issue 01", image: Issue1, Date: "August 2024", link: MagazineIssue1, url: '/catalystcue-magazine-vol-1-issue-1-august-2024/' },
  // Newer volumes
  { id: 1, Volume: "Volume-2", subTitle: "Issue 01", image: Issue1V2, Date: "August 2025", link: MagazineIssueV2I1, url: '/catalystcue-magazine-vol-2-issue-1-august-2025/' },
];

const flipbookHref = (pdfUrl, title) => {
  const qs = new URLSearchParams({ file: pdfUrl, title });
  return `/pdf?${qs.toString()}`;
};

export default function Catalyst() {
  const [showCatalystModal, setShowCatalystModal] = useState(false);

  // Auto-open registration modal after 5s
  useEffect(() => {
    const t = setTimeout(() => setShowCatalystModal(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Group by Volume
  const groupedByVolume = useMemo(() => {
    return cards.reduce((acc, card) => {
      (acc[card.Volume] ||= []).push(card);
      return acc;
    }, {});
  }, []);

  // Sort volumes numerically descending (Volume-2 above Volume-1)
  const sortedVolumeKeys = useMemo(() => {
    return Object.keys(groupedByVolume).sort((a, b) => {
      const numA = parseInt(a.split("-")[1], 10);
      const numB = parseInt(b.split("-")[1], 10);
      return numB - numA;
    });
  }, [groupedByVolume]);

  return (
    <div className="relative">
      <Helmet>
        <title>CatalystCue - Inkarp Instruments Private Ltd</title>
      </Helmet>

      {/* Banner */}
      <img
        src={CatalystBannerImage}
        alt="CatalystCue Banner"
        className="w-full h-full object-cover object-center px-5"
        style={{ borderRadius: "0 0 85% 85% / 30%" }}
      />
      <div className="px-5 md:px-8 lg:px-12 my-8">
        <div className="max-w-6xl mx-auto rounded-2xl border border-[#E63946]/20 bg-[#F5F5F5] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-10">
          {/* Eyebrow / heading */}
          <h2 className="font-[MaxOT] text-xl md:text-2xl font-bold text-[#E63946] mb-4 tracking-wide text-center">
            CATALYSTCue – Connecting Innovation & Impact
          </h2>

          {/* Copy */}
          <div className="text-[15px] md:text-base leading-7 text-gray-800 font-[MaxOT] space-y-4">
            <p>
              <strong>CATALYSTCue</strong> is Inkarp’s signature science magazine, created to connect innovation and impact.
              In addition to showcasing real-world applications from across diverse scientific fields, each issue features
              practical guides and expert-driven insights dedicated to add value to operational laboratories.
            </p>

            <p>
              From simplifying everyday lab challenges to spotlighting breakthroughs across academia and industry,
              <strong> CATALYSTCue</strong> is dedicated to advancing scientific workflows. Through interviews, lab features,
              and thought leadership, we give modern science a platform — and researchers a voice.
            </p>

            <p className="italic text-gray-700 border-l-4 border-[#E63946] pl-3">
              Behind every breakthrough is a story — one that deserves to be seen, heard, and shared.
            </p>
          </div>
        </div>
      </div>

      {/* Volumes */}
      <div className="p-5">
        {sortedVolumeKeys.map((volume) => {
          // Sort issues within a volume descending by id (latest first)
          const volumeCards = [...groupedByVolume[volume]].sort((a, b) => b.id - a.id);
          return (
            <div key={volume} className="mb-10">
              {/* Volume label */}
              <div className="flex items-center justify-center">
                <h2 className="text-xl font-bold px-4 py-1 text-center font-[MaxOT] border border-[#E63946] w-fit mb-4">
                  {volume}
                </h2>
              </div>

              {/* Issue cards */}
              <div className="flex flex-wrap justify-center items-center gap-8">
                {volumeCards.map((card) => {
                  const title = `CatalystCue – ${card.Volume} ${card.subTitle}`;
                  const href = card.link ? flipbookHref(card.link, title) : undefined;

                  return (
                    <a
                      key={`${volume}-${card.id}-${card.subTitle}`}
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={`w-[280px] h-[420px] border overflow-hidden transition bg-white ${card.link
                        ? "border-gray-500 hover:scale-[1.02] cursor-pointer"
                        : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
                        }`}
                      title={card.link ? "Open flipbook" : "PDF not available"}
                      onClick={(e) => {
                        if (!card.link) e.preventDefault();
                      }}
                    >
                      <img src={card.image} alt={card.subTitle} className="w-full h-[380px] object-cover" />
                      <div className="text-center p-2 flex justify-center items-center gap-2">
                        <h3 className="text-lg font-[Roboto]">{card.subTitle}</h3>
                        <div className="w-px h-5 bg-black" />
                        <p className="text-lg font-[Roboto] text-gray-600">{card.Date}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Catalyst Registration Modal (auto opens after 5s) */}
      {showCatalystModal && (
        <div className="z-[10000]">
          <CatalystModal onClose={() => setShowCatalystModal(false)} />
        </div>
      )}
    </div>
  );
}

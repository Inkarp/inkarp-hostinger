
import ImgN120 from "/images/products/Implen/nanophotometer-n120.jpg";
import ImgNP80 from "/images/products/Implen/nanophotometer-np80.jpg";
import ImgN60N50 from "/images/products/Implen/nanophotometer-n60-n50.jpg";
import ImgC40 from "/images/products/Implen/nanophotometer-c40.jpg";
import ImgC30 from "/images/products/Implen/nanophotometer-c30.jpg";
import ImgOD600 from "/images/products/Implen/diluphotometer-od600-new.jpg";

import ImgFluidlabR300 from "/images/products/Avanjo/R-300_PDP_center.png"

import ImgLitescope2 from "/images/products/Nanovision/litescope-2.jpg";
import ImgLitescope3 from "/images/products/Nanovision/litescope-3.gif";
import ImgLitescope1 from "/images/products/Nanovision/litescope.png";

// images (from public/)
import ImgReichert4SPR from "/images/products/Reichert/reichert-4spr.jpg";
import ImgReichert2SPR from "/images/products/Reichert/reichert-2spr.jpg";

// Nanosurf images (from public/)
import ImgDriveAFM from "/images/products/Nanosurf/driveafm.jpg";
import ImgFlexAFM from "/images/products/Nanosurf/flexafm.jpg";
import ImgCoreAFM from "/images/products/Nanosurf/coreafm-the-essence-of-atomic-force-microscopy.jpg";
import ImgIndustrialSolutions from "/images/products/Nanosurf/industrial-solutions.png";
import ImgAlphacen300 from "/images/products/Nanosurf/alphacen-300.jpg";
import ImgLensAFM from "/images/products/Nanosurf/lensafm-afm-for-optical-microscopes.webp";
import ImgNaniteAFM from "/images/products/Nanosurf/naniteafm-zoom.jpg";
import ImgFlexMount from "/images/products/Nanosurf/Flex-Mount_overview.png";
import ImgNaioAFM from "/images/products/Nanosurf/naioafm-the-leading-compact-afm.webp";
import ImgNaioSTM from "/images/products/Nanosurf/naiostm-stm-for-nanoeducation.jpg";

import ImgBWBXP from "/images/products/BWB/bwb-xp-flame-photometer.webp";
import ImgBWBXPPlus from "/images/products/BWB/bwb-xp-flame-photometer.webp"; // re-using XP image until XP Plus asset is available
import ImgBWBFlash from "/images/products/BWB/bwb-flash-flame-photometer.webp";
import ImgBWBBio from "/images/products/BWB/bio-cut0out0rgb.png";
import ImgBWBBioAV from "/images/products/BWB/BWB-BIO-AV-Flame-Photometer.png";
import ImgBWBLI from "/images/products/BWB/bwb-li-flame-photometer.png";
import ImgBWBSoil from "/images/products/BWB/soil-flame-photometer.png";
import ImgBWBSugar from "/images/products/BWB/sugar-flame-photometer.png";

// ✅ Photon etc. images
import ImgIRVIVO from "/images/products/Photon/ir-vivo.jpg";
import ImgGrandEOS from "/images/products/Photon/photon-etc-grand-eos.jpg";
import ImgRIMA from "/images/products/Photon/photon-etc-rima-closed.jpg";
import ImgLIMA from "/images/products/Photon/LIMA_upright.jpg";
import ImgIMA from "/images/products/Photon/photon-etc-ima-inverted.jpg";
import ImgZephIR17 from "/images/products/Photon/photon-etc-zephir-1-7.jpg";
import ImgZephIR25 from "/images/products/Photon/photon-etc-zephir-2-5.jpg";
import ImgZephIR29 from "/images/products/Photon/photon-etc-zephir-2-9.jpg";
// (Placeholders until dedicated artwork is added)
import ImgCLAIR from "/images/products/Photon/Sans-titre-68.jpg";
import ImgLEOS from "/images/products/Photon/Sans-titre-68.jpg";


export const LifescienceData = {
  "nanophotometer": {
    models: [
      { heading: "NanoPhotometer" },
      {
        name: "NanoPhotometer® N120",
        slug: "nanophotometer-n120",
        image: ImgN120,
      },
      {
        name: "NanoPhotometer® NP80",
        slug: "nanophotometer-np80",
        image: ImgNP80,
      },
      {
        name: "NanoPhotometer® N60/N50",
        slug: "nanophotometer-n60-n50",
        image: ImgN60N50,
      },
      {
        name: "NanoPhotometer® C40",
        slug: "nanophotometer-c40",
        image: ImgC40,
      },
      {
        name: "NanoPhotometer® N30",
        slug: "nanophotometer-n30",
        image: ImgC30,
      },

    ],
    // pageData: {
    //   title: "Implen NanoPhotometer®",
    //   intro:
    //     "Trusted microvolume spectrophotometers for DNA, RNA, protein, and more—compact, fast, and maintenance-free.",
    //   modelHeading: "Explore Models",
    // },
    meta: {
      title: "Implen NanoPhotometer® Series | Inkarp India",
      description:
        "Compare Implen NanoPhotometer models (N120, NP80, N60/N50, C40, N30, C30). Accurate microvolume UV/VIS spectrophotometry for life science labs.",
      keywords: [
        "Implen NanoPhotometer",
        "microvolume spectrophotometer",
        "NP80",
        "N120",
        "N60",
        "N50",
        "C40",
        "N30",
        "C30",
        "Inkarp India",
      ],
      altText: "Implen NanoPhotometer product range",
      internalLinks: ["od600"],
      externalLinks: ["https://www.implen.de/"],
    },
  },

  "od600": {
    models: [
      { heading: "OD600®" },
      {
        name: "New Implen OD600®",
        slug: "od600",
        image: ImgOD600,
      },
    ],
    pageData: {
      title: "Implen OD600® Cell Density Meter",
      intro:
        "Rapid, reliable OD600 measurements for microbial growth monitoring—no cuvettes, minimal sample, and easy workflow.",
      modelHeading: "Explore Models",
    },
    meta: {
      title: "Implen OD600® | Inkarp India",
      description:
        "New Implen OD600® for fast, accurate optical density measurements at 600 nm. Ideal for bacterial growth curves and QC.",
      keywords: [
        "Implen OD600",
        "OD600 meter",
        "cell density",
        "bacterial growth",
        "spectrophotometer",
        "Inkarp India",
      ],
      altText: "Implen OD600 instrument",
      internalLinks: ["nanophotometer"],
      externalLinks: ["https://www.implen.de/"],
    },
  },

  "fluidlab-r-300": {
    models: [
      { heading: "Cell Counter & Spectrometer" },
      {
        name: "Fluidlab R-300",
        slug: "fluidlab-r300",
        image: ImgFluidlabR300, // import this in your file
      },
    ],
    pageData: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer",
      intro:
        "The Fluidlab R-300 combines an automated cell counter with a full spectrometer. Perform absorbance, scatterlight, and time-series measurements with label-free viability analysis via holographic microscopy.",
      modelHeading: "Explore Models",
    },
    meta: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer | Inkarp India",
      description:
        "Fluidlab R-300 by Anvajo is a compact device combining automated cell counting and spectrophotometry (375–700 nm). Features include digital holographic microscopy, staining-free viability, portable design, and wireless connectivity. Available in India via Inkarp Instruments.",
      keywords: [
        "Fluidlab R-300",
        "Anvajo Fluidlab",
        "cell counter spectrometer",
        "digital holographic microscopy",
        "label-free viability",
        "portable spectrometer",
        "automated cell counter",
        "Inkarp India",
      ],
      altText: "Anvajo Fluidlab R-300 instrument",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://anvajo.com/"],
    },
  },

  "litescope": {
    models: [

      {
        name: "Litescope",
        slug: "litescope",
        image: ImgLitescope1, // import this in your file
      },
    ],
    pageData: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer",
      intro:
        "The Fluidlab R-300 combines an automated cell counter with a full spectrometer. Perform absorbance, scatterlight, and time-series measurements with label-free viability analysis via holographic microscopy.",
      modelHeading: "Explore Models",
    },
    meta: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer | Inkarp India",
      description:
        "Fluidlab R-300 by Anvajo is a compact device combining automated cell counting and spectrophotometry (375–700 nm). Features include digital holographic microscopy, staining-free viability, portable design, and wireless connectivity. Available in India via Inkarp Instruments.",
      keywords: [
        "Fluidlab R-300",
        "Anvajo Fluidlab",
        "cell counter spectrometer",
        "digital holographic microscopy",
        "label-free viability",
        "portable spectrometer",
        "automated cell counter",
        "Inkarp India",
      ],
      altText: "Anvajo Fluidlab R-300 instrument",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://anvajo.com/"],
    },
  },
  "reichert-spr-systems": {
    models: [
      { heading: "Reichert SPR Systems" },
      {
        name: "Reichert® 4SPR",
        slug: "reichert-4spr",
        image: ImgReichert4SPR,
      },
      {
        name: "Reichert® 2SPR",
        slug: "reichert-2spr",
        image: ImgReichert2SPR,
      },
    ],
    pageData: {
      title: "Reichert Surface Plasmon Resonance (SPR) Systems",
      intro:
        "Label-free, real-time interaction analysis for kinetics, affinity, and concentration measurements. Choose from 2-channel or 4-channel configurations.",
      modelHeading: "Explore Models",
    },
    meta: {
      title: "Reichert SPR Systems | 2SPR & 4SPR | Inkarp India",
      description:
        "Reichert’s 2SPR and 4SPR platforms deliver precise label-free interaction analysis with flexible throughput and robust performance.",
      keywords: [
        "Reichert SPR",
        "Reichert 2SPR",
        "Reichert 4SPR",
        "surface plasmon resonance",
        "label-free interaction analysis",
        "biomolecular kinetics",
        "Inkarp India",
      ],
      altText: "Reichert SPR instruments",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.reichertspr.com/"],
    },
  },
  "research": {
    models: [
      { heading: "Research" },
      { name: "DriveAFM", slug: "driveafm", image: ImgDriveAFM },
      { name: "FlexAFM", slug: "flexafm", image: ImgFlexAFM },
      { name: "CoreAFM", slug: "coreafm", image: ImgCoreAFM },
    ],

    meta: {
      title: "Nanosurf Research AFM | DriveAFM, FlexAFM, CoreAFM | Inkarp India",
      description: "Compare DriveAFM, FlexAFM, and CoreAFM for advanced research applications.",
      keywords: ["Nanosurf", "DriveAFM", "FlexAFM", "CoreAFM", "research AFM", "Inkarp India"],
      altText: "Nanosurf Research AFM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },

  "industry": {
    models: [
      // { heading: "Industry" },
      { name: "Industrial Solutions", slug: "industrial-solutions", image: ImgIndustrialSolutions },
      { name: "Alphacen 300", slug: "alphacen-300", image: ImgAlphacen300 },
    ],

    meta: {
      title: "Nanosurf Industrial AFM | Alphacen 300 & Custom Solutions | Inkarp India",
      description: "Industrial AFM platforms for automation, throughput, and reliability.",
      keywords: ["Nanosurf", "Industrial AFM", "Alphacen 300", "automation AFM", "Inkarp India"],
      altText: "Nanosurf Industrial AFM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },

  "integration": {
    models: [
      // { heading: "Integration" },
      { name: "LensAFM", slug: "lensafm", image: ImgLensAFM },
      { name: "NaniteAFM", slug: "naniteafm", image: ImgNaniteAFM },
      { name: "Flex-Mount", slug: "flex-mount", image: ImgFlexMount },
    ],

    meta: {
      title: "Nanosurf Integration AFM | LensAFM, NaniteAFM, Flex-Mount | Inkarp India",
      description: "Integrated AFM solutions for optical microscopes and custom instrumentation.",
      keywords: ["Nanosurf", "LensAFM", "NaniteAFM", "Flex-Mount", "integration AFM", "Inkarp India"],
      altText: "Nanosurf Integration AFM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },

  "compact": {
    models: [
      { heading: "Compact" },
      { name: "NaioAFM", slug: "naioafm", image: ImgNaioAFM },
      { name: "NaioSTM", slug: "naiostm", image: ImgNaioSTM },
    ],

    meta: {
      title: "Nanosurf Compact AFM/STM | NaioAFM & NaioSTM | Inkarp India",
      description: "Portable, easy-to-use AFM/STM systems ideal for teaching and routine measurements.",
      keywords: ["Nanosurf", "NaioAFM", "NaioSTM", "compact AFM", "education AFM", "Inkarp India"],
      altText: "Nanosurf Compact AFM/STM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },
  "bwb-flame-photometer": {
    models: [
      { heading: "Flame Photometers" },
      { name: "BWB XP Flame Photometer", slug: "bwb-xp-flame-photometer", image: ImgBWBXP },
      { name: "BWB XP Plus Flame Photometer", slug: "bwb-xp-plus-flame-photometer", image: ImgBWBXPPlus },
      { name: "BWB Flash Flame Photometer", slug: "bwb-flash-flame-photometer", image: ImgBWBFlash },
      { name: "BWB BIO Flame Photometer", slug: "bwb-bio-flame-photometer", image: ImgBWBBio },
      { name: "BWB BIO AV Flame Photometer", slug: "bwb-bio-av-flame-photometer", image: ImgBWBBioAV },
      { name: "BWB LI Flame Photometer", slug: "bwb-li-flame-photometer", image: ImgBWBLI },
      { name: "BWB SOIL Flame Photometer", slug: "bwb-soil-flame-photometer", image: ImgBWBSoil },
      { name: "BWB SUGAR Flame Photometer", slug: "bwb-sugar-flame-photometer", image: ImgBWBSugar },
    ],

    // pageData: {
    //   title: "BWB Flame Photometers",
    //   intro:
    //     "Reliable multi-application flame photometers for Na, K, Li, Ca and more—covering general lab, clinical, soil, sugar and industrial workflows.",
    //   modelHeading: "Explore Models",
    // },

    meta: {
      title: "BWB Flame Photometers | XP, XP Plus, Flash, BIO, BIO AV, LI, SOIL, SUGAR | Inkarp India",
      description:
        "Explore BWB Technologies flame photometer range—XP, XP Plus, Flash, BIO, BIO AV, LI, SOIL and SUGAR. Accurate, robust instruments for routine and specialized applications.",
      keywords: [
        "BWB flame photometer",
        "BWB XP",
        "BWB XP Plus",
        "BWB Flash",
        "BWB BIO",
        "BWB BIO AV",
        "BWB LI",
        "BWB SOIL",
        "BWB SUGAR",
        "Inkarp India",
      ],
      altText: "BWB Flame Photometer range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.bwbtech.com/"],
    },
  },
 
  "photon-products": {
    models: [
      { heading: "Photon Products" },
      { name: "IR VIVO™", slug: "ir-vivo", image: ImgIRVIVO },
      { name: "ClaIR™", slug: "clair", image: ImgCLAIR },
      { name: "L-EOS™", slug: "l-eos", image: ImgLEOS },
      { name: "IMA™", slug: "ima", image: ImgIMA },
      { name: "GRAND-EOS™", slug: "grand-eos", image: ImgGrandEOS },
      { name: "ZephIR™ 2.5", slug: "zephir-2-5", image: ImgZephIR25 },
      { name: "ZephIR™ 1.7", slug: "zephir-1-7", image: ImgZephIR17 },
      { name: "ZephIR™ 2.9", slug: "zephir-2-9", image: ImgZephIR29 },
      { name: "RIMA™", slug: "rima", image: ImgRIMA },
      { name: "LIMA™", slug: "lima", image: ImgLIMA },
    ],

    meta: {
      title:
        "Photon etc. Hyperspectral & IR Imaging Systems | IR VIVO, GRAND-EOS, RIMA, LIMA, ZephIR | Inkarp India",
      description:
        "Explore Photon etc. systems: IR VIVO, GRAND-EOS, RIMA, LIMA, ClaIR, L-EOS, IMA and ZephIR (1.7/2.5/2.9) for hyperspectral, Raman and infrared imaging.",
      keywords: [
        "Photon etc",
        "IR VIVO",
        "GRAND-EOS",
        "RIMA",
        "LIMA",
        "ClaIR",
        "L-EOS",
        "IMA",
        "ZephIR 1.7",
        "ZephIR 2.5",
        "ZephIR 2.9",
        "hyperspectral imaging",
        "infrared imaging",
        "Raman imaging",
        "Inkarp India",
      ],
      altText: "Photon etc. product range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.photonetc.com/"],
    },
  },

};

import BrukerLogo from '/src/assets/PrincipalLogos/RowSeven/Bruker.svg';

import AtrLibrary from "/images/products/Bruker/atr-library.jpeg";
import BannerAlpha from "/images/products/Bruker/banner-alpha.png";
import BannerFtNir from "/images/products/Bruker/banner-ft-nir.png";
import BannerFtirFtNir from "/images/products/Bruker/banner-ftir-ft-nir.png";
import BravoHandheld from "/images/products/Bruker/BRAVO-handheld.jpeg";
import DrugPille from "/images/products/Bruker/drug-pille.jpeg";
import HtsXtBanner from "/images/products/Bruker/hts-xt-banner.png";
import HyperionFtirMicroscope from "/images/products/Bruker/hyperion-FTIR-microscope.jpeg";
import InvenioFtirSpectrometer from "/images/products/Bruker/invenio-ft-ir-spectrometer.png";
import LumosMicroscope from "/images/products/Bruker/lumous-microscope.jpeg";
import MatrixFiiBannerBruker from "/images/products/Bruker/matrix-f-ii-banner-bruker.png";
import MobileIriiBannerAward from "/images/products/Bruker/mobile-ir-ii-banner-award.png";
import MpaIiAnalyzer from "/images/products/Bruker/mpa-ii-multi-purpose-analyzer.png";
import MultiRAMFTRamanSpectrometer from "/images/products/Bruker/MultiRAM-FT-Raman-Spectrometer.jpeg";
import SenterraIiRamanMicroscope from "/images/products/Bruker/senterra-ii-raman-microscope.png";
import TangoFtNirSpectrometer from "/images/products/Bruker/tango-ft-nir-spectrometer.png";
import TgFtirThermogravimetricAnalysis from "/images/products/Bruker/tg-ftir-thermogravimetric-analysis.png";
import VertexResearchFtirSpectrometer from "/images/products/Bruker/vertex-research-ft-ir-spectrometer.png";


const Bruker = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "Bruker",
  logo: BrukerLogo,
  products: [
    {
      name: "ft-ir-spectrometer",
      slug: "ft-ir-spectrometer",
      models: [
        {
          name: "ALPHA II Compact FT-IR Spectrometer",
          slug: "alpha-ii-compact-ft-ir-spectrometer",
          image: BannerAlpha,
        },
        {
          name: "MOBILE-IR II FT-IR Spectrometer",
          slug: "mobile-ir-ii-ft-ir-spectrometer",
          image: MobileIriiBannerAward,
        },
      ],
    },
    {
      name: "ft-ir-research-spectrometer",
      slug: "ft-ir-research-spectrometer",
      models: [
        {
          name: "INVENIO® FT-IR Spectrometers",
          slug: "invenio-ft-ir-spectrometer",
          image: InvenioFtirSpectrometer,
        },
        {
          name: "VERTEX 80/80v FT-IR Spectrometers",
          slug: "vertex-80-80v-ft-ir-spectrometer",
          image: VertexResearchFtirSpectrometer,
        },
        {
          name: "TG-FTIR Thermogravimetric Analysis",
          slug: "tg-ftir-thermogravimetric-analysis",
          image: TgFtirThermogravimetricAnalysis,
        },
      ],
    },
    {
      name: "ft-nir-spectrometer",
      slug: "ft-nir-spectrometer",
      models: [
        {
          name: "TANGO FT-NIR Spectrometer",
          slug: "tango-ft-nir-spectrometer",
          image: TangoFtNirSpectrometer,
        },
        {
          name: "MPA III FT-NIR Spectrometer",
          slug: "mpa-iii-ft-nir-spectrometer",
          image: MpaIiAnalyzer, // replace with MPA III image when available
        },
      ],
    },
    {
      name: "raman-spectrometer",
      slug: "raman-spectrometer",
      models: [
        {
          name: "BRAVO Handheld Raman Spectrometer",
          slug: "bravo-handheld-raman-spectrometer",
          image: BravoHandheld,
        },
        {
          name: "MultiRAM FT-Raman Spectrometer",
          slug: "multiram-ft-raman-spectrometer",
          image: MultiRAMFTRamanSpectrometer,
        },
      ],
    },
    {
      name: "ftir-microscopes",
      slug: "ftir-microscopes",
      models: [
        {
          name: "Hyperion FT-IR Microscope",
          slug: "hyperion-ft-ir-microscope",
          image: HyperionFtirMicroscope,
        },
        {
          name: "LUMOS II - FT-IR Microscope",
          slug: "lumos-ii-ft-ir-microscope",
          image: LumosMicroscope,
        },
      ],
    },
    {
      name: "process-monitoring",
      slug: "process-monitoring",
      models: [
        {
          name: "MATRIX-F II FT-NIR Process Spectrometer",
          slug: "matrix-f-ii-ft-nir-process-spectrometer",
          image: MatrixFiiBannerBruker,
        },
        {
          name: "MATRIX-MF FT-IR Process Reaction Monitoring",
          slug: "matrix-mf-ft-ir-process-reaction-monitoring",
          image: BannerFtirFtNir,
        },
        {
          name: "BEAM - Process FT-NIR Spectrometer",
          slug: "beam-process-ft-nir-spectrometer",
          image: BannerFtNir,
        },
      ],
    },
    {
      name: "raman-microscopes",
      slug: "raman-microscopes",
      models: [
        {
          name: "SENTERRA II Raman Microscope",
          slug: "senterra-ii-raman-microscope",
          image: SenterraIiRamanMicroscope,
        },
      ],
    },
  ],
};

export { Bruker };

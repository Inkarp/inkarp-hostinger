import React, { useState } from "react";
// Logos & Images
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

import HeiVacValveControl from "/images/products/heidolph/hei-vac-valve-control.webp";
import HeiVacValveTec from "/images/products/heidolph/hei-vac-valve-tec.webp";
import HeiVacVarioControl from "/images/products/heidolph/hei-vac-vario-control.webp";
import HeiVacVarioStation from "/images/products/heidolph/hei-vac-vario-station.webp";

import HeiVapIndustrialBasic from "/images/products/heidolph/Hei-VAP-Industrial-Basic.webp"

import LabScaleHeiVapDismatic from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic.webp"
import LabScaleHeiVapDismaticPro from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic-Pro.webp";

import HeiConnect from "/images/products/heidolph/Hei-Connect.webp"
import HeiMixS from "/images/products/heidolph/Hei-Mix-S.webp"
import HeiPlateMix from "/images/products/heidolph/Hei-PLATE-Mix-20.webp"
import HeiPlateMixHeatCore from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core.webp"
import HeiPlateMixHeatCorePlus from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core-Plus.webp"
import HeiPlateMixHeatCoreUltimate from "/images/products/heidolph/hei-plate-mix-n-heat-ultimate.webp"
import HeiPlateMixHeatCoreExpert from "/images/products/heidolph/hei-plate-mix-n-heat-expert.webp"



import HeiProcessCore from "/images/products/heidolph/Hei-PROCESS-Core.webp"
import HeiProcessExpert from "/images/products/heidolph/Hei-PROCESS-Expert.webp"
import HeiProcessUltimate from "/images/products/heidolph/Hei-PROCESS-Ultimate.webp"
import HeiProcessCustomise from "/images/products/heidolph/Hei-PROCESS-Customized.webp"

import SphericalPlate from "/images/products/heidolph/Sphericalplate-5D.webp"

import ReaxTop from "/images/products/heidolph/Reax-top.webp"
import ReaxControl from "/images/products/heidolph/Reax-control.webp"
import MultiReax from "/images/products/heidolph/Multi-Reax2.webp"
import TitraMax101 from "/images/products/heidolph/Titramax-101.webp"
import TitraMax100 from "/images/products/heidolph/Titramax-100.webp"
import TitraMax1000 from "/images/products/heidolph/Titramax-1000.webp"
import Rotamax120 from "/images/products/heidolph/Rotamax-120.webp"
import Unimax1010 from "/images/products/heidolph/Unimax-1010.webp"
import Unimax2010 from "/images/products/heidolph/Unimax-2010.webp"
import DuoMax from "/images/products/heidolph/Duomax-1030.webp"
import ProMax1020 from "/images/products/heidolph/Promax-1020.webp"
import ProMax2020 from "/images/products/heidolph/Promax-2020.webp"
import PolyMax1040 from "/images/products/heidolph/Polymax-1040.webp"
import PolyMax2040 from "/images/products/heidolph/Polymax-2040.webp"
import Vibramax100 from "/images/products/heidolph/Vibramax-100.webp"
import Reax20 from "/images/products/heidolph/Reax-20.webp"
import Reax20New from "/images/products/heidolph/Reax-20-1-16.webp"
import Reax2 from "/images/products/heidolph/Reax2-with-Adapter.webp"
import TitramaxPackage from "/images/products/heidolph/titramax-package.webp"


export const SynthesisProductDetails = {

  "lab-scale-hei-volume-dismatic": {
    id: "hei-volume-distimatic-lab",
    name: "Lab Scale Hei-VOLUME Distimatic – Continuous Automatic Distillation Module",
    image: LabScaleHeiVapDismatic,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Lab Scale Hei-VOLUME Distimatic Module",
    meta: {
      title: "Lab Scale Hei-VOLUME Distimatic | Continuous Automatic Distillation | Inkarp India",
      description:
        "Automatic, continuous distillation module for Heidolph rotary evaporators. Around-the-clock unattended operation, sensor- or time-controlled modes, valve matrix with condensate pump, optional 24/7 residue drainage, and safety sensors. Distributed & serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-VOLUME",
        "Distimatic",
        "automatic distillation",
        "continuous distillation",
        "rotary evaporator",
        "Inkarp India"
      ],
      altText: "Hei-VOLUME Distimatic Lab Module"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      The <strong>Lab Scale Hei-VOLUME Distimatic</strong> module enables precise, efficient, and
      <em>continuous automatic distillation</em> when paired with compatible Heidolph rotary evaporators.
      As a trusted <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a> partner in India, Inkarp provides installation, training, and maintenance to ensure reliable 24/7 performance.
    </p>

    <p><strong>Efficiency through automation</strong></p>
    <ul class="list-disc ml-6 space-y-1">
      <li>Save time with unattended, around-the-clock operation</li>
      <li>Multiply daily throughput via automated refill &amp; discharge</li>
      <li>Reduce costs by minimizing manual handling and downtime</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mt-3">Basic module components</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Control box with educt sensor vessel &amp; valve, emergency stop, condensate pump, and control panel</li>
      <li>Level sensor in the rotary flask (calibratable to the processed medium)</li>
      <li>Collector vessel with valve matrix</li>
      <li>Residue pump (for <strong>24/7</strong> models with automatic residue drainage)</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mt-3">Operation</h3>
    <p>
      Run in <em>sensor-</em> or <em>time-controlled</em> mode. The illuminated button indicates the level sensor status;
      an emergency stop switch halts the system instantly. Automatic filling and refilling leverage system vacuum:
      once the valve opens, new medium is drawn in; an educt sensor detects when feed is depleted.
    </p>

    <div class="grid sm:grid-cols-2 gap-4 mt-2">
      <figure class="rounded-xl overflow-hidden border border-gray-200">
        <img src="/images/products/heidolph/Distimatic-Functional principle-sRGB.jpg" alt="Distimatic functional principle" class="w-full h-auto">
      </figure>
      <div class="rounded-xl overflow-hidden border border-gray-200">
        <iframe
          class="w-full aspect-video"
          src="https://heidolph-instruments.com/products/03%20Automatic%20Module%20Distimatic/animations/Automatisches%20Befu%CC%88llen.mp4"
          title="Automatic filling animation"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>


    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mt-3">Collector &amp; valve matrix</h3>
    <p>
      Condensate is collected in a vessel with a valve matrix (venting, condensate, vacuum valves) replacing
      the receiving flask. A chemical membrane pump evacuates the collector and transfers distillate to your container.
      An overflow sensor stops the system when the external container is full; the collector is re-evacuated and the
      condensate valve reopens automatically for continuous operation.
    </p>

    <div class="rounded-xl overflow-hidden border border-gray-200">
      <iframe
        class="w-full aspect-video"
        src="https://heidolph-instruments.com/products/03%20Automatic%20Module%20Distimatic/animations/Ventilmatrix.mp4"
        title="Valve matrix animation"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>


    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mt-3">24/7 residue drainage (option)</h3>
    <p>
      In the <strong>24/7</strong> version, residue in the rotary flask is automatically pumped out. The system vents,
      the concentrate is transferred to your container via the residue pump, and an overflow sensor stops the process
      when full. A cut-out sensor on the glassware monitors for faults and halts the system for safety.
    </p>

    <p><strong>Compatibility:</strong> Available for Heidolph benchtop and large-scale rotary evaporators.</p>

    <!-- Quick legend blocks (optional, compact) -->
    <div class="mt-6 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200">
      <h4 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3 text-center">Quick Legends</h4>
      <div class="grid sm:grid-cols-2 gap-4 text-sm">
        <div class="rounded-lg border border-gray-200 p-3 bg-white">
          <p class="font-semibold mb-1">Functional overview</p>
          <ol class="list-decimal ml-5 space-y-1">
            <li>Vacuum valve</li>
            <li>Collector valve</li>
            <li>Venting valve</li>
            <li>Distillate pump</li>
            <li>Residue pump</li>
            <li>Filling valve</li>
          </ol>
        </div>
        <div class="rounded-lg border border-gray-200 p-3 bg-white">
          <p class="font-semibold mb-1">System layout</p>
          <ol class="list-decimal ml-5 space-y-1">
            <li>Educt container &amp; sensor/valve</li>
            <li>Flask level sensor</li>
            <li>Residue drainage</li>
            <li>Educt supply</li>
            <li>Evaporation flask</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "lab-scale-hei-volume-dismatic-pro": {
    id: "hei-volume-distimatic-pro",
    name: "Large Scale Hei-VOLUME Distimatic Pro – Continuous Automatic Distillation Module",
    image: LabScaleHeiVapDismaticPro,
    bannerImg: Banner1, // or any banner you prefer
    logo: Heidolph,
    altText: "Heidolph Large Scale Hei-VOLUME Distimatic Pro Module",
    meta: {
      title: "Hei-VOLUME Distimatic Pro (Large Scale) | Continuous Automatic Distillation | Inkarp India",
      description:
        "Large-scale automatic, continuous distillation module for Heidolph rotary evaporators. Touchscreen control, data logging, sensor- or time-controlled modes, condensate-cooled collector, optional 24/7 residue discharge, Woulff bottle, and comprehensive safety. Distributed & serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-VOLUME",
        "Distimatic Pro",
        "automatic distillation",
        "continuous distillation",
        "large scale",
        "rotary evaporator",
        "Inkarp India"
      ],
      altText: "Distimatic Pro – Large Scale"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind; #BE0010 / #E63946 / #F5F5F5; font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      <strong>Inkarp</strong> is the trusted distributor and service provider for
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>'s
      <strong>Large Scale Hei-VOLUME Distimatic Pro</strong> in India—delivering precise, efficient, and
      <em>continuous, automatic distillation</em> for large-batch workflows.
    </p>

    <p>
      In combination with a compatible evaporator system, Distimatic Pro enables
      <strong>unattended 24/7 operation</strong> with automated filling, condensate handling, and (optionally) residue discharge.
    </p>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold">Efficiency through automation</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Save time with continuous, hands-off runs</li>
      <li>Multiply daily throughput via automated cycles</li>
      <li>Reduce costs by minimizing manual intervention and downtime</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold">Key components</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Control box with integrated compressor and removable touchscreen control panel</li>
      <li>Original educt sensor vessel (auto feed with vacuum-based refill)</li>
      <li>Adjustable <em>rotary-flask level sensor</em> (ideal for highly foaming media)</li>
      <li>Collector with <strong>condensate cooling</strong> to prevent boil-up of volatile solvents</li>
    </ul>

    <div class="rounded-xl overflow-hidden border border-gray-200">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/3220-VgtoX8"
        title="Distimatic Pro – Overview"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold">Operation &amp; control</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Modes: <em>sensor-controlled</em>, <em>time-controlled</em>, manual (small batches), and rinsing program</li>
      <li>Save/recall parameters for recurring processes; transfer via USB</li>
      <li>Built-in data logging; export via USB</li>
      <li>Optional PIN lock for process security; updatable system software</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold">Feed, condensate &amp; residue handling</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Vacuum-driven automatic feed; educt-empty detection stops the system safely</li>
      <li>Condensate-cooled collector empties under <em>overpressure</em> with separate venting; re-evacuates before resuming collection</li>
      <li><strong>24/7 version:</strong> automatic residue discharge under overpressure; optional heating tape for viscous media</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold">Safety &amp; uptime</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Woulff bottle protects vacuum pump and stabilizes system vacuum</li>
      <li>Cut-out sensor on glassware halts the process upon fault</li>
      <li>Optional overflow sensors for condensate/residue containers stop the system when full</li>
      <li>Optional signal light accessory (traffic-light status) for quick remote overview</li>
    </ul>

    <p>
      With the exception of the level-sensor optimization, no re-adjustment of the sensor suite is required when changing media—the system reliably handles a wide range of solvents, irrespective of polarity.
    </p>

    <div class="mt-6 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200">
      <h4 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3 text-center">At a Glance</h4>
      <div class="grid sm:grid-cols-2 gap-4 text-sm">
        <div class="rounded-lg border border-gray-200 p-3 bg-white">
          <p class="font-semibold">Touchscreen control</p>
          <p class="opacity-90">Color UI with status LEDs; save/transfer methods; USB export.</p>
        </div>
        <div class="rounded-lg border border-gray-200 p-3 bg-white">
          <p class="font-semibold">Continuous operation</p>
          <p class="opacity-90">Auto feed, cooled collector, optional 24/7 residue discharge.</p>
        </div>
        <div class="rounded-lg border border-gray-200 p-3 bg-white">
          <p class="font-semibold">Safety suite</p>
          <p class="opacity-90">Cut-out sensor, overflow sensors, Woulff bottle stabilization.</p>
        </div>
        <div class="rounded-lg border border-gray-200 p-3 bg-white">
          <p class="font-semibold">Scalable &amp; future-proof</p>
          <p class="opacity-90">Media-agnostic sensors; software updatable; accessory signal light.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "hei-process-ultimate": {
    id: "hei-process-ultimate",
    name: "Hei-PROCESS Ultimate Processing Solutions",
    image: HeiProcessUltimate,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Hei-PROCESS Ultimate – cloud-based processing platform",
    meta: {
      title: "Hei-PROCESS Ultimate | Cloud-Based Processing Solutions | Inkarp India",
      description:
        "Plug-and-play platform connecting Heidolph devices, sensors, and third-party gear via the cloud. Build, automate, and monitor simple to complex processes; map workflows on dashboards; expand with new devices; and run asynchronous multi-process setups. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-PROCESS",
        "cloud control",
        "lab automation",
        "process dashboard",
        "OSPIN",
        "Inkarp India"
      ],
      altText: "Hei-PROCESS Ultimate Processing Solutions"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <h3 class="sr-only">Overview</h3>
    <p>
      <strong>Hei-PROCESS Ultimate</strong> brings Heidolph’s innovative, cloud-connected processing to India—distributed and supported by Inkarp Instruments.
      Combine devices, design automated workflows, and scale efficiently with expert local service.
    </p>

    <p>
      <strong>Plug-and-play principle:</strong> Heidolph devices, sensors, and an expanding portfolio of third-party devices can be freely combined to execute anything from simple to complex processes.
    </p>

    <ul class="list-disc ml-6 space-y-1">
      <li>Cloud-based control of Heidolph devices, sensors, and third-party equipment via a gateway</li>
      <li>Freely combine devices and let them interact intelligently</li>
      <li>Individually map processes on a customizable dashboard</li>
      <li>Continuously expanding portfolio of compatible devices</li>
      <li>Process design support by <strong>OSPIN</strong></li>
      <li>Expandable platform—add new devices anytime</li>
      <li>Connected devices can run asynchronously across multiple processes</li>
    </ul>
  </div>

  <!-- Resources (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data / Resources</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Hei-PROCESS Cloud – Quick Start Guide</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/operation%20manuals/OSPIN/QuickStart_OSPIN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>At-a-glance – Hei-PROCESS (EN)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/at%20a%20glance%20charts/2022/Hei-PROCESS-Core%20Cloud%20Solution/At-a-glance-Hei-Process-EN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "hei-process-customized": {
    id: "hei-process-customized",
    name: "Hei-PROCESS Customized Processing Solutions",
    image: HeiProcessCustomise,
    bannerImg: Banner2,
    logo: Heidolph,
    altText: "Heidolph Hei-PROCESS – Customized Processing Solutions",
    meta: {
      title: "Hei-PROCESS Customized Processing Solutions | Inkarp India",
      description:
        "Tailored, cloud-connected automation from Heidolph: freely combine devices, sensors, and third-party gear to design simple to complex workflows. Dashboard mapping, OSPIN-assisted process design, expandable portfolio, and asynchronous multi-process operation. Distributed & serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-PROCESS",
        "customized processing",
        "lab automation",
        "cloud control",
        "OSPIN",
        "Inkarp India"
      ],
      altText: "Hei-PROCESS Customized"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      Inkarp is the trusted distributor and service provider of
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>'s
      <strong>Hei-PROCESS Customized Processing Solutions</strong> in India. We tailor systems to your exact workflow needs—combining Heidolph devices, sensors, and compatible third-party equipment—so you can optimize efficiency, accuracy, and throughput.
    </p>

    <p><strong>Plug-and-play principle:</strong> Mix and match devices freely to build anything from simple sequences to complex, multi-step processes.</p>

    <ul class="list-disc ml-6 space-y-1">
      <li>Cloud-based control of Heidolph devices, sensors, and third-party equipment via a gateway</li>
      <li>Freely combine portfolio devices and let them interact intelligently</li>
      <li>Individually map and visualize processes on a customizable dashboard</li>
      <li>Continuously expanding portfolio of compatible devices</li>
      <li>Process design support by <strong>OSPIN</strong></li>
      <li>Expandable platform—add new devices at any time</li>
      <li>Asynchronous operation—run multiple processes in parallel</li>
    </ul>
  </div>

  <!-- Resources (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data / Resources</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Hei-PROCESS Cloud – Quick Start Guide</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/operation%20manuals/OSPIN/QuickStart_OSPIN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>At-a-glance – Hei-Process (EN)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/at%20a%20glance%20charts/2022/Hei-PROCESS-Core%20Cloud%20Solution/At-a-glance-Hei-Process-EN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "sphericalplate-5d": {
    id: "sphericalplate-5d-sp5d",
    name: "Kugelmeiers cell culture plates – Sphericalplate 5D (SP5D)",
    image: SphericalPlate,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Kugelmeiers Sphericalplate 5D (SP5D) – smart 3D cell cultivation plate",
    meta: {
      title: "Kugelmeiers Sphericalplate 5D (SP5D) | Smart 3D Cell Cultivation | Inkarp India",
      description:
        "Sphericalplate 5D (SP5D) enables uniform, size-controlled 3D spheroids with high yield—12 wells × 750 microwells (up to 9,000 spheroids/plate). Ready-to-use, automation-friendly, and ideal for translational workflows. Distributed and serviced by Inkarp India.",
      keywords: [
        "Kugelmeiers",
        "Sphericalplate 5D",
        "SP5D",
        "3D cell culture",
        "spheroids",
        "organoids",
        "uniform spheroids",
        "Inkarp India",
        "Heidolph distribution"
      ],
      altText: "Sphericalplate 5D (SP5D) 3D cell culture plate"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 549-16000-00</strong></p>

    <p>
      Revolutionize your cell culture research with <strong>Kugelmeiers’ Sphericalplate 5D (SP5D)</strong>—the smart
      solution for reproducible 3D spheroid formation. Through Inkarp’s distribution and service network across India,
      you get local support plus seamless access to this innovation.
    </p>

    <p>
      <strong>SP5D</strong> is a 3D cell culture plate designed to generate uniform, standardized, size-controlled
      spheroids—improving viability and differentiation while boosting reproducibility of downstream assays. Its
      patented spherical microwell geometry and special surface coating integrate individual cells into controlled
      3D agglomerates while preventing necrotic cores.
    </p>

    <p>
      Each plate features <strong>12 wells × 750 microwells</strong> (up to <strong>9,000 spheroids/plate</strong>).
      You can also run monolayer controls in the additional twelve standard wells on the same plate—simplifying
      comparative studies and scale-up into diagnostic or clinical workflows.
    </p>

    <p>
      Ready-to-use handling—no pre-treatment or post-seeding centrifugation. Media changes are easy via pipetting
      (microwell height retains clusters), and the platform is compatible with standard laboratory automation.
    </p>
  </div>

  <!-- Resources (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data / Resources</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Life Science Solutions – Smart cell cultivation (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/products/14%20Smart%20cell%20cultivation/Flyer/Folder-SK-Life%20Science-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>At-a-glance – Kugelmeiers (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/at%20a%20glance%20charts/2022/At-a-glance-Kugelmeiers-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>Sphericalplate 5D – Technical properties (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/Brochures-Catalogs/2022/Kugelmeiers/01-006-003-35-0-Kugelmeiers-Techn%20Manual-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>Flyer – How to use the SP5D (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/Brochures-Catalogs/2022/Kugelmeiers/01-006-003-32-0-Kugelmeiers-Manual-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

}
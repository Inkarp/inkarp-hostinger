import React, { useState } from "react";
// Logos & Images
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import ImgPolyBenchtopGroup from "/images/products/PolyScience/Benchtop_Group.jpg";
import ImgPolyChillerCover from "/images/products/PolyScience/chiller-cover-render4-low-res.png";
import ImgPolyGPWBCategory from "/images/products/PolyScience/GPWB_Category.png";
import ImgPolyHeatedCategory from "/images/products/PolyScience/Heated_Category.png";
import ImgPolyRCCategory from "/images/products/PolyScience/RC_Category.png";
import ImgPolyViscosityMX from "/images/products/PolyScience/Viscosity_MX.png";


import ImgLS from "/images/products/PolyScience/ls-series.png";
import ImgLM from "/images/products/PolyScience/lm-series.png";
import ImgMM from "/images/products/PolyScience/mm-series.png";
import ImgDC400 from "/images/products/PolyScience/durachill-400w.jpg";
import ImgDC1000 from "/images/products/PolyScience/durachill-1000w.jpg";


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";
import { BanknoteArrowUp } from "lucide-react";

export const PolyscienceModels = {

  "viscosity-baths": {
    id: "viscosity-bath-17l",
    name: "Viscosity Baths (17 L)",
    image: ImgPolyViscosityMX, // primary image (AD); swap if you prefer MX
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "PolyScience 17 L Viscosity Bath",
    meta: {
      title: "PolyScience 17 L Viscosity Baths | Inkarp India",
      description:
        "17-liter viscosity baths with precise temperature control up to 200 °C, stability down to ±0.01 °C (AD) / ±0.07 °C (MX). Configured for capillary viscometers and ASTM D-445 (Advanced Digital only). Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "viscosity bath",
        "ASTM D-445",
        "capillary viscometer",
        "Advanced Digital",
        "MX controller",
        "temperature stability",
        "Inkarp India"
      ],
      altText: "Viscosity Bath 17 L"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p><strong>Uniquely configured to accommodate specific testing and QC needs — including ASTM D-445 (Advanced Digital only).</strong></p>
    <p>
      Inkarp Instruments supplies and services <a class="underline text-[#BE0010]" href="https://www.polyscience.com/" target="_blank" rel="noopener">PolyScience</a>
      <strong>Viscosity Baths (17&nbsp;L)</strong> across India. Designed for precise viscosity measurements and calibration, these baths deliver
      outstanding uniformity and stability for laboratory and industrial workflows.
    </p>

    <ul class="list-disc ml-6 space-y-1">
      <li>Working temperatures up to <strong>200&nbsp;°C</strong></li>
      <li>Temperature stability to <strong>±0.01&nbsp;°C</strong> (AD) / <strong>±0.07&nbsp;°C</strong> (MX)</li>
      <li><strong>Advanced Digital</strong> or <strong>MX</strong> temperature controller options</li>
      <li>Configured for popular <strong>capillary viscometers</strong></li>
      <li><strong>Glass reservoir</strong> with included tap-water cooling coil</li>
      <li>Lidded viscometer openings</li>
    </ul>
  </div>

  <!-- Variant images -->
  <div class="mt-6 grid sm:grid-cols-3 items-center gap-4">
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/ad.png" alt="PolyScience Viscosity Bath 17 L — AD" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">17 L Viscosity Bath — <strong>AD</strong> (Advanced Digital)</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/mx.png" alt="PolyScience Viscosity Bath 17 L — MX" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">17 L Viscosity Bath — <strong>MX</strong></div>
    </div>
  </div>

  <!-- Specs comparison -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Specifications (17&nbsp;L)</h3>
    <div class="min-w-[720px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="bg-gray-50">
          <tr class="[&>*]:border [&>*]:border-gray-300 [&>*]:p-3 text-left">
            <th>Specification</th>
            <th>AD (Advanced Digital)</th>
            <th>MX</th>
          </tr>
        </thead>
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>Controller Type</td><td>Advanced Digital</td><td>MX</td></tr>
          <tr><td>Heater Wattage (60&nbsp;Hz)</td><td>1100 W</td><td>1100 W</td></tr>
          <tr><td>Pump Speed</td><td>Variable</td><td>One</td></tr>
          <tr><td>Temperature Stability</td><td>±0.01&nbsp;°C</td><td>±0.07&nbsp;°C</td></tr>
          <tr><td>Working Access</td><td>Six openings, 5.1&nbsp;cm Ø × 27.9&nbsp;cm depth</td><td>Six openings, 5.1&nbsp;cm Ø × 27.9&nbsp;cm depth</td></tr>
          <tr><td>Overall Dimensions</td><td>31.8&nbsp;cm Ø × 52.1&nbsp;cm depth</td><td>31.8&nbsp;cm Ø × 52.1&nbsp;cm depth</td></tr>
          <tr><td>Part Number (60&nbsp;Hz)</td><td><code>AD17VB6G-A11B</code></td><td><code>MX17VB6G-A11B</code></td></tr>
          <tr><td>Part Number (50&nbsp;Hz)</td><td><code>AD17VB6G-A12E</code></td><td><code>MX17VB6G-A12E</code></td></tr>
          <tr><td>ASTM D-445</td><td>Supported (AD models)</td><td>—</td></tr>
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

  "digital-general-purpose-water-baths": {
    id: "water-bath-gp-digital",
    name: "Digital General Purpose Water Baths",
    image: ImgPolyRCCategory, // default hero; swap to your preferred size
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "PolyScience Digital General Purpose Water Baths",
    meta: {
      title: "PolyScience Digital General Purpose Water Baths | Inkarp India",
      description:
        "Ambient +5 to 100 °C, stability ±0.1 °C and uniformity ±0.2 °C. Clear hinged gable cover, TFT display, presets, alarms. Reservoirs from 2–28 L. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "general purpose water bath",
        "digital water bath",
        "laboratory water bath",
        "Inkarp India",
        "stability ±0.1 °C",
        "uniformity ±0.2 °C",
        "hinged gable cover",
        "TFT display"
      ],
      altText: "PolyScience Digital Water Bath"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      Inkarp Instruments distributes and services
      <a class="underline text-[#BE0010]" href="https://www.polyscience.com/" target="_blank" rel="noopener">PolyScience</a>
      <strong>Digital General Purpose Water Baths</strong> across India. These durable, easy-to-use baths deliver precise temperature control for routine lab work and QC.
    </p>

    <p class="font-[MaxOT]">Key specifications</p>
    <ul class="list-disc ml-6 space-y-1">
      <li><strong>Temperature range:</strong> Ambient +5&nbsp;°C to 100&nbsp;°C</li>
      <li><strong>Temperature stability:</strong> ±0.1&nbsp;°C</li>
      <li><strong>Temperature uniformity:</strong> ±0.2&nbsp;°C</li>
      <li><strong>Reservoir sizes:</strong> 2, 5, 10, 20, and 28&nbsp;L (304 stainless steel)</li>
    </ul>

    <p class="font-[MaxOT]">Features</p>
    <ul class="list-disc ml-6 space-y-1">
      <li>Full-color TFT display with plain-language UI (5 selectable languages)</li>
      <li>Hinged gable cover standard on all models</li>
      <li>Displays setpoint and actual temperature simultaneously</li>
      <li>Programmable presets for frequently used temperatures</li>
      <li>Integrated timer and Eco Mode after timed runs</li>
      <li>User-settable high-limit, audible/visual alarms; calibration offset</li>
      <li>Reservoir drain on 10&nbsp;L and larger baths</li>
      <li>Primary and automatic safety thermostats</li>
      <li>Compatible with waterless bath beads</li>
    </ul>
  </div>

  <!-- Variant gallery -->
  <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/twoliter.png" alt="PolyScience 2 L Digital Water Bath" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">2&nbsp;L Digital Water Bath</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="images/products/PolyScience/fiveliter.png" alt="PolyScience 5 L Digital Water Bath" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">5&nbsp;L Digital Water Bath</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="images/products/PolyScience/tenliter.png" alt="PolyScience 10 L Digital Water Bath" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">10&nbsp;L Digital Water Bath</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="images/products/PolyScience/twentyliter.png" alt="PolyScience 20 L Digital Water Bath" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">20&nbsp;L Digital Water Bath</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white sm:col-span-2 lg:col-span-1">
      <img src="images/products/PolyScience/twentyeightliter.png" alt="PolyScience 28 L Digital Water Bath" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">28&nbsp;L Digital Water Bath</div>
    </div>
  </div>

  <!-- Specs -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Specifications</h3>
    <div class="min-w-[720px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Temperature range</th><td>Ambient +5&nbsp;°C to 100&nbsp;°C</td></tr>
          <tr><th class="text-left font-[MaxOT]">Temperature stability</th><td>±0.1&nbsp;°C</td></tr>
          <tr><th class="text-left font-[MaxOT]">Temperature uniformity</th><td>±0.2&nbsp;°C</td></tr>
          <tr><th class="text-left font-[MaxOT]">Display</th><td>Full-color TFT</td></tr>
          <tr><th class="text-left font-[MaxOT]">Reservoir material</th><td>304 stainless steel</td></tr>
          <tr><th class="text-left font-[MaxOT]">Cover</th><td>Clear hinged gable cover (standard)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Safety</th><td>Primary & automatic safety thermostats; user high-limit</td></tr>
          <tr><th class="text-left font-[MaxOT]">Languages</th><td>5 selectable</td></tr>
          <tr><th class="text-left font-[MaxOT]">Drain</th><td>Included on 10&nbsp;L and larger baths</td></tr>
          <tr><th class="text-left font-[MaxOT]">Bead compatibility</th><td>Yes (waterless bath beads)</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Size comparison -->
  <div class="mt-6 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Model Sizes</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="bg-gray-50">
          <tr class="[&>*]:border [&>*]:border-gray-300 [&>*]:p-3 text-left">
            <th>Model</th>
            <th>Reservoir Capacity</th>
            <th>Working Temp Range</th>
            <th>Stability</th>
          </tr>
        </thead>
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>2&nbsp;L</td><td>2&nbsp;L</td><td>Ambient +5&nbsp;°C to 100&nbsp;°C</td><td>±0.1&nbsp;°C</td></tr>
          <tr><td>5&nbsp;L</td><td>5&nbsp;L</td><td>Ambient +5&nbsp;°C to 100&nbsp;°C</td><td>±0.1&nbsp;°C</td></tr>
          <tr><td>10&nbsp;L</td><td>10&nbsp;L</td><td>Ambient +5&nbsp;°C to 100&nbsp;°C</td><td>±0.1&nbsp;°C</td></tr>
          <tr><td>20&nbsp;L</td><td>20&nbsp;L</td><td>Ambient +5&nbsp;°C to 100&nbsp;°C</td><td>±0.1&nbsp;°C</td></tr>
          <tr><td>28&nbsp;L</td><td>28&nbsp;L</td><td>Ambient +5&nbsp;°C to 100&nbsp;°C</td><td>±0.1&nbsp;°C</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    // variants: [
    //     { key: "2l", label: "2 L", image: ImgGPWB2, capacity_l: 2 },
    //     { key: "5l", label: "5 L", image: ImgGPWB5, capacity_l: 5 },
    //     { key: "10l", label: "10 L", image: ImgGPWB10, capacity_l: 10 },
    //     { key: "20l", label: "20 L", image: ImgGPWB20, capacity_l: 20 },
    //     { key: "28l", label: "28 L", image: ImgGPWB28, capacity_l: 28 }
    // ],

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "benchtop-chillers": {
    id: "benchtop-chillers",
    name: "Benchtop Chillers ",
    image: ImgPolyBenchtopGroup, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "PolyScience Benchtop Chillers & Coolers",
    meta: {
      title: "PolyScience Benchtop Chillers & Coolers | Inkarp India",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      Inkarp Instruments is a leading distributor and service partner for
      <a class="underline text-[#BE0010]" href="https://www.polyscience.com/" target="_blank" rel="noopener">PolyScience</a>
      <strong>Benchtop Chillers</strong> in India. These compact, quiet, and energy-efficient units deliver precise temperature control for pharmaceutical, analytical, and industrial workflows — ideal for rotary evaporators, vacuum systems, spectrometers, and more.
    </p>

    <p class="font-[MaxOT]">Features</p>
    <ul class="list-disc ml-6 space-y-1">
      <li>Large, easy-to-read LED display</li>
      <li>Space-saving benchtop design</li>
      <li>Cooling at ambient temperatures up to 30&nbsp;°C</li>
      <li>Low-flow shutoff & alarm; high/low temperature alarms</li>
      <li>Front-mounted fluid level gauge</li>
      <li>Simple setup, operation & maintenance</li>
      <li>Choice of turbine or centrifugal pumps (model-dependent)</li>
    </ul>
  </div>

  <!-- Quick gallery -->
  <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/ls-series.png" alt="PolyScience LS Series Benchtop Chiller" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">LS Series</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/lm-series.png" alt="PolyScience LM Series Benchtop Chiller" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">LM Series</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/mm-series.png" alt="PolyScience MM Series Benchtop Chiller" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">MM Series</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white sm:col-span-2 lg:col-span-1">
      <img src="/images/products/PolyScience/durachill-400w.jpg" alt="PolyScience DuraChill Benchtop 400 W" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">DuraChill&reg; Benchtop</div>
    </div>
  </div>

  <!-- Model overview -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Snapshot</h3>
    <div class="min-w-[900px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="bg-gray-50">
          <tr class="[&>*]:border [&>*]:border-gray-300 [&>*]:p-3 text-left">
            <th>Model</th>
            <th>Pump</th>
            <th>Working Range (°C)</th>
            <th>Temp Stability</th>
            <th>Cooling @ +20&nbsp;°C (W)</th>
            <th>60&nbsp;Hz Part No.</th>
            <th>50&nbsp;Hz Part No.</th>
          </tr>
        </thead>
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>LS Series (Turbine)</td><td>Turbine</td><td>−20 to 40</td><td>±0.1&nbsp;°C</td><td>900</td><td>LS51TX1A110C</td><td>LS52TY1A110E</td></tr>
          <tr><td>LS Series (Centrifugal, 9&nbsp;psi; 14.8&nbsp;l/min)</td><td>Centrifugal</td><td>−20 to 40</td><td>±0.1&nbsp;°C</td><td>1160</td><td>LS51M11A110C</td><td>LS52M21A110E</td></tr>
          <tr><td>LS Series (Centrifugal, 14.5&nbsp;psi; 13.2&nbsp;l/min)</td><td>Centrifugal</td><td>−20 to 40</td><td>±0.1&nbsp;°C</td><td>1290</td><td>LS51MX1A110C</td><td>LS52MY1A110E</td></tr>
          <tr><td>LM Series (Centrifugal, 5.1&nbsp;psi; 7.9&nbsp;l/min)</td><td>Centrifugal</td><td>−10 to 30</td><td>±0.1&nbsp;°C</td><td>560</td><td>LM61GX1A110C</td><td>LM62GY1A110E</td></tr>
          <tr><td>LM Series (Centrifugal, 14.5&nbsp;psi; 13.2&nbsp;l/min)</td><td>Centrifugal</td><td>−10 to 30</td><td>±0.1&nbsp;°C</td><td>420</td><td>LM61MX1A110C</td><td>LM62MY1A110E</td></tr>
          <tr><td>MM Series (Centrifugal, 5.1&nbsp;psi; 7.9&nbsp;l/min)</td><td>Centrifugal</td><td>−5 to 50</td><td>±0.1&nbsp;°C</td><td>460</td><td>MM71GX1A110C</td><td>MM72GY1A110E</td></tr>
          <tr><td>MM Series (Centrifugal, 14.5&nbsp;psi; 13.2&nbsp;l/min)</td><td>Centrifugal</td><td>−5 to 50</td><td>±0.1&nbsp;°C</td><td>435</td><td>MM71MX1A110C</td><td>MM72MY1A110E</td></tr>
          <tr><td>DuraChill Benchtop 400&nbsp;W</td><td>Centrifugal</td><td>−10 to 30</td><td>±0.1&nbsp;°C</td><td>400</td><td>BA05A1G3-310A13C</td><td>BA05A0G3-310A13E</td></tr>
          <tr><td>DuraChill Benchtop 1000&nbsp;W</td><td>Centrifugal</td><td>−20 to 30</td><td>±0.1&nbsp;°C</td><td>1000</td><td>BA06A1G3-310A13C</td><td>BA06A0G3-310A13E</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    variants: [
      {
        key: "ls-turbine",
        label: "LS Series — Turbine Pump",
        series: "LS",
        pump: "Turbine",
        working_temp_range_c: [-20, 40],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 900,
        part_no_60hz: "LS51TX1A110C",
        part_no_50hz: "LS52TY1A110E",
        image: ImgLS
      },
      {
        key: "ls-centrifugal-9psi-14_8lmin",
        label: "LS Series — Centrifugal (9 psi; 14.8 l/min)",
        series: "LS",
        pump: "Centrifugal",
        working_temp_range_c: [-20, 40],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 1160,
        part_no_60hz: "LS51M11A110C",
        part_no_50hz: "LS52M21A110E",
        image: ImgLS
      },
      {
        key: "ls-centrifugal-14_5psi-13_2lmin",
        label: "LS Series — Centrifugal (14.5 psi; 13.2 l/min)",
        series: "LS",
        pump: "Centrifugal",
        working_temp_range_c: [-20, 40],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 1290,
        part_no_60hz: "LS51MX1A110C",
        part_no_50hz: "LS52MY1A110E",
        image: ImgLS
      },
      {
        key: "lm-centrifugal-5_1psi-7_9lmin",
        label: "LM Series — Centrifugal (5.1 psi; 7.9 l/min)",
        series: "LM",
        pump: "Centrifugal",
        working_temp_range_c: [-10, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 560,
        part_no_60hz: "LM61GX1A110C",
        part_no_50hz: "LM62GY1A110E",
        image: ImgLM
      },
      {
        key: "lm-centrifugal-14_5psi-13_2lmin",
        label: "LM Series — Centrifugal (14.5 psi; 13.2 l/min)",
        series: "LM",
        pump: "Centrifugal",
        working_temp_range_c: [-10, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 420,
        part_no_60hz: "LM61MX1A110C",
        part_no_50hz: "LM62MY1A110E",
        image: ImgLM
      },
      {
        key: "mm-centrifugal-5_1psi-7_9lmin",
        label: "MM Series — Centrifugal (5.1 psi; 7.9 l/min)",
        series: "MM",
        pump: "Centrifugal",
        working_temp_range_c: [-5, 50],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 460,
        part_no_60hz: "MM71GX1A110C",
        part_no_50hz: "MM72GY1A110E",
        image: ImgMM
      },
      {
        key: "mm-centrifugal-14_5psi-13_2lmin",
        label: "MM Series — Centrifugal (14.5 psi; 13.2 l/min)",
        series: "MM",
        pump: "Centrifugal",
        working_temp_range_c: [-5, 50],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 435,
        part_no_60hz: "MM71MX1A110C",
        part_no_50hz: "MM72MY1A110E",
        image: ImgMM
      },
      {
        key: "durachill-400w",
        label: "DuraChill® Benchtop — 400 W",
        series: "DuraChill",
        pump: "Centrifugal",
        working_temp_range_c: [-10, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 400,
        part_no_60hz: "BA05A1G3-310A13C",
        part_no_50hz: "BA05A0G3-310A13E",
        image: ImgDC400
      },
      {
        key: "durachill-1000w",
        label: "DuraChill® Benchtop — 1000 W",
        series: "DuraChill",
        pump: "Centrifugal",
        working_temp_range_c: [-20, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 1000,
        part_no_60hz: "BA06A1G3-310A13C",
        part_no_50hz: "BA06A0G3-310A13E",
        image: ImgDC1000
      }
    ],

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "durachill-portable-chillers": {
    id: "benchtop-chillers",
    name: "Benchtop Chillers",
    image: ImgPolyChillerCover, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "PolyScience Benchtop Chillers & Coolers",
    meta: {
      title: "PolyScience Benchtop Chillers & Coolers | Inkarp India",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

    description: `
<section class="product" itemscope itemtype="https://schema.org/Product"
  style="; border-radius:10px; padding:20px; font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,'Apple Color Emoji','Segoe UI Emoji'; color:#111; line-height:1.55;">

  <p class="lead" itemprop="description"
     style="; border-radius:8px; padding:16px; margin:0 0 20px 0; font-size:1.05rem;">
    DuraChill® sets the benchmark for portable recirculating chillers—compact, lightweight, and built for dependable
    temperature control in labs, industry, and field use. A full-color touchscreen, advanced safety/alarms, and
    rugged construction deliver precise cooling wherever it’s needed.
  </p>

  <h2 style=color:#E63946; border-radius:8px; padding:10px 14px; margin:0 0 14px 0; font-size:5rem;">
    Highlights
  </h2>
  <ul class="features"
      style="; border-radius:8px; padding:12px 16px; margin:0 0 24px 0; list-style:disc; background:#fff;">
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">Large, full-color touchscreen (5 languages)</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">Compact, portable footprint (26 × 15 × 21.8&nbsp;in / 66 × 38.1 × 55.4&nbsp;cm)</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">Works at ambient up to 40&nbsp;°C; heats to 70&nbsp;°C without options</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">Choice of turbine or positive-displacement pumps; multiple compressor sizes</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">DynamicFilter™ self-cleaning filter; front-fill reservoir</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">Liquid level monitoring; UV anti-biological light system</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">User-adjustable temperature, pressure & flow alarms</li>
    <li style="border-bottom:1px dotted #E63946; padding:6px 0;">External temperature tracking & communications (optional)</li>
    <li style="padding:6px 0;">Cool Command™ and WhisperCool® technologies</li>
  </ul>

  <h2 style="; border-radius:8px; padding:10px 14px; margin:0 0 10px 0; font-size:1.35rem;">
    Models & Technical Data
  </h2>
  <p style="; border-radius:8px; padding:12px 16px; margin:0 0 18px 0;">
    All models share the same enclosure size. Choose capacity and pump type to suit your application.
  </p>

  <div class="table-wrapper" role="region" aria-label="DuraChill technical comparison"
       style="; border-radius:8px; padding:12px; overflow:auto; margin:0 0 18px 0; background:#fff;">
    <table style="width:100%; border-collapse:collapse; border:2px solid #E63946;">
      <thead>
        <tr>
          <th scope="col" style="border:2px solid #E63946; padding:10px; text-align:left; background:#fff9e5;">Cooling capacity</th>
          <th scope="col" style="border:2px solid #E63946; padding:10px; text-align:left; background:#fff9e5;">Pump type</th>
          <th scope="col" style="border:2px solid #E63946; padding:10px; text-align:left; background:#fff9e5;">MPN (50&nbsp;Hz)</th>
          <th scope="col" style="border:2px solid #E63946; padding:10px; text-align:left; background:#fff9e5;">Alt. MPN (60&nbsp;Hz)</th>
          <th scope="col" style="border:2px solid #E63946; padding:10px; text-align:left; background:#fff9e5;">Max pressure 50&nbsp;Hz</th>
          <th scope="col" style="border:2px solid #E63946; padding:10px; text-align:left; background:#fff9e5;">Max pressure 60&nbsp;Hz</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">850&nbsp;W</td>
          <td style="border:2px solid #E63946; padding:10px;">Turbine</td>
          <td style="border:2px solid #E63946; padding:10px;">CA02A2T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA02A1T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">75&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">90&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">1.4&nbsp;kW</td>
          <td style="border:2px solid #E63946; padding:10px;">Turbine</td>
          <td style="border:2px solid #E63946; padding:10px;">CA03A2T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA03A1T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">75&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">90&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">1.74&nbsp;kW</td>
          <td style="border:2px solid #E63946; padding:10px;">Turbine</td>
          <td style="border:2px solid #E63946; padding:10px;">CA05A2T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA05A1T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">75&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">90&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">2.9&nbsp;kW</td>
          <td style="border:2px solid #E63946; padding:10px;">Turbine</td>
          <td style="border:2px solid #E63946; padding:10px;">CA10A2T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA10A3T1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">75&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">90&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">850&nbsp;W</td>
          <td style="border:2px solid #E63946; padding:10px;">Positive-displacement</td>
          <td style="border:2px solid #E63946; padding:10px;">CA02A2P1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA02A1P1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">83&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">100&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">1.4&nbsp;kW</td>
          <td style="border:2px solid #E63946; padding:10px;">Positive-displacement</td>
          <td style="border:2px solid #E63946; padding:10px;">CA03A2P1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA03A1P1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">83&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">100&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">1.74&nbsp;kW</td>
          <td style="border:2px solid #E63946; padding:10px;">Positive-displacement</td>
          <td style="border:2px solid #E63946; padding:10px;">CA05A2P1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA05A1P1-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">83&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">100&nbsp;psi</td>
        </tr>
        <tr>
          <td style="border:2px solid #E63946; padding:10px;">2.9&nbsp;kW</td>
          <td style="border:2px solid #E63946; padding:10px;">Positive-displacement</td>
          <td style="border:2px solid #E63946; padding:10px;">CA10A2P2-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">CA10A3P2-41AA1N</td>
          <td style="border:2px solid #E63946; padding:10px;">83&nbsp;psi</td>
          <td style="border:2px solid #E63946; padding:10px;">100&nbsp;psi</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" style="border:2px solid #E63946; padding:10px; background:#fff9e5;">
            Enclosure dimensions (all models): 26 × 15 × 21.8&nbsp;in (66 × 38.1 × 55.4&nbsp;cm)
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  <aside class="note"
         style="border:2px solid #E63946; border-radius:8px; padding:12px 16px; background:#fffdf4;">
    <strong style="border:2px solid #E63946; border-radius:6px; padding:4px 8px; display:inline-block; margin-right:8px;">
      Selection tip:
    </strong>
    Turbine pumps provide higher flow at moderate pressure; positive-displacement pumps deliver higher pressure for long/complex circuits or restrictive tooling.
  </aside>
</section>
`
    ,



    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

 "refrigerated-heated-circulating-baths": {
    id: "benchtop-chillers",
    name: "Benchtop Chillers ",
    image: ImgPolyRCCategory, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "PolyScience Benchtop Chillers & Coolers",
    meta: {
      title: "PolyScience Benchtop Chillers & Coolers | Inkarp India",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

  description: `
<section style="font-family: Roboto, Arial, Helvetica, sans-serif; color:#111; line-height:1.6;">
  <!-- Title -->
  <h2 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.75rem; margin:0 0 12px;">
    PolyScience Refrigerated/Heated Circulating Baths
  </h2>

  <!-- Responsive iframe -->
  <div style="position:relative; width:100%; max-width:100%; border-radius:12px; overflow:hidden; background:#F5F5F5; border:1px solid #eee; margin:0 0 20px;">
    <div style="position:relative; padding-top:56.25%; width:100%; height:0;">
      <iframe
        src="https://polysciencestorage.z14.web.core.windows.net/Refrigeration-Bath/index.html"
        allowfullscreen
        width="100%"
        height="100%"
        style="position:absolute; inset:0; border:0;"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  </div>

  <!-- Features -->
  <section style="background:#F5F5F5; border-radius:12px; padding:16px; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 10px;">
      Features
    </h3>
    <ul style="padding-left:18px; margin:0;">
      <li>Working temperatures from −40° to +200°C</li>
      <li>Temperature stabilities to ±0.005°C</li>
      <li>Volumes from 7 to 75 liters</li>
      <li>Four controller types with large, intuitive displays and multiple communication options</li>
      <li>Large bath openings and easy-to-clean surfaces</li>
      <li>Swivel 180™ Rotating Controllers</li>
      <li>LidDock™ Lid Stowing System</li>
      <li>DuraTop™ Chemical-Resistant Deck</li>
      <li>WhisperCool® Environmental Control System</li>
      <li>Cool Command™ Technology</li>
    </ul>
  </section>

  <!-- Accessories -->
  <section style="background:#fff; border-radius:12px; padding:16px; border:1px solid #eee; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 10px;">
      Included Accessories
    </h3>
    <ul style="padding-left:18px; margin:0;">
      <li>Reservoir cover</li>
      <li>Bypass tubing</li>
      <li>Male inlet and outlet adapters for 3/8", 1/4", and 3/16" (0.95, 0.63, and 0.47 cm) tubing;
          1/4" to M16 adapters also included on 50 Hz units</li>
      <li>6' (1.83 m) standard grounded electrical cord with country-specific plug</li>
    </ul>
  </section>

  <!-- Benefits: Intuitive and Precise -->
  <section style="background:#F5F5F5; border-radius:12px; padding:16px; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 8px;">
      Benefits — Intuitive and Precise
    </h3>
    <p style="margin:0 0 8px;">
      Our controllers display it all—internal bath temperature, external bath temperature, set-point, and more—on one easy-to-read screen.
    </p>
    <p style="margin:0 0 8px;">
      Whether equipped with the entry-level controller or our most sophisticated icon-driven SmartTouch™ interface,
      PolyScience units are extremely easy to use. Clear navigational buttons and menu prompts guide you through setup,
      making operational and temperature set-point changes simple and precise.
    </p>
    <p style="margin:0;">
      Advanced programmable temperature controllers guide you through setup and operation using universal icons,
      on-screen help, and logical menus.
    </p>
  </section>

  <!-- Benefits: WhisperCool -->
  <section style="background:#fff; border-radius:12px; padding:16px; border:1px solid #eee; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 8px;">
      Benefits — WhisperCool®
    </h3>
    <p style="margin:0 0 8px;">
      Quiet, energy-efficient heat removal. Our patented WhisperCool® Environmental Control System, standard on most
      Refrigerated/Heated Circulating Baths, reduces noise levels below conversational speech at two meters.
    </p>
    <p style="margin:0;">
      Adaptive environmental technology optimizes performance, reducing overall energy consumption and prolonging equipment life.
    </p>
  </section>

  <!-- Benefits: Cool Command -->
  <section style="background:#F5F5F5; border-radius:12px; padding:16px; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 8px;">
      Benefits — Cool Command™ Technology
    </h3>
    <p style="margin:0;">
      Achieve the temperature you want, when you want it. Cool Command™ efficiently and quickly extracts heat—even at elevated
      temperatures—to ensure the most precise temperature control.
    </p>
  </section>

  <!-- Benefits: Safe and Reliable -->
  <section style="background:#fff; border-radius:12px; padding:16px; border:1px solid #eee; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 8px;">
      Benefits — Safe and Reliable
    </h3>
    <p style="margin:0 0 8px;">
      Redundant over-temperature protection, high and low temperature limits, and alarms alert you instantly to abnormal conditions.
      Lockout capability prevents unauthorized operational changes.
    </p>
    <p style="margin:0 0 8px;">
      RoHS-compliant fabricated components contribute to a cleaner, safer environment. All baths comply with
      WEEE, IEC 61010-1, IEC 61010-2-010, IEC 61326-1, DIN 12876 and are CE and ETL certified.
    </p>
    <h4 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.05rem; margin:8px 0 6px;">
      Class III Safety
    </h4>
    <p style="margin:0;">
      Advanced Series Controllers feature temperature and float shut-off systems meeting DIN 12876-1 Class III standards
      for use with flammable liquids.
    </p>
  </section>

  <!-- Simplified Setup and Maintenance -->
  <section style="background:#F5F5F5; border-radius:12px; padding:16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 8px;">
      Benefits — Simplified Setup & Maintenance
    </h3>
    <p style="margin:0 0 8px;">
      The front-mounted drain makes it easy to remove liquid from the bath and clean it. Our washable air filter helps keep the circulator
      running at peak performance and energy efficient.
    </p>
    <p style="margin:0;">
      DuraTop™ and all surfaces are chemical-resistant and easy to sanitize. Setup instructions are printed “behind the grille” for quick reference.
    </p>
  </section>
</section>
<!-- ===== STYLES (once, at the top of your description) ===== -->
<style>
  .ink-spec-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:16px}
  @media(min-width:768px){.ink-spec-grid{grid-template-columns:repeat(2,1fr)}}
  @media(min-width:1100px){.ink-spec-grid{grid-template-columns:repeat(4,1fr)}}
  .ink-card{background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)}
  .ink-card-head{padding:12px 12px 8px;background:#F5F5F5;border-bottom:1px solid #eee}
  .ink-chip{display:inline-block;font:600 10px/1 Roboto,Arial,sans-serif;color:#fff;background:#6b7280;border-radius:6px;padding:4px 6px;margin-right:6px;vertical-align:middle}
  .ink-chip--ap{background:#e63946}
  .ink-chip--ad{background:#0ea5e9}
  .ink-chip--sd{background:#6366f1}
  .ink-chip--mx{background:#22c55e}
  .ink-title{display:block;margin-top:6px;font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;font-size:14px}
  .ink-img-wrap{background:#fff;display:flex;align-items:center;justify-content:center;padding:10px}
  .ink-img{max-width:100%;height:auto;display:block}
  .ink-table{width:100%;border-collapse:collapse}
  .ink-th,.ink-td{padding:10px 12px;border-top:1px solid #e5e7eb;font:500 13px/1.5 Roboto,Arial,sans-serif;color:#111}
  .ink-th{background:#F5F5F5;width:45%}
  .ink-td{background:#fff}
</style>

<!-- ====== GRID WRAPPER ====== -->
<div class="ink-spec-grid">

  <!-- ===== Card 1 (AP — 7L, -40°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AP, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP1.png" alt="Refrigerated Circulator 7L AP −40°C">
    </div>
    <table class="ink-table" role="table" aria-label="Specifications">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 2 (AP — 7L, −20°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AP, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP2.png" alt="Refrigerated Circulator 7L AP −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 3 (AP — 7L Low Profile, −20°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter Low Profile, AP, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP3.png" alt="Refrigerated Circulator 7L Low Profile AP −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <!-- If your image shows AP07R-20-A11B/A12E for Low Profile, use those. If it's AP7LR, update accordingly. -->
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 4 (AP — 15L, −40°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AP, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP4.png" alt="Refrigerated Circulator 15L AP −40°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP15R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP15R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 5 (AP — 15/20/28/45L, −30/−25°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AP, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP5.png" alt="Refrigerated Circulator 15L AP −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP15R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP15R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, AP, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP6.png" alt="Refrigerated Circulator 20L AP −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 28 Liter, AP, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP7.png" alt="Refrigerated Circulator 28L AP −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP28R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP28R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">12.35 × 14.13 × 5.5 in</td></tr>
    </table>
  </article>

  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 45 Liter, AP, −25°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP8.png" alt="Refrigerated Circulator 45L AP −25°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−25° to 135°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP45R-20-A13D</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP45R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">21.6 × 15.68 × 5.5 in</td></tr>
    </table>
  </article>

</div>
<!-- ===== END GRID ===== -->
<!-- ===== AD GRID ===== -->
<div class="ink-spec-grid">

  <!-- AD — 7L, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD1.png" alt="Refrigerated Circulator 7L AD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- AD — 7L, −40°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AD, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD2.png" alt="Refrigerated Circulator 7L AD −40°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD07R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD07R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- AD — 7L Low Profile, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter Low Profile, AD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD3.png" alt="Refrigerated Circulator 7L Low Profile AD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD7LR-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD7LR-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- AD — 15L, −40°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AD, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD4.png" alt="Refrigerated Circulator 15L AD −40°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD15R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD15R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 15L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD5.png" alt="Refrigerated Circulator 15L AD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD15R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD15R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 20L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, AD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD6.png" alt="Refrigerated Circulator 20L AD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 28L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 28 Liter, AD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD7.png" alt="Refrigerated Circulator 28L AD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD28R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD28R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">12.35 × 14.13 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 45L, −25°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 45 Liter, AD, −25°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD8.png" alt="Refrigerated Circulator 45L AD −25°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−25° to 135°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD45R-20-A13D</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD45R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">21.6 × 15.68 × 5.5 in</td></tr>
    </table>
  </article>

</div>
<!-- ===== SD GRID ===== -->
<div class="ink-spec-grid">

  <!-- SD — 7L, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, SD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD1.png" alt="Refrigerated Circulator 7L SD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- SD — 7L Low Profile, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter Low Profile, SD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD2.png" alt="Refrigerated Circulator 7L Low Profile SD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD7LR-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD7LR-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- SD — 15L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, SD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD3.png" alt="Refrigerated Circulator 15L SD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD15R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD15R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- SD — 20L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, SD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD4.png" alt="Refrigerated Circulator 20L SD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- SD — 28L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 28 Liter, SD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD5.png" alt="Refrigerated Circulator 28L SD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD28R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD28R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">12.35 × 14.13 × 5.5 in</td></tr>
    </table>
  </article>

</div>
<!-- ===== MX GRID ===== -->
<div class="ink-spec-grid">

  <!-- MX — 7L, −20°C -->


  <!-- MX — 20L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, MX, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/MX1.png" alt="Refrigerated Circulator 20L MX −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">MX</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 135°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

 

</div>

`
,



    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

   "heated-circulating-baths": {
    id: "benchtop-chillers",
    name: "Benchtop Chillers",
    image: ImgPolyHeatedCategory, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "PolyScience Benchtop Chillers & Coolers",
    meta: {
      title: "PolyScience Benchtop Chillers & Coolers | Inkarp India",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

  description: `
<section style="font-family: Roboto, Arial, Helvetica, sans-serif; color:#111; line-height:1.6;">
  <!-- Title -->
  <h2 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.75rem; margin:0 0 12px;">
   Heated Circulating Baths
  </h2>

  <!-- Responsive iframe -->
  <div style="position:relative; width:100%; max-width:100%; border-radius:12px; overflow:hidden; background:#F5F5F5; border:1px solid #eee; margin:0 0 20px;">
    <div style="position:relative; padding-top:56.25%; width:100%; height:0;">
      <iframe
        src="https://polysciencestorage.z14.web.core.windows.net/SD28H/index.html"
        allowfullscreen
        width="100%"
        height="100%"
        style="position:absolute; inset:0; border:0;"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  </div>

  <!-- ===== include once per description (skip if already present) ===== -->
<style>
  .ink-spec-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:16px}
  @media(min-width:768px){.ink-spec-grid{grid-template-columns:repeat(2,1fr)}}
  @media(min-width:1100px){.ink-spec-grid{grid-template-columns:repeat(4,1fr)}}
  .ink-card{background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)}
  .ink-card-head{padding:12px 12px 8px;background:#F5F5F5;border-bottom:1px solid #eee}
  .ink-chip{display:inline-block;font:600 10px/1 Roboto,Arial,sans-serif;color:#fff;background:#6b7280;border-radius:6px;padding:4px 6px;margin-right:6px;vertical-align:middle}
  .ink-chip--ap{background:#e63946}
  .ink-chip--ad{background:#0ea5e9}
  .ink-chip--sd{background:#6366f1}
  .ink-chip--mx{background:#22c55e}
  .ink-title{display:block;margin-top:6px;font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;font-size:14px}
  .ink-img-wrap{background:#fff;display:flex;align-items:center;justify-content:center;padding:10px}
  .ink-img{max-width:100%;height:auto;display:block}
  .ink-table{width:100%;border-collapse:collapse}
  .ink-th,.ink-td{padding:10px 12px;border-top:1px solid #e5e7eb;font:500 13px/1.5 Roboto,Arial,sans-serif;color:#111}
  .ink-th{background:#F5F5F5;width:45%}
  .ink-td{background:#fff}
  .ink-h{font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;margin:0 0 10px}
  .ink-panel{background:#F5F5F5;border-radius:12px;padding:16px;border:1px solid #eee}
  .ink-two{display:grid;grid-template-columns:1fr;gap:16px}
  @media(min-width:1024px){.ink-two{grid-template-columns:380px 1fr}}
  .ink-benefit{border:1px solid #BE0010;border-radius:12px;padding:16px;background:#fff}
  .ink-benefit h4{font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;margin:0 0 8px}
</style>

<!-- ======================== FEATURES & ACCESSORIES ======================= -->
<section class="ink-panel" style="margin:0 0 18px">
  <h3 class="ink-h" style="font-size:1.25rem">Features</h3>
  <ul style="margin:0;padding-left:18px">
    <li>Working temperatures from ambient +10° to +200°C</li>
    <li>Temperature stabilities to ±0.005°C</li>
    <li>Capacities from 7 to 28 liters</li>
    <li>Four controller types with large, intuitive displays and multiple communication options</li>
    <li>Large bath openings and easy-to-clean surfaces</li>
    <li>Swivel 180™ Rotating Controllers</li>
    <li>LidDock™ Lid Stowing System</li>
    <li>DuraTop™ Chemical Resistant Deck</li>
  </ul>
  <p style="margin:14px 0 6px;font-weight:600">PolyScience Heated Circulators come with the following accessories:</p>
  <ul style="margin:0;padding-left:18px">
    <li>Reservoir cover</li>
    <li>Bypass tubing</li>
    <li>Male inlet and outlet adapters for 3/8", 1/4", and 3/16" (0.95, 0.63, and 0.47&nbsp;cm) tubing; 1/4" to M16 adapters also included on 50&nbsp;Hz units</li>
    <li>6' (1.83&nbsp;m) standard grounded electrical cord with country-specific plug</li>
  </ul>
</section>

<!-- ============================ AD (Heated) ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- AD — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH1.png" alt="Heated Circulator 7L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD07H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD07H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>

  <!-- AD — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH2.png" alt="Heated Circulator 15L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD15H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD15H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>

  <!-- AD — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH3.png" alt="Heated Circulator 20L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD20H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD20H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>

  <!-- AD — 28L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 28 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH4.png" alt="Heated Circulator 28L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD28H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD28H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ AP (Heated) ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- AP — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH5.png" alt="Heated Circulator 7L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>

  <!-- AP — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH6.png" alt="Heated Circulator 15L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP15H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP15H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>

  <!-- AP — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH7.png" alt="Heated Circulator 20L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP20H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP20H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>

  <!-- AP — 28L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 28 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH8.png" alt="Heated Circulator 28L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP28H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP28H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ MX / SD (Heated) ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- MX — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, MX</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH1.png" alt="Heated Circulator 7L MX"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 135°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX07H135-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX07H135-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
    </table>
  </article>

  <!-- MX — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, MX</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH2.png" alt="Heated Circulator 15L MX"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 135°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX15H135-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX15H135-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
    </table>
  </article>

  <!-- MX — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, MX</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH3.png" alt="Heated Circulator 20L MX"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 135°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX20H135-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX20H135-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
    </table>
  </article>

  <!-- SD — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH4.png" alt="Heated Circulator 7L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD07H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD07H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ SD (Heated) continued ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- SD — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/SDH1.png" alt="Heated Circulator 15L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD15H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD15H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>

  <!-- SD — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/SDH2.png" alt="Heated Circulator 20L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD20H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD20H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>

  <!-- SD — 28L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 28 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/SDH3.png" alt="Heated Circulator 28L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD28H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD28H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ BENEFITS (cards) ============================= -->
<h3 class="ink-h" style="font-size:1.25rem;margin:8px 0 12px">Benefits</h3>


  <div class="ink-benefit">
    <h4>INTUITIVE AND PRECISE</h4>
        <p style="margin:0 0 8px"><strong>Intuitive and Precise</strong></p>
        <p style="margin:0 0 8px">Our controllers display it all: internal bath temperature, external bath temperature, set-point and more—on one easy-to-read screen.</p>
        <p style="margin:0 0 8px">Whether equipped with the entry-level controller or the icon-driven SmartTouch™ interface, units are easy to use. Clear navigation and prompts simplify setup and precise set-point changes.</p>
        <p style="margin:0">Advanced programmable controllers guide setup and operation with universal icons, on-screen help and logical menus.</p>
      </div>

  </div>

  <div class="ink-benefit">
    <h4>SAFE AND RELIABLE</h4>
  
        <p style="margin:0 0 8px"><strong>Safe and Reliable</strong></p>
        <p style="margin:0 0 8px">Redundant over-temperature protection, high/low limits and alarms alert you instantly to abnormal conditions. Lockout prevents unauthorized changes.</p>
        <p style="margin:0 0 8px">All baths comply with WEEE, IEC 61010-1, IEC 61010-2-010, IEC 61326-1, DIN 12876; CE and ETL certified. RoHS-compliant components support a cleaner environment.</p>
        <p style="margin:0"><strong>Class III Safety</strong><br>Advanced Series Controllers include temperature and float shut-off systems meeting DIN 12876-1 Class III for use with flammable liquids.</p>
      </div>
    </div>
  </div>
</div>

<div class="ink-benefit" style="margin:0 0 16px">
  <h4>LIDDOCK™</h4>
 
      <p style="margin:0 0 8px"><strong>LidDock™</strong><br>The stowing system provides a convenient perch while adding liquid or working with samples, without blocking controller viewing or operation. Condensation drains back into the reservoir to keep benches clean and dry.</p>
      <p style="margin:0 0 8px"><strong>DuraTop™</strong><br>Precision molded phenolic top remains cooler at high temperatures, resists chemicals, and is easy to clean.</p>
      <p style="margin:0"><strong>Large Bath Opening</strong><br>Expanded access maximizes usable space within the bath.</p>
    </div>
  </div>
</div>

`
,



    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
}
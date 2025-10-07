import React, { useState } from "react";
// Logos & Images
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';

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

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

export const SynthesisProductDetailsTwo = {
   "reax-top": {
    id: "reax-top",
    name: "Reax top Shakers & Mixers",
    image: ReaxTop,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Reax top Shakers & Mixers",
    meta: {
      title: "Heidolph Reax top Shakers & Mixers | Inkarp India",
      description:
        "The classic vortexer with 5 mm orbit for fast, reliable mixing up to 3,200 rpm. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax top",
        "vortex mixer",
        "lab shaker",
        "5 mm orbit",
        "3200 rpm",
        "Inkarp India"
      ],
      altText: "Reax top shaker"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-10000-00</strong></p>
    <p><strong>The classic with 5 mm shaking orbit</strong></p>

    <p>
      The Reax top series is designed for advanced laboratory and industrial use, featuring high-speed mixing, precise control, and intuitive operation.
      As <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>'s trusted partner in India, we provide installation, training, and maintenance to ensure optimal performance and reliability.
    </p>

    <p>
      This model is ideal for simple mixing tasks. In short-term mode, shaking starts by pressing the test-tube tray—perfect for quick dissolutions.
      In continuous mode, persistent cell pellets can be gently yet powerfully resuspended. With up to <strong>3,200 rpm</strong> and a <strong>5 mm</strong> orbit, you get reliable homogenization even for viscous media.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[520px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>200 – 3,200 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Automatic or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>5 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>51 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 22</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Reax top – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "reax-control": {
    id: "reax-control",
    name: "Reax control Shakers & Mixers",
    image: ReaxControl,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Reax control Shakers & Mixers",
    meta: {
      title: "Heidolph Reax control Shakers & Mixers | Inkarp India",
      description:
        "The precise vortex mixer with speed scaling, up to 2,500 rpm and 5 mm orbit. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax control",
        "vortex mixer",
        "lab shaker",
        "5 mm orbit",
        "2500 rpm",
        "Inkarp India"
      ],
      altText: "Reax control shaker"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-11000-00</strong></p>
    <p><strong>The precise one with speed scaling</strong></p>

    <p>
      The Reax control series features intuitive operation, precise speed control, and advanced programmability.
      With <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>'s engineering and Inkarp's installation, training, and maintenance support, you get accuracy, reliability, and seamless integration.
    </p>

    <p>
      It carries the standout traits of the Reax top in a more controlled form: up to <strong>2,500 rpm</strong> with a
      <strong>5 mm</strong> orbit. Electronic speed control and a scaled display enable gentle, exact settings—ideal for
      applications that require defined speeds. Shear-sensitive organisms stay protected thanks to constant low-range speed.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[520px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>0 – 2,500 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Automatic or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>5 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>51 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 22</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Reax control – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "multi-reax": {
    id: "multi-reax",
    name: "Multi Reax Shakers & Mixers",
    image: MultiReax,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Multi Reax Shakers & Mixers",
    meta: {
      title: "Heidolph Multi Reax Shakers & Mixers | Inkarp India",
      description:
        "The versatile multi-vortexer with 3 mm orbit, 150–2,000 rpm, large tube capacity, and 999 min timer. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Multi Reax",
        "multi vortexer",
        "shaker",
        "mixer",
        "3 mm orbit",
        "2000 rpm",
        "Inkarp India"
      ],
      altText: "Multi Reax shaker"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 545-10000-00</strong></p>
    <p><strong>The versatile model with a 3 mm shaking orbit</strong></p>

    <p>
      The Multi Reax series enables simultaneous shaking/mixing of multiple samples, boosting throughput and productivity.
      With <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a> technology and Inkarp’s installation, training, and maintenance support, you get reliable performance and accuracy.
    </p>

    <p>
      Designed for analytical labs handling many preparations at once, this multi-vortexer accepts
      <strong>12 tubes (Ø 16–32 mm)</strong> up to <strong>26 tubes (Ø 10–16 mm)</strong> (e.g., Falcon/Greiner).
      Snap-cap reaction vessels (Eppendorf) are held securely. A <strong>3 mm</strong> orbit and
      <strong>150–2,000 rpm</strong> speed range deliver excellent mixing results.
    </p>

    <p>
      The integrated timer (up to <strong>999 minutes</strong>) supports unattended runs and signals at the end,
      keeping your workflow moving while you handle other tasks.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[520px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>150 – 2,000 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>3 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 999 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>50 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>1.5 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 30</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Multi Reax – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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
  "titramax-101": {
    id: "titramax-101",
    name: "Titramax 101 Shakers & Mixers",
    image: TitraMax101,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Titramax 101 Shaker",
    meta: {
      title: "Heidolph Titramax 101 Shakers & Mixers | Inkarp India",
      description:
        "Compact, powerful shaker with 3 mm orbit, 150–1,350 rpm, 120-min timer, and 2 kg max load. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Titramax 101",
        "shaker",
        "plate shaker",
        "3 mm orbit",
        "1350 rpm",
        "Inkarp India"
      ],
      altText: "Titramax 101"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-11300-00</strong></p>
    <p><strong>The powerful with a 3 mm shaking orbit</strong></p>

    <p>
      The Titramax 101 is a versatile and compact shaker for mixing, shaking, and stirring a wide range of samples.
      With <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality and Inkarp’s installation, training, and maintenance support, you can rely on accuracy and long-term reliability.
    </p>

    <p>
      With capacity for <strong>four multi-well plates</strong>, the Titramax 101 delivers intensive mixing.
      Its <strong>3 mm orbit</strong> is ideal when solids must be distributed or dissolved within wells.
    </p>

    <p>
      The continuously variable speed range of <strong>150–1,350 rpm</strong> lets you tune mixing intensity precisely.
      Use the integrated <strong>timer up to 120 minutes</strong> for defined processes—or switch to continuous operation.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[520px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>150 – 1,350 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>3 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>31 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>220 × 220 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>2 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 30</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Titramax 101 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "titramax-100": {
    id: "titramax-100",
    name: "Titramax 100 Shakers & Mixers",
    image: TitraMax100,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Titramax 100 Shaker",
    meta: {
      title: "Heidolph Titramax 100 Shakers & Mixers | Inkarp India",
      description:
        "Gentle plate shaker with 1.5 mm orbit, 150–1,350 rpm, and 120-min timer—ideal for cell cultures. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Titramax 100",
        "shaker",
        "microplate shaker",
        "1.5 mm orbit",
        "Inkarp India"
      ],
      altText: "Titramax 100"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-11200-00</strong></p>
    <p><strong>The gentle with a 1.5 mm shaking orbit</strong></p>

    <p>
      We supply high-quality lab equipment with responsive service. The Titramax 100 is a reliable, efficient shaker for
      diverse applications. As an authorized distributor, we support installation, maintenance and repairs to ensure you
      get the best from your Titramax 100.
    </p>

    <p>
      This shaker is particularly suitable where <strong>cell cultures</strong> must be kept in gentle motion.
      Nutrients are excellently distributed by the <strong>1.5 mm orbit</strong> and a speed range of
      <strong>150–1,350 rpm</strong>.
    </p>

    <p>
      The integrated timer can be set up to <strong>120 minutes</strong>; an acoustic signal indicates when the interval
      has expired.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders, themed) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[520px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>150 – 1,350 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>1.5 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>31 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>220 × 220 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>2 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 30</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Titramax 100 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "titramax-1000": {
    id: "titramax-1000",
    name: "Titramax 1000 Shakers & Mixers",
    image: TitraMax1000,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Titramax 1000 Shaker",
    meta: {
      title: "Heidolph Titramax 1000 Shakers & Mixers | Inkarp India",
      description:
        "Largest Titramax model with 1.5 mm orbit, up to 1,350 rpm, 6-plate capacity, timer and optional temperature-controlled operation via modular incubation system.",
      keywords: [
        "Heidolph",
        "Titramax 1000",
        "plate shaker",
        "temperature control",
        "1.5 mm orbit",
        "Inkarp India"
      ],
      altText: "Titramax 1000"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + your colors & fonts)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-12200-00</strong></p>
    <p><strong>The one with temperature-control</strong></p>

    <p>
      Inkarp Instruments is a leading distributor and service provider of
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      Titramax 1000 Shakers &amp; Mixers in India. We provide installation, training, and maintenance for optimal performance.
    </p>

    <p>
      The largest Titramax model includes all features of the Titramax 100: a <strong>1.5 mm orbit</strong>,
      speeds up to <strong>1,350 rpm</strong>, and a timer. With capacity for up to <strong>six multi-well plates</strong>,
      it enables higher throughput. Integrate it into the modular incubation system for <strong>temperature-controlled</strong> processes.
    </p>

    <p>
      Easy loading and removal of plates is ensured by the recess and spacings in the rubber mat.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders, themed) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>150 – 1,350 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>1.5 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>31 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>290 × 258 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>5 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 30</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Titramax 1000 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "rotamax-120": {
    id: "rotamax-120",
    name: "Rotamax 120 Shakers & Mixers",
    image: Rotamax120,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Rotamax 120",
    meta: {
      title: "Heidolph Rotamax 120 Shakers & Mixers | Inkarp India",
      description:
        "Compact orbital shaker (20 mm orbit) with up to 2 kg load, 20–300 rpm, timer to 120 min or continuous, for homogeneous mixing. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Rotamax 120",
        "orbital shaker",
        "laboratory shaker",
        "20 mm orbit",
        "Inkarp India"
      ],
      altText: "Rotamax 120"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + brand colors/fonts)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-41200-00</strong></p>
    <p><strong>The compact one with a maximum loading capacity of 2 kg</strong></p>

    <p>
      Our company offers high-quality laboratory equipment and expert support.
      The <strong>Rotamax 120</strong> is a robust and reliable shaker and mixer, ideal for mixing and shaking tasks.
      We provide comprehensive services, including installation, maintenance, and repair, ensuring optimal performance.
      As <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>'s trusted partner in India, we’ve got you covered.
    </p>

    <p>
      Space-saving and with a load capacity up to <strong>2 kg</strong>, this shaker handles everyday applications with ease.
      Variable speed control <strong>(20–300 rpm)</strong> and a <strong>20 mm orbit</strong> ensure homogeneous distribution.
      Run your applications in continuous mode or via the integrated timer <strong>(up to 120 minutes)</strong>.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Orbital</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>20 – 300 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>20 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>33 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>220 × 220 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>2 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 30</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Rotamax 120 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "unimax-1010": {
    id: "unimax-1010",
    name: "Unimax 1010 Shakers & Mixers",
    image: Unimax1010,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Unimax 1010",
    meta: {
      title: "Heidolph Unimax 1010 Shakers & Mixers | Inkarp India",
      description:
        "Orbital shaker (10 mm orbit) with 30–500 rpm, timer to 99 h 99 min 99 s, RS-232 + Hei-PROCESS semi-automation, and incubation system compatibility. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Unimax 1010",
        "orbital shaker",
        "laboratory mixer",
        "Hei-PROCESS",
        "RS-232",
        "Inkarp India"
      ],
      altText: "Unimax 1010"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + brand colors/fonts)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 543-12310-00</strong></p>

    <p>
      Heidolph's <strong>Unimax 1010</strong> is a reliable and versatile laboratory mixer, ideal for various applications.
      We provide comprehensive services—installation, maintenance, and repair—so you can rely on high-quality
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      equipment and expert support.
    </p>

    <p>
      This shaker integrates into the modular incubation system, making it perfect for temperature-controlled shaking tasks.
      Via the built-in <strong>RS-232</strong> interface and <strong>Hei-PROCESS</strong> software, semi-automated
      workflows are straightforward. Multiple shakers can also be operated together in a climate chamber.
    </p>

    <p>
      With a speed range of <strong>30–500 rpm</strong> and a <strong>10 mm</strong> orbit, samples are kept optimally in motion.
      Time-dependent applications are easy using the timer (<strong>up to 99 h 99 min 99 s</strong>), and the automatic restart
      after a power failure can be configured at the push of a button.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Orbital</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>30 – 500 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer function / continuous operation</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>10 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 99 h 99 min 99 s)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>50 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>–</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>5 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 40</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Unimax 1010 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "unimax-2010": {
    id: "unimax-2010",
    name: "Unimax 2010 Shakers & Mixers",
    image: Unimax2010,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Unimax 2010",
    meta: {
      title: "Heidolph Unimax 2010 Shakers & Mixers | Inkarp India",
      description:
        "Resilient orbital shaker with 20 mm orbit, 20–400 rpm, 10 kg max load, 390×340 mm platform, and timer up to 120 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Unimax 2010",
        "orbital shaker",
        "laboratory mixer",
        "Inkarp India",
        "10 kg load"
      ],
      altText: "Unimax 2010"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 542-10020-00</strong></p>
    <p><em>The resilient one with a maximum loading capacity of 10 kg</em></p>

    <p>
      <strong>Unimax 2010</strong> is a high-performance laboratory mixer designed for heavy-duty applications.
      We provide installation, maintenance, and repair—so you can rely on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality and expert local support.
    </p>

    <p>
      The Unimax 2010 is ideal for increased sample throughput. With a usable area of <strong>390 × 340 mm</strong> and
      multi-storey options, space is utilized efficiently.
    </p>

    <p>
      An orbit of <strong>20 mm</strong> and speeds between <strong>20–400 rpm</strong> ensure gentle, uniform mixing.
      Operate continuously or via the integrated timer (<strong>max. 120 min</strong>).
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Orbital</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>20 – 400 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>20 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>115 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>390 × 340 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>10 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 20</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Unimax 2010 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "duomax-1030": {
    id: "duomax-1030",
    name: "Duomax 1030 Shakers & Mixers",
    image: DuoMax,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Duomax 1030",
    meta: {
      title: "Heidolph Duomax 1030 Shakers & Mixers | Inkarp India",
      description:
        "Compact rocking shaker with 2–50 rpm, 5 kg max load, 290×258 mm platform, timer up to 120 min, and optional incubator integration. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Duomax 1030",
        "rocking shaker",
        "laboratory mixer",
        "Inkarp India",
        "5 kg load"
      ],
      altText: "Duomax 1030"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 543-32205-00</strong></p>

    <p>
      <strong>Duomax 1030</strong> is a versatile, compact rocking shaker ideal for tight lab spaces.
      Rely on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality plus our local installation, maintenance, and repair support.
    </p>

    <p>
      Containers are held securely by an anti-slip rubber mat—even at higher speeds.
      Speed is continuously adjustable between <strong>2–50 rpm</strong>, and you can run continuous
      or timed operation (<strong>up to 120 min</strong>). For gentle amplitudes, a
      <strong>5° tilt angle</strong> is recommended. Duomax 1030 can also be integrated into the
      modular incubator system for temperature-controlled workflows.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Rocking</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>2 – 50 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>–</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>115 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>290 × 258 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>5 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 20</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Duomax 1030 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "promax-1020": {
    id: "promax-1020",
    name: "Promax 1020 Shakers & Mixers",
    image: ProMax1020,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Promax 1020",
    meta: {
      title: "Heidolph Promax 1020 Shakers & Mixers | Inkarp India",
      description:
        "Temperature-controllable reciprocating shaker with 32 mm stroke, 30–250 rpm, 5 kg load, 290×258 mm platform, and timer up to 999 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Promax 1020",
        "reciprocating shaker",
        "temperature controlled shaker",
        "laboratory mixer",
        "Inkarp India",
        "5 kg load"
      ],
      altText: "Promax 1020"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 543-22332-00</strong></p>
    <p><em>The temperature-controlled model with load capacities of 5 kg</em></p>

    <p>
      <strong>Promax 1020</strong> is a robust reciprocating shaker that fits seamlessly into Heidolph’s modular incubator system,
      enabling temperature-controlled applications (including protein purification at 4&nbsp;°C).
      Count on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      performance and our local installation, training, and maintenance support.
    </p>

    <p>
      With a platform of <strong>290 × 258 mm</strong>, a <strong>32 mm</strong> stroke, and speeds of <strong>30–250 rpm</strong>,
      you get reliable separation and mixing. The integrated timer (<strong>up to 999 min</strong>) enables unattended runs; an acoustic signal
      indicates completion. With the appropriate separatory funnel holder, up to four 50–100&nbsp;ml funnels can be mounted securely.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Reciprocating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>30 – 250 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>32 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 999 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>50 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>290 × 258 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>5 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 40</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Promax 1020 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "promax-2020": {
    id: "promax-2020",
    name: "Promax 2020 Shakers & Mixers",
    image: ProMax2020,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Promax 2020",
    meta: {
      title: "Heidolph Promax 2020 Shakers & Mixers | Inkarp India",
      description:
        "Resilient reciprocating shaker with 20 mm stroke, 20–400 rpm, 10 kg max load, 390×340 mm platform, and timer up to 120 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Promax 2020",
        "reciprocating shaker",
        "laboratory mixer",
        "Inkarp India",
        "10 kg load"
      ],
      altText: "Promax 2020"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 542-20020-00</strong></p>
    <p><em>The resilient one with load capacities of 10 kg</em></p>

    <p>
      <strong>Promax 2020</strong> is a high-performance reciprocating shaker for demanding applications.
      Rely on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality plus our local installation, maintenance, and repair support.
    </p>

    <p>
      With a usable area of <strong>390 × 340 mm</strong>, it’s ideal for larger or multiple separatory funnels;
      with optional accessories a second tier can be added for higher throughput.
    </p>

    <p>
      A <strong>20 mm</strong> stroke and <strong>20–400 rpm</strong> speed range deliver clean phase separation
      and efficient extractions. Use continuous mode or the integrated timer (<strong>up to 120 min</strong>)
      with an acoustic end-of-run signal.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Reciprocating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>20 – 400 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>20 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>115 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>390 × 340 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>10 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 20</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Promax 2020 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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


  "polymax-1040": {
    id: "polymax-1040",
    name: "Polymax 1040 Shakers & Mixers",
    image: PolyMax1040,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Polymax 1040",
    meta: {
      title: "Heidolph Polymax 1040 Shakers & Mixers | Inkarp India",
      description:
        "Wave-motion shaker (2–50 rpm) with 5 kg load and 290×258 mm platform. Timer up to 120 min and compatible with incubator system for temperature-controlled applications. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Polymax 1040",
        "wave shaker",
        "laboratory mixer",
        "Inkarp India",
        "5 kg load"
      ],
      altText: "Polymax 1040"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 543-42205-00</strong></p>
    <p><em>The one with temperature-control</em></p>

    <p>
      <strong>Polymax 1040</strong> is a versatile, compact wave-motion shaker for a wide range of applications.
      Rely on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality and our local installation, maintenance, and repair support.
    </p>

    <p>
      The 1000-series platform integrates into the incubation system for temperature-controlled workflows.
      With a load capacity up to <strong>5&nbsp;kg</strong>, the 290&nbsp;×&nbsp;258&nbsp;mm platform provides ample space.
      Speed is adjustable between <strong>2–50&nbsp;rpm</strong>, with continuous or timed operation
      (<strong>max. 120&nbsp;min</strong>).
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Wave</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>2 – 50 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>–</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>115 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>290 × 258 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>5 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 40</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Polymax 1040 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "polymax-2040": {
    id: "polymax-2040",
    name: "Polymax 2040 Shakers & Mixers",
    image: PolyMax2040,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Polymax 2040",
    meta: {
      title: "Heidolph Polymax 2040 Shakers & Mixers | Inkarp India",
      description:
        "Resilient wave-motion shaker (2.5–50 rpm) with 10 kg max load and 390×340 mm platform. Timer up to 120 min; stackable 2nd tier for increased throughput. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Polymax 2040",
        "wave shaker",
        "laboratory mixer",
        "Inkarp India",
        "10 kg load"
      ],
      altText: "Polymax 2040"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 542-40005-00</strong></p>
    <p><em>The resilient one</em></p>

    <p>
      <strong>Polymax 2040</strong> is a high-performance wave-motion shaker for advanced applications.
      Rely on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality and our local installation, maintenance, and repair services.
    </p>

    <p>
      With a usable area of <strong>390 × 340 mm</strong>, Polymax 2040 is ideal for increased sample throughput.
      A second storey can be added to double the effective area.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Wave</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>2.5 – 50 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>–</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>115 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>390 × 340 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>10 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 20</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Polymax 2040 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "vibramax-100": {
    id: "vibramax-100",
    name: "Vibramax 100 Shakers & Mixers",
    image: Vibramax100,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Vibramax 100",
    meta: {
      title: "Heidolph Vibramax 100 Shakers & Mixers | Inkarp India",
      description:
        "Compact circular-vibrating shaker with 3 mm orbit, 150–1,350 rpm, 2 kg max load, 220×220 mm platform, and timer up to 120 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Vibramax 100",
        "vibrating shaker",
        "laboratory mixer",
        "Inkarp India",
        "2 kg load"
      ],
      altText: "Vibramax 100"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-21200-00</strong></p>
    <p><em>The compact one with a load capacity of 2 kg</em></p>

    <p>
      <strong>Vibramax 100</strong> is a compact, versatile circular vibrating shaker for suspending samples,
      solubility and leaching studies. Count on
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      quality and our local installation, maintenance, and repair services.
    </p>

    <p>
      The <strong>3 mm</strong> orbit and <strong>150–1,350 rpm</strong> range deliver efficient mixing.
      Optional tension-roller attachment supports varied container sizes; the non-slip mat secures vessels
      even at high speeds. An integrated timer (up to <strong>120 min</strong>) provides unattended runs
      with an acoustic end signal.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Vibrating</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>150 – 1,350 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>Timer or continuous</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>3 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>Yes (max. 120 min)</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>31 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>220 × 220 mm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>2 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 30</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Vibramax 100 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "reax-20-1-16": {
    id: "reax-20",
    name: "Reax 20 (1–16 rpm) Shakers & Mixers",
    image: Reax20New,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Reax 20 overhead shaker",
    meta: {
      title: "Heidolph Reax 20 Shakers & Mixers | Inkarp India",
      description:
        "Overhead shaker with 1–16 rpm speed range, up to 30 kg load, and capacities for 4/8/12 bottles. Ideal for sedimenting samples across environmental, paint, and materials QA applications. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax 20",
        "overhead shaker",
        "laboratory mixer",
        "Inkarp India",
        "30 kg load",
        "1–16 rpm"
      ],
      altText: "Reax 20"
    },

    // THEMED, RESPONSIVE CONTENT
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-20004-00</strong></p>
    <p><em>The resilient one with a capacity of up to 4 bottles</em></p>

    <p>
      <strong>Reax 20</strong> is an overhead shaker for samples that tend to sediment,
      serving applications from environmental technology to paint processing and
      quality assurance in the materials industry. As an authorized
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      partner in India, we provide installation, training, and maintenance for reliable uptime.
    </p>

    <p>
      With a maximum permissible load of <strong>30 kg</strong>, even high–solids samples are mixed
      effectively. For safety, the unit includes an <strong>emergency stop</strong> switch.
      Choose configurations for <strong>4, 8, or 12 bottles</strong>; also suitable for mixing cylinders
      and wide-neck bottles.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Overhead</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>1 – 16 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>280 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>30 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 21</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Reax 20 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "reax-20-2-32": {
    id: "reax-20-2-32",
    name: "Reax 20 (2–32 rpm) Shakers & Mixers",
    image: Reax20,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Reax 20 overhead shaker (2–32 rpm)",
    meta: {
      title: "Heidolph Reax 20 (2–32 rpm) Shakers & Mixers | Inkarp India",
      description:
        "Overhead shaker with 2–32 rpm, up to 30 kg load, and bottle capacities of 4/8/12. Ideal for sedimenting samples across environmental, paint, and materials QA workflows. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax 20",
        "overhead shaker",
        "laboratory mixer",
        "Inkarp India",
        "2–32 rpm",
        "30 kg load"
      ],
      altText: "Reax 20 (2–32 rpm)"
    },

    // THEMED, RESPONSIVE CONTENT
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-20004-01</strong></p>
    <p><em>The resilient one with a capacity of up to 4 bottles</em></p>

    <p>
      <strong>Reax 20 (2–32 rpm)</strong> is an overhead shaker designed for
      samples that tend to sediment—used in environmental technology, paint
      processing, and materials QA. As an authorized
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      partner in India, we provide installation, training, and maintenance for worry-free operation.
    </p>

    <p>
      With a maximum permissible load of <strong>30 kg</strong>, even high-solids samples
      are mixed reliably. For safety, the unit includes an <strong>emergency stop</strong>.
      Choose configurations for <strong>4, 8, or 12 bottles</strong>; also suitable for mixing
      cylinders or wide-neck bottles.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Overhead</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>2 – 32 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>280 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>30 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 21</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Reax 20 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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

  "reax-2": {
    id: "reax-2",
    name: "Reax 2 Shakers & Mixers",
    image: Reax2,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Reax 2 overhead shaker",
    meta: {
      title: "Heidolph Reax 2 Shakers & Mixers | Inkarp India",
      description:
        "Compact overhead shaker for small volumes with 20–100 rpm, up to 1 kg load. Mix up to 20 tubes (Ø10–18 mm) or use universal rack (230 mm wide, 45–160 mm height). Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax 2",
        "overhead shaker",
        "lab mixer",
        "test tube mixer",
        "Inkarp India",
        "small volume shaker",
        "20–100 rpm"
      ],
      altText: "Reax 2 overhead shaker"
    },

    // THEMED, RESPONSIVE CONTENT
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-21001-00</strong></p>
    <p><em>The compact one for small volumes</em></p>

    <p>
      <strong>Reax 2</strong> is a compact overhead shaker designed for simultaneous
      mixing of multiple small vessels. As an authorized
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      partner in India, we offer installation, maintenance, and repair to keep your workflows running smoothly.
    </p>

    <p>
      With the optional tube adapter, you can mix up to <strong>20 vessels (Ø10–18 mm)</strong>
      — perfect for classic test tubes or 15 mL Falcon tubes. Alternatively, use your rack directly
      in the universal adapter (<strong>width 230 mm</strong>, height adjustable
      <strong>45–160 mm</strong>).
    </p>

    <p>
      A solid metal frame ensures durability and stable continuous operation.
    </p>
  </div>

  <!-- Technical Data (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data</h3>
    <div class="min-w-[560px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr><th class="text-left font-[MaxOT]">Motion</th><td>Overhead</td></tr>
          <tr><th class="text-left font-[MaxOT]">Rotation speed range</th><td>20 – 100 rpm</td></tr>
          <tr><th class="text-left font-[MaxOT]">Operating mode</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Orbit / Stroke</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Timer</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Power input</th><td>27 W</td></tr>
          <tr><th class="text-left font-[MaxOT]">Platform size</th><td>—</td></tr>
          <tr><th class="text-left font-[MaxOT]">Max. load</th><td>1 kg</td></tr>
          <tr><th class="text-left font-[MaxOT]">Overheat protection</th><td>Self-resetting</td></tr>
          <tr><th class="text-left font-[MaxOT]">Protection class (IEC 60529)</th><td>IP 21</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Video -->
  <div class="mt-6">
    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/InJriQgw9VU?rel=0"
        title="Heidolph Reax 2 – demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
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


  "titramax-package": {
    id: "titramax-package",
    name: "Titramax Package Shakers & Mixers",
    image: TitramaxPackage,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Titramax modular incubation package",
    meta: {
      title: "Heidolph Titramax Package | Modular Incubation for Shakers | Inkarp India",
      description:
        "Modular system for mixing, shaking, and tempering—no separate steam cabinet needed. Suits 1000-series shakers: Duomax 1030, Polymax 1040, Titramax 1000, Unimax 1010, Promax 1020. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Titramax Package",
        "modular incubation system",
        "platform shaker incubation",
        "Duomax 1030",
        "Polymax 1040",
        "Titramax 1000",
        "Unimax 1010",
        "Promax 1020",
        "Inkarp India"
      ],
      altText: "Titramax Package modular incubation system"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p class="font-semibold">Adjustable temperature and visual control are key priority for you?</p>
    <p>
      <strong>Titramax Package</strong> is a versatile, modular solution that lets you
      <em>mix, shake, and temper</em> without a separate steaming cabinet. As an authorized
      <a class="underline text-[#BE0010]" href="https://heidolph.com/emea/en" target="_blank" rel="noopener">Heidolph</a>
      partner in India, we provide installation, maintenance, and repair for seamless performance.
    </p>
    <p>
      Compatible with the 1000-series platform shakers:
      <strong>Duomax 1030</strong>, <strong>Polymax 1040</strong>, <strong>Titramax 1000</strong>,
      <strong>Unimax 1010</strong>, and <strong>Promax 1020</strong>.
    </p>
  </div>

  <!-- Visual: Incubator Principle -->
  <div class="mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
    <img
      src="/images/products/heidolph/Incubator-Principle-01.webp"
      alt="Incubator principle of Heidolph modular system"
      class="w-full h-auto object-contain"
      loading="lazy"
    />
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
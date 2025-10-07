import ThalesNano from '/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg';

import ImgHcubeMiniPlus from "/images/products/ThalesNano/HcubeMiniPlus.jpg";
import ImgHcubePro from "/images/products/ThalesNano/HcubePro.jpg";
import ImgHGenieLite from "/images/products/ThalesNano/HGeneLite.jpg";
import ImgHGenie2 from "/images/products/ThalesNano/HGene2.jpg";
import ImgPhoenixII from "/images/products/ThalesNano/PhoenixFlowMeter.jpg";   // Phoenix™ II Flow Reactor
import ImgPhoenixPlatform from "/images/products/ThalesNano/PhoenixPlatform.jpg";
// NOTE: filename in your folder is 'PhotCube.jpg' (missing 'o'). Keep as-is or rename to 'PhotoCube.jpg'.
import ImgPhotoCube from "/images/products/ThalesNano/PhotCube.jpg";


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";



export const ThalesNanoProducts = {
  "h-cube-mini-plus": {
    id: "h-cube-mini-plus",
    name: "H-Cube® Mini Plus — H-Cube® Systems",
    image: ImgHcubeMiniPlus,
    bannerImg: Banner3,     // or Banner2/Banner3 if you prefer
    logo: ThalesNano,
    altText: "ThalesNano H-Cube Mini Plus flow hydrogenation reactor",
    // videoId: "TYcbNOXMQWw", 
    meta: {
      title: "ThalesNano H-Cube® Mini Plus | H-Cube® Systems | Inkarp India",
      description:
        "Safe, powerful, and affordable flow hydrogenation reactor with in-situ H2 generation (no cylinders), up to 100 bar & 100 °C, and CatCart® packed-bed catalysts.",
      keywords: [
        "ThalesNano",
        "H-Cube",
        "H-Cube Mini Plus",
        "flow hydrogenation",
        "CatCart",
        "flow chemistry",
        "Inkarp India"
      ],
      altText: "H-Cube Mini Plus flow reactor"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    /* Compact theme */
    .ink-compact h2,.ink-compact h3,.ink-compact h4{color:#E63946;font-weight:800;margin:8px 0 6px}
    .ink-compact .k-chip{background:#fff4f4;padding:4px 8px;border-radius:6px;display:inline-block}
    .ink-compact .block{margin-bottom:14px}
    .ink-compact ul.prod-det{margin:6px 0 10px;padding-left:18px}
    .ink-compact ul.prod-det li{margin:3px 0}
    .ink-compact table.table-bordered{border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:10px 0}
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top}
    .ink-compact .media{margin-top:12px;border:1px solid #eee;border-radius:8px;overflow:hidden}
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">H-Cube® Mini Plus — H-Cube® Systems</h2>
    <div class="text p_relative d_block">
      <p>Unlock the potential of flow chemistry with <a class="d_iblock heidolph color_black" href="https://thalesnano.com/">ThalesNano</a> H-Cube Mini Plus, distributed and serviced by Inkarp Instruments. Designed for R&amp;D, it delivers precise control, reproducibility, and safety.</p>
      <p>The H-Cube® Mini Plus generates high-pressure hydrogen via water electrolysis, enabling catalytic hydrogenations from ambient conditions up to <strong>100&nbsp;bar</strong> and <strong>100&nbsp;°C</strong> in minutes.</p>
      <p>In-situ H₂ generation and sealed CatCart® packed-bed catalysts remove traditional hydrogenation hazards. The system can also run non-hydrogenation reactions (e.g., C–C coupling) by disabling H₂ generation.</p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Key Features</h4>
    <ul class="prod-det">
      <li>Hydrogenation without cylinders (in-situ H₂)</li>
      <li>No catalyst filtration (CatCart® cartridges)</li>
      <li>Fast reactions; easy-to-use UI</li>
      <li>Automated hydrogen drying system</li>
      <li>Built-in video tutorial; affordable footprint</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">How It Works</h4>
    <ul class="prod-det">
      <li>Water electrolysis generates hydrogen inside the system.</li>
      <li>HPLC pump feeds solvent; mixing valve combines with H₂.</li>
      <li>System reaches set pressure/temperature/flow; then switch to reactant solution.</li>
      <li>Mixture passes through CatCart® packed catalyst; product exits while catalyst remains.</li>
      <li>Collect product; scale from mg to g.</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Technical Data</h4>
    <table class="table table-striped table-bordered">
      <tbody>
        <tr><td>Temperature range</td><td>Room temp to 100 °C</td></tr>
        <tr><td>Pressure range</td><td>Atmospheric to 100 bar</td></tr>
        <tr><td>Flow rate</td><td>0.3 – 3 mL/min</td></tr>
        <tr><td>Max H₂ production</td><td>25–30 NmL/min</td></tr>
        <tr><td>Water reservoir</td><td>100 mL (DI, ≤ 71 nS/cm; ≥ 14 MΩ·cm)</td></tr>
        <tr><td>Dimensions (W×H×D)</td><td>217×200(315 open)×290 mm</td></tr>
        <tr><td>Weight</td><td>7.3 kg</td></tr>
        <tr><td>Voltage</td><td>100–240 V AC</td></tr>
        <tr><td>Typical catalyst</td><td>0.1–0.3 g</td></tr>
        <tr><td>Recommended conc.</td><td>0.01–1 M</td></tr>
      </tbody>
    </table>
  </div>

  <iframe class="media" width="100%" height="520"
    src="https://www.youtube.com/embed/TYcbNOXMQWw"
    title="Performing a reaction in the H-Cube Mini Plus™"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "h-cube-pro": {
    id: "h-cube-pro",
    name: "H-Cube® Pro — H-Cube® Systems",
    image: ImgHcubePro,
    bannerImg: Banner3,
    logo: ThalesNano,
    altText: "ThalesNano H-Cube Pro hydrogenation flow reactor",
    videoId: "",
    meta: {
      title: "ThalesNano H-Cube® Pro | H-Cube® Systems | Inkarp India",
      description:
        "High-throughput hydrogenation flow reactor with in-situ H₂ generation (up to 60 NmL/min), 10–150 °C, 0.3–3 mL/min, and CatCart® compatibility — for advanced R&D and industrial applications.",
      keywords: [
        "ThalesNano", "H-Cube Pro", "flow hydrogenation", "CatCart",
        "flow chemistry", "Inkarp India"
      ],
      altText: "H-Cube Pro flow reactor"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    .ink-compact h2,.ink-compact h3,.ink-compact h4{color:#E63946;font-weight:800;margin:8px 0 6px}
    .ink-compact .k-chip{background:#fff4f4;padding:4px 8px;border-radius:6px;display:inline-block}
    .ink-compact .block{margin-bottom:14px}
    .ink-compact ul.prod-det{margin:6px 0 10px;padding-left:18px}
    .ink-compact ul.prod-det li{margin:3px 0}
    .ink-compact table.table-bordered{border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:10px 0}
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top}
    .ink-compact thead th{background:#fafafa}
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">H-Cube® Pro — H-Cube® Systems</h2>
    <div class="text p_relative d_block">
      <p>Take your flow chemistry to the next level with
        <a class="d_iblock heidolph color_black" href="https://thalesnano.com/">ThalesNano's</a>
        H-Cube Pro, distributed and serviced by Inkarp Instruments. Built for demanding applications,
        it delivers high-throughput processing, precise control & reproducibility, and enhanced safety.
      </p>
      <p>The H-Cube® Pro hydrogenation flow reactor offers wide temperature capability and robust performance for advanced R&D and industrial workflows.</p>
      <p>In-situ H<sub>2</sub> generation and sealed CatCart® packed-bed catalysts remove traditional hydrogenation hazards—technology adopted across pharma, F&F, fine chemicals, agrochemicals, and academia.</p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Key Features</h4>
    <ul class="prod-det">
      <li>Hydrogenation without cylinders: dual electrolytic cells for <em>in situ</em> H<sub>2</sub> up to <strong>60&nbsp;NmL/min</strong> (to <strong>100&nbsp;bar</strong>)</li>
      <li>No catalyst filtration: supports 30&nbsp;mm or 70&nbsp;mm CatCarts<sup>®</sup></li>
      <li>Active cooling to <strong>10&nbsp;°C</strong> and heating to <strong>150&nbsp;°C</strong></li>
      <li>User-friendly software with live parameter display & recording</li>
      <li>Timer function for automation</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">How It Works</h4>
    <ul class="prod-det">
      <li>H<sub>2</sub> is generated by water electrolysis inside the system.</li>
      <li>An HPLC pump feeds solvent; a mixing valve combines it with H<sub>2</sub>.</li>
      <li>The system reaches the set pressure/temperature/flow, then you switch to the reactant solution.</li>
      <li>The mixture passes a CatCart<sup>®</sup> packed-bed catalyst; product exits, catalyst stays.</li>
      <li>Collect product; scale from mg to g.</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Compatible Systems</h4>
    <ul class="prod-det">
      <li><strong>Gas Module™</strong> — Introduce gases beyond H<sub>2</sub> (e.g., CO, O<sub>2</sub>, Syngas) up to 100&nbsp;bar; 14 gases selectable.
        <div style="margin-top:6px;">
          <em>Recommended regulators:</em> N<sub>2</sub>: Linde C200/1A-200B; O<sub>2</sub>: Rhöna EN OX 03-10; H<sub>2</sub>: Linde FDR-200-100-380-H
        </div>
      </li>
      <li><strong>Phoenix Flow Reactor™</strong> — Extends heating up to 450&nbsp;°C; supports CatCarts®, MidiCarts™, coiled reactors, and metal-sealed catalyst columns. Can be used for single or two-step sequences monitored via the H-Cube® Pro UI.</li>
      <li><strong>Autosampler™</strong> — Enables fully automated studies (optimization, catalyst screening with CatCart® Changer, library production).</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Technical Data</h4>
    <table class="table table-striped table-bordered">
      <tbody>
        <tr><td>Temperature range</td><td>10 – 150&nbsp;°C</td></tr>
        <tr><td>Pressure range</td><td>Atmospheric to 100&nbsp;bar</td></tr>
        <tr><td>Flow rate</td><td>0.3 – 3&nbsp;mL/min</td></tr>
        <tr><td>Max H<sub>2</sub> production</td><td>60&nbsp;NmL/min at 100% H<sub>2</sub> production</td></tr>
        <tr><td>Water reservoir</td><td>300&nbsp;mL</td></tr>
        <tr><td>Water spec</td><td>Deionized; ≤ 71&nbsp;nS/cm (≥ 14&nbsp;MΩ·cm)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="block">
    <h4 class="k-chip">System Specifications</h4>
    <table class="table table-striped table-bordered">
      <thead><tr><th colspan="2">H-Cube Pro™</th></tr></thead>
      <tbody>
        <tr><td rowspan="3">Dimensions</td><td>Height: 40&nbsp;cm (15.75″), incl. touch screen</td></tr>
        <tr><td>Width: 37&nbsp;cm (14.6″)</td></tr>
        <tr><td>Depth: 51&nbsp;cm (20.1″)</td></tr>
        <tr><td>Weight</td><td>23&nbsp;kg (46.3&nbsp;lbs)</td></tr>
        <tr><td rowspan="4">Power requirements</td><td>115–230&nbsp;VAC</td></tr>
        <tr><td>5&nbsp;A / 115&nbsp;VAC</td></tr>
        <tr><td>2.5&nbsp;A / 230&nbsp;VAC</td></tr>
        <tr><td>47–63&nbsp;Hz, 300&nbsp;W</td></tr>
        <tr><td rowspan="3">HPLC pump dimensions</td><td>Height: 127&nbsp;mm (5″)</td></tr>
        <tr><td>Width: 76.2&nbsp;mm (3″)</td></tr>
        <tr><td>Depth: 250&nbsp;mm (9.84″)</td></tr>
        <tr><td>HPLC pump weight</td><td>2.32&nbsp;kg (5.1&nbsp;lbs)</td></tr>
        <tr><td>HPLC pump power</td><td>100–240&nbsp;VAC, 1.3&nbsp;A, 47–63&nbsp;Hz, 55&nbsp;W</td></tr>
        <tr><td>Water reservoir</td><td>300&nbsp;mL</td></tr>
      </tbody>
    </table>
  </div>
</div>
`,
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "h-genie-lite": {
    id: "h-genie-lite",
    name: "H-Genie® Lite — Hydrogen Gas Generators",
    image: ImgHGenieLite,
    bannerImg: Banner3,                 // swap to Banner2/3 if you prefer
    logo: ThalesNano,               // reuse your ThalesNano logo import
    altText: "ThalesNano H-Genie Lite high-pressure hydrogen generator",
    videoId: "",
    meta: {
      title: "ThalesNano H-Genie® Lite Hydrogen Gas Generator | Inkarp India",
      description:
        "On-demand hydrogen from water up to 50 bar with integrated safety, simple touchscreen control, compact footprint, and budget-friendly operation.",
      keywords: [
        "ThalesNano", "H-Genie Lite", "hydrogen generator", "50 bar",
        "flow chemistry", "fuel cell testing", "Inkarp India"
      ],
      altText: "H-Genie Lite hydrogen generator"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    .ink-compact h2,.ink-compact h3,.ink-compact h4{color:#E63946;font-weight:800;margin:8px 0 6px}
    .ink-compact .k-chip{background:#fff4f4;padding:4px 8px;border-radius:6px;display:inline-block}
    .ink-compact .block{margin-bottom:14px}
    .ink-compact ul.prod-det{margin:6px 0 10px;padding-left:18px}
    .ink-compact ul.prod-det li{margin:3px 0}
    .ink-compact table.table-bordered{border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:10px 0}
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top}
    .ink-compact thead th{background:#fafafa}
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">H-Genie® Lite — Hydrogen Gas Generators</h2>
    <div class="text p_relative d_block">
      <p>
        ThalesNano’s H-Genie® Lite, distributed and serviced in India by Inkarp Instruments,
        delivers safe, on-demand hydrogen production for research, fuel-cell testing, and chemical synthesis.
        Experience the benefits of <a class="d_iblock heidolph color_black" href="https://thalesnano.com/">ThalesNano’s</a>
        smart generator with local Inkarp support.
      </p>
      <p>Replace cylinders with an accessibly priced, high-pressure smart hydrogen generator.</p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Features</h4>
    <ul class="prod-det">
      <li><strong>Safe:</strong> Generates H₂ from water on demand up to 50&nbsp;bar; internal H₂ leak detectors and multiple safety interlocks.</li>
      <li><strong>Simple:</strong> Intuitive touchscreen—set pressure or time and press start.</li>
      <li><strong>Budget-friendly:</strong> Focused feature set delivers market-leading value.</li>
      <li><strong>Compact:</strong> Fits easily in a fume hood; relocate as needed.</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Technical Data</h4>
    <table class="table table-striped table-bordered">
      <tbody>
        <tr><td>Hydrogen production rate</td><td>1&nbsp;NL/min</td></tr>
        <tr><td>Output pressure range</td><td>1–50&nbsp;bar</td></tr>
        <tr><td>Purity</td><td>≥&nbsp;99.9% at room temperature</td></tr>
        <tr><td>Water requirement</td><td>Deionized water (recommended conductivity &lt;&nbsp;1&nbsp;µS/cm)</td></tr>
        <tr><td>Water consumption rate</td><td>200&nbsp;mL/h</td></tr>
        <tr><td>Water reservoir capacity</td><td>3&nbsp;L</td></tr>
        <tr><td>Recommended environment</td><td>Ventilated laboratory fume hood</td></tr>
        <tr><td>Unit dimensions (H&nbsp;×&nbsp;W&nbsp;×&nbsp;D)</td><td>385&nbsp;×&nbsp;365&nbsp;×&nbsp;476&nbsp;mm</td></tr>
        <tr><td>Unit weight</td><td>33.7&nbsp;kg</td></tr>
        <tr><td>Outlet parameter</td><td>Swagelok 1/8″ stainless-steel tube fitting</td></tr>
      </tbody>
    </table>
  </div>
</div>
`,
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "h-genie-ii": {
    id: "h-genie-ii",
    name: "H-Genie® II — Hydrogen Gas Generators",
    image: ImgHGenie2,
    bannerImg: Banner3,              // or Banner1/Banner3
    logo: ThalesNano,            // reuse your ThalesNano logo import
    altText: "ThalesNano H-Genie II high-pressure hydrogen generator",
    videoId: "",
    meta: {
      title: "ThalesNano H-Genie® II Hydrogen Gas Generator | Inkarp India",
      description:
        "On-demand hydrogen from deionized water up to 100 bar, ≥99.99% purity, data export, and integrated safety — ideal for industrial, fuel cells, and power applications.",
      keywords: [
        "ThalesNano", "H-Genie II", "hydrogen generator", "100 bar",
        "fuel cell", "power generation", "flow chemistry", "Inkarp India"
      ],
      altText: "H-Genie II hydrogen generator"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    .ink-compact h2,.ink-compact h3,.ink-compact h4{color:#E63946;font-weight:800;margin:8px 0 6px}
    .ink-compact .k-chip{background:#fff4f4;padding:4px 8px;border-radius:6px;display:inline-block}
    .ink-compact .block{margin-bottom:14px}
    .ink-compact ul.prod-det{margin:6px 0 10px;padding-left:18px}
    .ink-compact ul.prod-det li{margin:3px 0}
    .ink-compact table.table-bordered{border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:10px 0}
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top}
    .ink-compact thead th{background:#fafafa}
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">H-Genie® II — Hydrogen Gas Generators</h2>
    <div class="text p_relative d_block">
      <p>
        Inkarp Instruments is the authorized distributor and service provider for
        <a class="d_iblock heidolph color_black" href="https://thalesnano.com/">ThalesNano’s</a> H-Genie® II in India.
        Ideal for industrial-scale applications, fuel cells, and power generation, the H-Genie® II provides reliable,
        efficient hydrogen on demand. Inkarp delivers installation, training, and after-sales support.
      </p>
      <p><strong>Eliminates hydrogen cylinders</strong> — generate H<sub>2</sub> from deionized water.</p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Features</h4>
    <ul class="prod-det">
      <li>Hydrogen generation from deionized water — no cylinders needed</li>
      <li>High pressure to expand chemistry capabilities</li>
      <li>Compatible with reactors and balloons</li>
      <li>Simple setup and operation</li>
      <li>Compact footprint for space-saving labs</li>
      <li>Internal hydrogen detector for enhanced safety</li>
      <li>Variable flow, pressure, and volume control</li>
      <li>Monitors H<sub>2</sub> consumption with data export</li>
      <li>Suitable for any laboratory or fume hood</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Technical Data</h4>
    <table class="table table-striped table-bordered">
      <tbody>
        <tr><td>Hydrogen production rate</td><td>0.1–1&nbsp;NL/min</td></tr>
        <tr><td>Output pressure range</td><td>1–100&nbsp;bar</td></tr>
        <tr><td>Purity</td><td>≥&nbsp;99.99% (4.0 @ 100&nbsp;bar)</td></tr>
        <tr><td>Water requirement</td><td>Deionized water (recommended conductivity &lt;&nbsp;1&nbsp;µS/cm)</td></tr>
        <tr><td>Water consumption rate</td><td>250&nbsp;mL/h</td></tr>
        <tr><td>Water reservoir capacity</td><td>3&nbsp;L</td></tr>
        <tr><td>Recommended environment</td><td>Ventilated laboratory fume hood</td></tr>
        <tr><td>Unit dimensions (H&nbsp;×&nbsp;W&nbsp;×&nbsp;D)</td><td>345&nbsp;×&nbsp;365&nbsp;×&nbsp;460&nbsp;mm</td></tr>
        <tr><td>Unit weight</td><td>38&nbsp;kg</td></tr>
        <tr><td>Outlet parameter</td><td>Swagelok O.D. 1/8″</td></tr>
      </tbody>
    </table>
  </div>
</div>
`,
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "phoenix-ii-flow-reactor": {
    id: "phoenix-ii-flow-reactor",
    name: "Phoenix™ II Flow Reactor",
    image: ImgPhoenixII,
    bannerImg: Banner3,            // or Banner1/Banner2
    logo: ThalesNano,          // reuse your ThalesNano logo import
    altText: "ThalesNano Phoenix II high-temperature high-pressure flow reactor",
    videoId: "",
    meta: {
      title: "ThalesNano Phoenix™ II Flow Reactor | Inkarp India",
      description:
        "High-temperature (up to 450 °C) and high-pressure (up to 200 bar) flow reactor with interchangeable reactors for homogeneous and heterogeneous chemistry.",
      keywords: [
        "ThalesNano", "Phoenix II", "flow reactor", "450 °C", "200 bar",
        "CatCart", "Hastelloy", "PTFE", "flow chemistry", "Inkarp India"
      ],
      altText: "Phoenix II Flow Reactor"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    .ink-compact h2,.ink-compact h3,.ink-compact h4{color:#E63946;font-weight:800;margin:8px 0 6px}
    .ink-compact .k-chip{background:#fff4f4;padding:4px 8px;border-radius:6px;display:inline-block}
    .ink-compact .block{margin-bottom:14px}
    .ink-compact ul.prod-det{margin:6px 0 10px;padding-left:18px}
    .ink-compact ul.prod-det li{margin:3px 0}
    .ink-compact table.table-bordered{border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:10px 0}
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top}
    .ink-compact thead th{background:#fafafa}
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">Phoenix™ II Flow Reactor</h2>
    <div class="text p_relative d_block">
      <p>
        Experience the power of flow chemistry with
        <a class="d_iblock heidolph color_black" href="https://thalesnano.com/">ThalesNano’s</a>
        Phoenix™ II Flow Reactor, distributed and serviced by Inkarp Instruments. The new edition extends the chemical window and boosts versatility for research and industrial applications.
      </p>
      <p><strong>New and improved edition.</strong> Temperature up to <strong>450&nbsp;°C</strong>, pressure up to <strong>200&nbsp;bar</strong>, and a wide range of reactor options for both homogeneous and heterogeneous reactions—while keeping processes significantly safer.</p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Key Features</h4>
    <ul class="prod-det">
      <li>Extended parameter window: up to <strong>450&nbsp;°C</strong> and <strong>200&nbsp;bar</strong></li>
      <li><strong>Heterogeneous & homogeneous</strong> capabilities</li>
      <li>Reactor options: PTFE, Hastelloy, and stainless-steel <strong>coiled reactors</strong>; user-fillable metal-metal sealed <strong>cartridges</strong>; prefilled <a href="https://thalesnano.com/products-and-services/catcarts/">CatCarts®</a> and MidiCarts™</li>
      <li>User-friendly <strong>software</strong> and movable <strong>touch screen</strong> GUI</li>
      <li><strong>Modular</strong> & versatile; <strong>rapid</strong> heating and assisted cool-down</li>
      <li>Multiple temperature <strong>sensors</strong>; intuitive, <strong>easy set-up</strong></li>
      <li>PC control option; <strong>automation</strong> ready</li>
      <li>Simple interchange of the reaction zone</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Modules for Phoenix™ II Systems</h4>
    <ul class="prod-det">
      <li><strong>H-Genie® II</strong> — On-demand high-purity H₂ from water up to 100&nbsp;bar and 1&nbsp;NL/min; replace cylinders for safer labs.</li>
      <li><strong>HPLC Pump</strong> — 10&nbsp;mL/min (THS–09037) or 50&nbsp;mL/min (THS–43780) with built-in pressure sensor. Add extra pump(s) for multiple inlets.</li>
      <li><strong>Pressure Module™</strong> — Generates pressure up to 200&nbsp;bar; includes system valve, pressure sensor, and 3-way outlet valve (waste / collection). (THS–09042)</li>
      <li><strong>Gas Module™</strong> — Introduce gases such as H₂, CO, O₂, Syngas, etc., up to 100&nbsp;bar; use multiple modules and mixers for multi-gas inputs.
        <div style="margin-top:6px;">
          <u>Recommended gas regulators:</u><br>
          N<sub>2</sub>: Linde C200/1A-200B<br>
          O<sub>2</sub>: Rhöna EN OX 03-10<br>
          H<sub>2</sub>: Linde FDR-200-100-380-H
        </div>
      </li>
    </ul>
  </div>
</div>
`,
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "phoenix-h-genie-platform": {
    id: "phoenix-h-genie-platform",
    name: "Phoenix – H-Genie® Platform",
    image: ImgPhoenixPlatform,
    bannerImg: Banner3,                 // swap to Banner2/3 if you prefer
    logo: ThalesNano,               // reuse your ThalesNano logo import
    altText: "ThalesNano Phoenix – H-Genie Platform for hydrogenation",
    videoId: "",
    meta: {
      title: "ThalesNano Phoenix – H-Genie® Platform | Inkarp India",
      description:
        "Modular hydrogenation platform combining Phoenix Flow Reactor (up to 450 °C, 200 bar) with H-Genie® on-demand hydrogen (up to 100 bar, 1 NL/min) for safe, scalable flow chemistry.",
      keywords: [
        "ThalesNano", "Phoenix", "H-Genie", "hydrogenation platform",
        "flow chemistry", "450 °C", "200 bar", "CatCart", "Inkarp India"
      ],
      altText: "Phoenix – H-Genie Platform"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    .ink-compact h2,.ink-compact h3,.ink-compact h4{color:#E63946;font-weight:800;margin:0px 0 0px}
    .ink-compact .k-chip{background:#fff4f4;padding:4px 8px;border-radius:6px;display:inline-block}
    .ink-compact .block{margin-bottom:0px}
    .ink-compact ul.prod-det{margin:0px 0 0px;padding-left:18px}
    .ink-compact ul.prod-det li{margin:3px 0}
    .ink-compact table.table-bordered{border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:10px 0}
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top}
    .ink-compact thead th{background:#fafafa}
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">Phoenix – H-Genie® Platform</h2>
    <div class="text p_relative d_block">
      <p>
        Unlock the full potential of hydrogenation with
        <a class="d_iblock heidolph color_black" href="https://thalesnano.com/">ThalesNano’s</a>
        Phoenix – H-Genie® Platform, distributed and serviced by Inkarp Instruments in India.
      </p>
      <p>
        The <strong>Phoenix™ Flow Reactor</strong> delivers high-temperature/high-pressure operation (up to
        <strong>450&nbsp;°C</strong>, <strong>200&nbsp;bar</strong>) with interchangeable reactors, while the
        <strong>H-Genie®</strong> provides on-demand, 4.0-purity hydrogen from water up to <strong>100&nbsp;bar</strong>
        and <strong>1&nbsp;NL/min</strong>—replacing cylinders and expanding chemistry capability.
      </p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Why This Platform</h4>
    <p>The combined system enables safe hydrogenation, scale-up, and catalyst testing with precise gas data monitoring—supporting homogeneous and heterogeneous chemistry in discovery, development, process, petrochemical, and screening labs.</p>
  </div>

  <div class="block">
    <h4 class="k-chip">Benefits</h4>
    <ul class="prod-det">
      <li><strong>Safe:</strong> On-demand H₂ via water electrolysis (to 1&nbsp;NL/min); no cylinders.</li>
      <li><strong>Versatile:</strong> Up to 450&nbsp;°C and 100&nbsp;bar standard (200/300&nbsp;bar variants available).</li>
      <li><strong>Scalable:</strong> CatCarts®/MidiCarts™ and fillable cartridges—mg to kilo-scale.</li>
      <li><strong>Precise:</strong> Mass flow control with exportable pressure/flow data.</li>
      <li><strong>Fast:</strong> Rapid adjustment of temperature, H₂ pressure, and flow for quick optimization.</li>
      <li><strong>Simple & Modular:</strong> Easy setup, customizable configurations, multiple inputs/outputs.</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Features</h4>
    <ul class="prod-det">
      <li>User-friendly software; removable touch-screen GUI</li>
      <li>Rapid heating with assisted cool-down</li>
      <li>Internal and optional external temperature sensors</li>
      <li>PC control option; automation-ready</li>
      <li>Connect multiple Gas Modules™ and pumps</li>
      <li>Monitoring of hydrogen consumption and thermal changes</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Modules</h4>
    <ul class="prod-det">
      <li><strong>HPLC Pump</strong> — 10&nbsp;mL/min or 50&nbsp;mL/min (higher on request) with inlet pressure sensor; add pumps for multiple inlets.</li>
      <li><strong>Pressure Module™</strong> — Generates reactor pressure; includes system valve, pressure sensor, and 3-way outlet valve (waste/collection). Max 200&nbsp;bar.</li>
      <li><strong>Gas Module™</strong> — Introduce H₂/CO/O₂/Syngas, etc., up to 100&nbsp;bar; multiple modules & mixers allow multi-gas inputs.
        <div style="margin-top:6px;">
          <u>Recommended gas regulators:</u><br>
          N<sub>2</sub>: Linde C200/1A-200B<br>
          O<sub>2</sub>: Rhöna EN OX 03-10<br>
          H<sub>2</sub>: Linde FDR-200-100-380-H
        </div>
      </li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Available Reactors & Holders</h4>
    <p>Packed-bed reactors (prefilled CatCarts® 30/70&nbsp;mm, MidiCarts™), empty metal-sealed cartridges (1/8″ to 1″ OD; 125/250&nbsp;mm), and loops (4/8/16/32&nbsp;mL in stainless steel, PTFE, or Hastelloy). Custom reactors available.</p>
    <p>The platform supports series/parallel setups with multiple inputs/outputs and a wide range of solvents.</p>
  </div>
</div>
`,
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "photocube": {
    id: "photocube",
    name: "PhotoCube™",
    image: ImgPhotoCube,
    bannerImg: Banner3,          // optional: Banner1/Banner3
    logo: ThalesNano,        // reuse your ThalesNano logo import
    altText: "ThalesNano PhotoCube photochemistry reactor",
    videoId: "",
    meta: {
      title: "ThalesNano PhotoCube™ Photochemistry Reactor | Inkarp India",
      description:
        "Batch and flow photochemistry in one platform with 7+1 LEDs, interchangeable reactors/loops, and external thermoregulation.",
      keywords: [
        "ThalesNano", "PhotoCube", "photochemistry reactor",
        "batch and flow", "LED wavelengths", "Inkarp India"
      ],
      altText: "PhotoCube photochemistry reactor"
    },

    description: `
<div class="ink-compact" style="font-family:Roboto;color:#333;line-height:1.6;font-size:16px;">
  <style>
    .ink-compact { line-height:1.55; }
    .ink-compact .stack > * + * { margin-top:10px !important; }
    .ink-compact h1,.ink-compact h2,.ink-compact h3,.ink-compact h4,
    .ink-compact p,.ink-compact ul,.ink-compact ol,
    .ink-compact .product-details,.ink-compact .text { margin:0 !important; }
    .ink-compact h2.k-chip,.ink-compact h4.k-chip{
      display:inline-block;background:#fff4f4;border-radius:6px;padding:4px 8px;
      color:#E63946;font-weight:800;
    }
    .ink-compact ul{ padding-left:18px !important; }
    .ink-compact li{ margin:4px 0 !important; }
    .ink-compact table.table-bordered{ border:1px solid #e5e7eb;border-collapse:collapse;width:100%;margin:8px 0 !important; }
    .ink-compact table.table-bordered th,.ink-compact table.table-bordered td{ border:1px solid #e5e7eb;padding:8px 10px;vertical-align:top; }
  </style>

  <div class="product-details p_relative d_block ml_20 block">
    <h2 class="k-chip">PhotoCube™</h2>
    <div class="text p_relative d_block">
      <p>Batch and flow reactions with one reactor.</p>
    </div>
  </div>

  <div class="block">
    <h4 class="k-chip">Features</h4>
    <ul class="prod-det">
      <li>Batch and flow reactions in the same platform</li>
      <li>7&nbsp;+&nbsp;1 wavelengths in one instrument</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Technical Data</h4>
    <ul class="prod-det">
      <li>Available wavelengths: 365, 395, 457, 500, 523, 595, 623&nbsp;nm and white</li>
      <li>Batch reactor volumes: 4&nbsp;mL and 30&nbsp;mL glass vials</li>
      <li>Loop volumes: 5–15&nbsp;mL</li>
      <li>Loop materials: FEP or PFA</li>
      <li>Temperature range: 20–80&nbsp;°C (with external thermoregulation)</li>
      <li>LED input power: up to 128&nbsp;W/color</li>
    </ul>
  </div>

  <div class="block">
    <h4 class="k-chip">Applications</h4>
    <ul class="prod-det">
      <li>Minisci reaction</li>
      <li>Negishi coupling</li>
      <li>Wohl–Ziegler bromination</li>
    </ul>
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
import React from "react";
import { Link } from "react-router-dom";

import Inkarp from "/inkarp old.svg";
import Bandelin from "/src/assets/PrincipalLogos/RowThree/bandelin.jpg";
import Jeiotech from "/src/assets/PrincipalLogos/RowThree/Jeiotch.png";
import Being from "/src/assets/PrincipalLogos/RowThree/Being.svg";
import Kubota from "/src/assets/PrincipalLogos/RowThree/Kubota.png";
import Luzchem from "/src/assets/PrincipalLogos/RowThree/Luzchem.png";
import RobotCoupe from "/src/assets/PrincipalLogos/RowThree/robot.png";
import Sonics from "/src/assets/PrincipalLogos/RowThree/sonics-logo.svg";
import Airtech from "/src/assets/PrincipalLogos/RowFour/Airtech.png";
import Innova from "/src/assets/PrincipalLogos/RowFour/Innova.png";
import Sarotius from "/src/assets/PrincipalLogos/RowFour/sartorius.svg";
import Hermle from "/src/assets/PrincipalLogos/RowSeven/hermle.jpg";
import Buchi from "/src/assets/PrincipalLogos/RowSeven/BUCHI.svg";

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
 
   { principal: "Sarotius", logo: Sarotius, products: ["Arium mini plus", "Arium pro", "Arium comfort", "Arium advance"] },
  { principal: "Buchi", logo: Buchi, products: ["Lyovapours", "Kjel Line"] },
 
  { principal: "Inkarp", logo: Inkarp, products: ["Ultrasonic Cleaner", "Ultrasonic Bath"] },
 
   { principal: "Bandelin", logo: Bandelin, products: ["Ultrasonic Baths"] },
  // { principal: "Airtech", logo: Airtech, products: ["Bio saftey cabinet"] },
  { principal: "Innova", logo: Innova, products: ["Ice Flaker", "Glassware Washer"] },
  
  { principal: "Robotcoupe", logo: RobotCoupe, products: ["Blixer"] },
   {
    principal: "Jeiotech", logo: Jeiotech, products: [
      "Environmental Chambers",
      "Shaker",
      "Ovens",
      "Bath Circulators",
      "Storage",
      "Autoclaves",
    ]
  },
   {
    principal: "Hermle",
    logo: Hermle,
    products: [
      "Compact Centrifuge",
      "High Speed Centrifuge",
      "Microliter Centrifuge",
      "Universal Centrifuge",
      "Oil Test Centrifuge",
      "Large Volume Centrifuges",
      "Filtration Centrifuge",
    ],
  },
   {
    principal: "Luzchem",
    logo: Luzchem,
    products: [
      "LED Illuminator",
      "Well Plate Illuminator",
      "Laser Flash Photolysis",
      "Photo reactors and exposure tools",
      "Extra Large Photoreactor with heating capabilities",
      "Solar Simulators (300-800nm)",
      "Xenon Illuminator",
    ],
  },
  {
    principal: "Sonics",
    logo: Sonics,
    products: [
      { heading: "Ultrasonic Processors" },
      "Laboratory Scale Models (Volumn 0.2ml-1L)",
      "Laboratory Scale Models (Volumn 0.2ml-0.5ml)",
      "Production Scale Models (Volumn 10L-50L)",
      "Atomizer",
      { heading: "Accessories" },
      "Accessories",
      // "VCX 750-500 W SYSTEMS",
      // "VCX 130-50 W SYSTEMS",
      // "VCX 1500",
      // "VCX 2500",
      // "OEM",
    ],
  },
 
  {
    principal: "Kubota",
    logo: Kubota,
    products: [
      { heading: "General Purpose Centrifuges" },
      "Benchtop Centrifuge (Model S300T)",
      "Benchtop Centrifuge (Model S500T)",
      "Benchtop Centrifuge (Model S700T)",
      "Benchtop High Speed Refrigerated Centrifuge (Model M500TR)",
      "Benchtop Refrigerated Centrifuge (Model S300TR)",
      "Benchtop Refrigerated Centrifuge (Model S700TR)",
      "Tabletop Refrigerated Centrifuge (Model 5500)",
      "Floor Standing Refrigerated Centrifuge (S300FR)",
      "Floor Standing Refrigerated Centrifuge (S700FR)",

      { heading: "Laboratory Centrifuges" },
      "Tabletop Micro Centrifuge (Model 3300)",
      "Tabletop Micro Refigerated Centrifuge (Model 3520)",
      "Micro Refigerated Centrifuge (Model 3700)",
      "Micro Refigerated Centrifuge (Model 3740)",
      "High Speed Refigerated Centrifuge (Model 6000)",
      "High Speed Refigerated Centrifuge (Model 7000)",
      "Benchtop Centrifuge (Plate Spin 3)",
      "Hybrid High Speed Refigerated Centrifuge (Model 6200)",

      { heading: "Large Laboratory Centrifuge" },
      "High Capacity Refrigerated Centrifuge (Model 8730)",
      "Large Capacity Refrigerated Centrifuge (Model 9940)",
      "Large Capacity Refrigerated Centrifuge (Model 9920)",
    ],
  },
  {
    principal: "Being",
    logo: Being,
    products: [
      { heading: "Sample Preparation & Processing" },
      "Vaccum Oven",
      "Vaccum Pump(Oil)",
      "Vaccum Pump(Dry)",
      "Drying Oven",
      "Muffle Furnance",
      "Rotary Evaporator",
      "Diaphragm Pump",
      "Smart Vaccum Chamber",
      { heading: "Temperature Control Storage Chambers" },
      "Ultra Low Temperature Freezer",
      "Low Temperature Freezer",
      "Laboratory Refrigrator (2-8' C)",
      "Combined Freezer and Refrigrator (-20 C) & (2 C to 8 C)",
      "Recirculating Chiller",
      "Heating Incubator",
      "Natural Convection/Air forced Heating Incubator",
      "Cooling Incubator",
      "Water Bath",
 
      { heading: "Cell Culture & Microbiology" },
      "CO2 Incubator",
      "Trigas Incubator",
      "Shaking Incubator",
      "Stackable Shaking Incubator",
      "Large Vertical Shaking Incubator",
      "Biosaftey Cabinet",
      "Laminar Air Flow",
      "Stackable Incubated & Refrigerated Shaker",
      "Stackable CO2 Incubated & Refrigerated Shaker",
    ],
  },
  
];

export default function GeneralLaboratoryInstruments() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div
              key={`principal-${i}`}
              className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={group.logo}
                  alt={group.principal}
                  className="w-32 h-10 object-contain"
                />
                {/* Optional: show principal name */}
                {/* <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3> */}
              </div>

              {/* Products list with support for headings */}
              <ul className="space-y-2">
                {group.products.map((item, idx) => {
                  if (typeof item === "string") {
                    return (
                      <li key={`p-${i}-item-${idx}`}>
                        <Link
                          to={`/verticals/general-laboratory-instrument/${slugify(item)}`}
                          className="block rounded-lg bg-[#F5F5F5] hover:bg-gray-200 px-3 py-2 text-sm font-[Roboto] text-[#0a2540] hover:text-[#E63946] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  }
                  if (item?.heading) {
                    return (
                      <li
                        key={`p-${i}-heading-${idx}`}
                        className="pt-3 first:pt-0"
                      >
                        <div className="rounded-md bg-[#fff0f0] text-[#E63946] px-3 py-2 font-[MaxOT] font-semibold">
                          {item.heading}
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

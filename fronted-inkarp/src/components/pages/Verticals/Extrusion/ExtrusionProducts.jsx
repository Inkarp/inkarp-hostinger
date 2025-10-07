import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";

import Gea from "/src/assets/PrincipalLogos/RowFive/GEA.png";
import Proscientific from "/src/assets/PrincipalLogos/RowFive/Proscientific.png";
import Evonik from "/src/assets/PrincipalLogos/RowFive/Evonik.png";

import { Homogenizers } from "../../../../data/Homogenizers";

const synthesisData = [
  {
    principal: "GEA",
    logo: Gea,
    name: "Homogenizers",
    products: [
      "Industrial Homogenizers",
      "Laboratory Homogenizers",
      "Skid-Mounted Homogenizers",
      "Skid Mounted Homogenizers", // allow both spellings
    ],
  },
  {
    principal: "Proscientific",
    logo: Proscientific,
    name: "Homogenizers",
    products: [
      "Hand Held Homogenizer",
      "Digital Benchtop Homogenizer",
      "Automated Homogenizer",
      "Digital Homogenizer",
      "Programmable Benchtop Homogenizer",
    ],
  },
  {
    principal: "Evonik",
    logo: Evonik,
    name: "",
    products: ["Drug-delivery-Parental Drug Delivery"],
  },
];

const synthesisProducts = {
  ...Homogenizers, 
};

export default function ExtrusionProducts() {
  const navigate = useNavigate();
  const { type = "industrial-homogenizers" } = useParams();

  const selectedData = synthesisProducts[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  const products = selectedData?.models || selectedData || [];

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = pageData?.faqs || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // robust match for principal logo based on "type"
  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .replaceAll("-", " ")
      .replace(/\s+/g, " ")
      .trim();

  const getPrincipalLogoByType = (t) => {
    const readableType = normalize(t);
    for (const principal of synthesisData) {
      for (const product of principal.products) {
        if (normalize(product).includes(readableType)) {
          return principal.logo;
        }
      }
    }
    return Gea; // safe fallback for this page
  };

  return (
    <>
      <div className="flex w-full h-full overflow-hidden">
        {meta && (
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords?.join(", ")} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta name="robots" content="index, follow" />
          </Helmet>
        )}

        {/* Main Content — same layout style as Rheology */}
        <main className="w-full h-full overflow-y-auto py-2 px-5 font-[Roboto]">
          <div className="flex items-center justify-around mb-6 bg-gray-100 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-[#0a2540] capitalize font-[MaxOT]">
              {type.replaceAll("-", " ")}
            </h2>
            <img
              src={getPrincipalLogoByType(type)}
              alt="Principal Logo"
              className="w-32 h-32 object-contain rounded"
            />
          </div>

          {/* Dynamic content */}
          <div className="p-6 max-w-6xl mx-auto">
            {pageData.title && (
              <h1 className="text-4xl font-bold mb-4 text-center font-[MaxOT]">
                {pageData.title}
              </h1>
            )}
            {pageData.intro && <p className="mb-6">{pageData.intro}</p>}
            {pageData.highlight && <p>{pageData.highlight}</p>}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
              {pageData.modelHeading && (
                <h2 className="text-2xl font-semibold font-[MaxOT]">
                  {pageData.modelHeading}
                </h2>
              )}

              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={index}
                    to={`/verticals/extrusion-and-homogenization/${type}/${product.slug}`}
                    className="bg-[#F5F5F5] rounded-xl shadow-xl hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center hover:scale-[1.03] hover:translate-y-2 hover:bg-white font-[Roboto] text-[#0a2540] font-semibold"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain mb-4 rounded"
                    />
                    <h3 className="text-lg font-semibold text-[#0a2540] font-[MaxOT]">
                      {product.name}
                    </h3>
                  </Link>
                ) : (
                  <div key={index} className="col-span-full">
                    <h3 className="text-xl font-semibold text-[#E63946] mt-8 mb-2 font-[MaxOT]">
                      {product.heading}
                    </h3>
                  </div>
                )
              )}
            </div>

            {pageData.infoSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                  {pageData.infoSection.title}
                </h2>
                <p className="mb-6 whitespace-pre-line">
                  {pageData.infoSection.description}
                </p>
              </>
            )}

            {pageData.subSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                  {pageData.subSection.title}
                </h2>
                <p className="mb-6">{pageData.subSection.description}</p>
              </>
            )}

            {pageData.industries && (
              <section className="mt-16">
                <h2 className="text-3xl font-semibold mb-4 text-[#0a2540] font-[MaxOT]">
                  Industries We Serve
                </h2>
                {pageData.industriesIntro && (
                  <p className="mb-8 text-gray-700 font-[Roboto]">
                    {pageData.industriesIntro}
                  </p>
                )}

                <div className="space-y-8">
                  {pageData.industries.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 font-[Roboto]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {Array.isArray(pageData.industries) && pageData.industries.length > 0 && (
                  <>
                    <h2 className="text-3xl font-semibold mt-16 mb-6 text-[#0a2540] font-[MaxOT]">
                      Key Advantages – Industry-wise Benefits
                    </h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {pageData.industries.map((industry, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6"
                        >
                          <h3 className="text-lg font-bold text-[#E63946] mb-3 font-[MaxOT]">
                            {industry.title}
                          </h3>
                          <ul className="list-disc list-inside text-gray-700 text-sm font-[Roboto] space-y-2">
                            {industry.benefits?.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}

            {pageData.distributor && (
              <section className="mt-20">
                <h2 className="text-3xl font-semibold mb-3 text-[#0a2540] font-[MaxOT]">
                  {pageData.distributor.title}
                </h2>
                <p className="text-gray-700 font-[Roboto] whitespace-pre-line leading-relaxed">
                  {pageData.distributor.text}
                </p>
              </section>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-1 font-[MaxOT] mt-10">
                  Frequently Asked Questions
                </h2>
                <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
                  <div id="accordion-collapse" data-accordion="collapse" className="space-y-0">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h2 id={`accordion-collapse-heading-${index}`}>
                          <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left border-l-2 border border-[#E63946] ${
                              index === 0 ? "rounded-t-xl" : ""
                            } ${openIndex === index ? "text-black bg-gray-100" : "text-gray-800 hover:bg-gray-100"}`}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                          >
                            <span className="text-xl font-semibold font-[MaxOT]">
                              {faq.question}
                            </span>
                            <svg
                              data-accordion-icon
                              className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : ""
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </h2>
                        <div
                          id={`accordion-collapse-body-${index}`}
                          aria-labelledby={`accordion-collapse-heading-${index}`}
                          className={`${openIndex === index ? "" : "hidden"}`}
                        >
                          <div className="p-5 border border-gray-200 border-t-0 bg-gray-50 text-gray-700 font-[Roboto]">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

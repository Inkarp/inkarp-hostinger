import React, { useState } from "react";
import { X } from "lucide-react";
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';

import RegisterForm from "./RegisterForm";
import { Helmet } from "react-helmet";
import WebinarBanner from "/src/assets/Events/WebinarBanner.jpg";
import Webinars from "./Webinars";
const webinarLinks = [

]

const webinars = [

  {
    id: 7,
    title: "Empower Insights: Master Data-Driven Strategies to Minimize Risk & Ensure Data Integrity",
    description:
      "Learn data-driven strategies to ensure data integrity and efficiency in regulated workflows.",
    date1: "October 21 | 07:30 PM IST",
    date: "2025-10-21",
    // image: "https://www.inkarp.co.in/assets/images/Empower-Webinar.jpg",
    img: Waters,
    details:
      ` <div>
        <p><strong>Empower Insights: Master Data-Driven Strategies to Minimize Risk & Ensure Data Integrity</strong></p>
        <p className="mt-2">
          Transferring analytical methods between laboratories in regulated industries can be more challenging than it appears.
          Inconsistencies may compromise data reliability, trigger false positives or negatives, and create costly regulatory and operational setbacks.
        </p>
        <p className="mt-2">
          With the right approach, you can ensure confidence, efficiency, and compliance in your workflows.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✅ Optimized Comparative Testing – Evaluate method transfer success and identify potential pitfalls</li>
          <li>✅ Enhanced Data Integrity – Implement continuous monitoring for robust, reliable results</li>
          <li>✅ Accelerated Workflows – Leverage innovative digital tools to simplify method transfer and post-transfer monitoring</li>
        </ul>
        <p className="mt-4">
          💬 <strong>Interactive Q&A:</strong> Ask your questions live and gain actionable insights from Empower Software experts.
        </p>
        <p className="mt-4 font-semibold">📅 Event Details:</p>
        <ul className="list-disc list-inside mt-2">
          <li>📅 <strong>Tuesday, October 21, 2025</strong></li>
          <li>🕓 <strong>07:30 PM IST</strong></li>
        </ul>
      </div>`
  },
  {
    id: 6,
    title: "Advancing Bioseparations: A Deep Dive into HPLC Detection Technologies",
    description:
      "Explore the latest in HPLC detection technologies and their role in modern bioseparations.",
    date1: "October 16 | 08:30 PM IST",
    date: "2025-10-16",
    // image: "https://www.inkarp.co.in/assets/images/HPLC-Detection.jpg",
    img: Waters,
    details:
      `<div>
        <p><strong>Advancing Bioseparations: A Deep Dive into HPLC Detection Technologies</strong></p>
        <p className="mt-2">
          Explore the latest in high-performance liquid chromatography (HPLC) detection technologies and learn how they are shaping modern bioseparations.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✅ UV Detection Systems – Including tunable UV (TUV) and photodiode array (PDA) detectors</li>
          <li>✅ Fluorescence (FLR), Evaporative Light Scattering (ELS), and Single Quadrupole (SQ) Mass Detection</li>
          <li>✅ Application Examples – See how each detector supports method development and routine analysis</li>
        </ul>
        <p className="mt-4">
          Whether you’re a researcher, analyst, or industry professional, this session will give you a clear understanding of how to choose and apply the right detection technology for your bioseparation needs.
        </p>
        <p className="mt-4 font-semibold">📅 Event Details:</p>
        <ul className="list-disc list-inside mt-2">
          <li>📅 <strong>Thursday, October 16, 2025</strong></li>
          <li>🕓 <strong>08:30 PM IST</strong></li>
          <li>⏱ <strong>Duration: 1 hour</strong></li>
        </ul>
      </div>`
  },
  {
    id: 4,
    title: "Advancing Bioseparations: A Deep Dive into HPLC Detection Technologies",
    description:
      "Explore the latest in high-performance liquid chromatography (HPLC) detection technologies and learn how they are shaping modern bioseparations. 🔬⚡",
    date1: "October 16 | 08:30 PM IST",
    date: "2025-10-16",
    // image: "https://www.inkarp.co.in/assets/images/HPLC-Bioseparations.jpg",
    img: Waters,
    details: `
  <p><strong>Advancing Bioseparations: A Deep Dive into HPLC Detection Technologies</strong></p>

  <p class="mt-2">
    Explore the latest in high-performance liquid chromatography (HPLC) detection technologies and learn how they are shaping modern bioseparations.
  </p>

  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>✅ UV Detection Systems – Including tunable UV (TUV) and photodiode array (PDA) detectors</li>
    <li>✅ Fluorescence (FLR), Evaporative Light Scattering (ELS), and Single Quadrupole (SQ) Mass Detection – Understand their strengths, limitations, and best applications</li>
    <li>✅ Application Examples – See how each detector supports method development and routine analysis</li>
  </ul>

  <p class="mt-4">
    Whether you’re a researcher, analyst, or industry professional, this session will give you a clear understanding 
    of how to choose and apply the right detection technology for your bioseparation needs.
  </p>

  <p class="mt-4 font-semibold">📅 Event Details:</p>
  <ul class="list-disc list-inside mt-2">
    <li>📅 <strong>Thursday, Oct 16, 2025</strong></li>
    <li>🕓 <strong>08:30 PM IST</strong></li>
    <li>⏱ <strong>Duration: 1 hour</strong></li>
  </ul>

  
  `
  },
  {
    id: 5,
    title: "Accelerating Chemical & Critical Material Manufacturing with AI and Automation",
    description:
      "The future of material manufacturing is here — faster, smarter, and powered by AI and autonomous experimentation.",
    date1: "October 15 | 08:30 PM IST",
    date: "2025-10-15",
    // image: "https://www.inkarp.co.in/assets/images/AI-Automation.jpg",
    img: Chemspeed,
    details: `
      <div>
        <p><strong>Accelerating Chemical & Critical Material Manufacturing with AI and Automation</strong></p>
        <p className="mt-2">
          The future of material manufacturing is here — faster, smarter, and powered by AI and autonomous experimentation.
          Join us to see how cutting-edge technologies are transforming research and production by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✅ Automating chemical processes for faster and safer experiments</li>
          <li>✅ Optimizing synthesis at scale using AI-driven decision-making</li>
          <li>✅ Predicting functional materials with data-driven insights</li>
        </ul>
        <p className="mt-4">
          Whether you’re a researcher, engineer, or industry innovator, this session offers a front-row view of how AI and automation
          are redefining material discovery and accelerating critical manufacturing.
        </p>
        <p className="mt-4 font-semibold">📅 Event Details:</p>
        <ul className="list-disc list-inside mt-2">
          <li>📅 <strong>Wednesday, October 15, 2025</strong></li>
          <li>🕓 <strong>08:30 PM IST</strong></li>
        </ul>
      
      </div>`
  },

  {
    id: 3,
    title: "Consistent Scale-up for In Vitro Transcription (IVT)",
    description:
      "Achieve precision, reproducibility, and efficiency in In Vitro Transcription workflows with advanced scale-up solutions from Radleys. 🔬⚙️",
    date1: "October 07–08 | Multiple Time Slots IST",
    date: "2025-10-07",
    // image: "https://www.inkarp.co.in/assets/images/IVT-Webinar.jpg",
    img: Radleys,
    details: `
  <p><strong>Consistent Scale-up for In Vitro Transcription (IVT)</strong></p>

  <p class="mt-2">
    Achieve precision, reproducibility, and efficiency in IVT workflows with advanced scale-up solutions from Radleys. 
    In this technical webinar, discover how reactor systems and scalable process design enable consistent RNA synthesis 
    and improved workflows:
  </p>

  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>✅ <strong>IVT Optimization</strong> – Strategies to boost yield and maintain process consistency</li>
    <li>✅ <strong>Radleys Reactor Advantage</strong> – Precision in temperature, mixing, and reaction control</li>
    <li>✅ <strong>Smarter Workflows</strong> – Automation that ensures scalable and reproducible results</li>
  </ul>

  <p class="mt-4">
    Whether you’re in bioprocess development, RNA therapeutics, or academic research, this session 
    will give you practical insights into building robust IVT processes.
  </p>

  <p class="mt-4 font-semibold">📅 Event Details:</p>
  <ul class="list-disc list-inside mt-2">
    <li>📅 <strong>Tuesday, Oct 07, 2025</strong> – 04:30 PM, 10:30 PM IST</li>
    <li>📅 <strong>Wednesday, Oct 08, 2025</strong> – 06:30 AM, 10:30 AM, 05:30 PM IST</li>
  </ul>

  `
  },
  {
    id: 2,
    title: "High-Throughput Product Development with Chemspeed Automation",
    description:
      "Product development in agricultural biosolutions is evolving—faster, smarter, and more sustainable. In this exclusive webinar, discover how automated formulation workflows accelerate development, reduce material consumption, and enhance reproducibility. ✅",
    date1: "October 02 | 12:30 PM & 08:30 PM IST",
    date: "2025-10-02",
    // image: "https://www.inkarp.co.in/assets/images/Chemspeed-HTPD.jpeg",
    img: Chemspeed,
    details: `
  <p><strong>High-Throughput Product Development with Chemspeed Automation</strong></p>

  <p class="mt-2">
    Product development in agricultural biosolutions is evolving—faster, smarter, and more sustainable.
    In this exclusive webinar, discover how automated formulation workflows are:
  </p>

  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>✅ Accelerating product development cycles</li>
    <li>✅ Reducing material consumption and time-to-result</li>
    <li>✅ Enhancing reproducibility through data-driven design</li>
  </ul>

  <p class="mt-4">
    Whether you’re a researcher, product innovator, or R&amp;D leader, this session will provide a
    front-row view of how Chemspeed solutions are shaping the future of high-throughput product development.
  </p>

  <p class="mt-4 font-semibold">📅 Two convenient sessions to choose from:</p>
  <ul class="list-disc list-inside mt-2">
    <li>📅 <strong>Thursday, Oct 02, 2025</strong></li>
    <li>🕘 <strong>Session 1: 12:30 PM IST</strong></li>
    <li>🕔 <strong>Session 2: 08:30 PM IST</strong></li>
  </ul>

  <p class="mt-4">👉 Don’t miss this opportunity to see how automation can transform your workflow.</p>
  <p class="mt-2 font-semibold">Transforming Agricultural Biosolutions with Automation – Join the Webinar</p>
  `
  },
  {
    id: 1,
    title: "Analytical Control in Action – Real-World Case Studies",
    description:
      "Practical insights are as important as theory in analytical sciences. Join us to discover real-world case studies that show how analytical control improves accuracy, reliability, and compliance. ✅",
    date1: "October 01 | 10:30 PM IST",
    date: "2025-10-01",
    // image: "https://www.inkarp.co.in/assets/images/Analytical-Control.jpeg",
    img: Waters,
    details: `
  <p><strong>Analytical Control in Action – Real-World Case Studies</strong></p>

  <p class="mt-2">When it comes to analytical sciences, practical insights are as important as theory. This exclusive webinar brings you closer to real-world case studies that highlight how analytical control can be applied effectively to improve accuracy, reliability, and compliance.</p>

  <p class="mt-4">📅 <strong>Wednesday, Oct 01, 2025</strong></p>
  <p>🕙 <strong>10:30 PM IST</strong></p>

  <p class="mt-4 font-semibold">✨ Key Takeaways:</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>✅ Explore real-world case studies showcasing analytical control in practice</li>
    <li>✅ Learn strategies to strengthen accuracy and reproducibility</li>
    <li>✅ Understand how analytical control supports regulatory compliance</li>
    <li>✅ Gain practical insights directly applicable to your daily work</li>
  </ul>

  <p class="mt-4">This session is designed for professionals in R&D, quality assurance, and regulatory functions who want to see how theory meets application in analytical sciences.</p>


  `
  },

];

// Helper function to calculate days left until a date string in 'YYYY-MM-DD' format
function getDaysLeft(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  // Zero out the time for accurate day difference
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = target - today;
  if (diff < 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function WebinarsNew() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseModal = () => {
    setSelectedWebinar(null);
    setShowRegister(false);
  };

  return (
    <>
      <div className="w-full">
        {/* Banner */}
        <Helmet>
          <title>Webinars - Inkarp Instruments Private Ltd</title>
          <meta name="keywords" content='default' />
          <meta name="description" content="Join Inkarp's Expert-LED Webinars to stay informed on Industry Trends, Best Practices, and Innovative Solutions. Explore upcoming webinars and access on-demand recordings for professional growth." />
        </Helmet>
        <div className="relative w-full">
          <img src={WebinarBanner} alt="Webinar Banner" className="w-full h-auto object-cover" />
          {/* <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center px-6 py-10">
          <h1 className="text-3xl font-[MaxOT] md:text-4xl font-bold text-[#E63946]">Explore Upcoming Webinars</h1>
          <p className="mt-3 text-base md:text-lg max-w-xl text-black">
            Stay informed and inspired with expert-led discussions
          </p>
        </div> */}
        </div>
        {/* Webinar List */}
        <div className="space-y-6 max-w-7xl mx-auto px-4 py-10 ">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="p-4 rounded-xl shadow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-gray-300 bg-[#F5F5F5]"
            >
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <img src={webinar.img} alt="Logo" className="w-24 h-16 object-contain bg-white rounded-xl" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm lg:w-[180px] w-full">
                  <p className="font-[Roboto] text-sm">{webinar.date1}</p>
                  <div className="flex items-center text-[#E63946] px-3 py-1 rounded-xl text-md font-semibold font-[Roboto] ">
                    {getDaysLeft(webinar.date)} days left
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-md font-[MaxOT] text-[#E63946]">{webinar.title}</h3>
                <p className="text-sm font-[Roboto]">{webinar.description}</p>
              </div>
              <div className="flex gap-3 flex-col">
                {getDaysLeft(webinar.date) > 0 && (
                  <button
                    onClick={() => setSelectedWebinar(webinar)}
                    className="text-sm px-4 py-2 bg-[#E63946] text-white rounded hover:bg-red-700 transition font-[MaxOT] hover:text-black"
                  >
                    Register Here
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Webinar Detail Modal */}
        {selectedWebinar && !showRegister && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={handleCloseModal}
              >
                <X className="w-5 h-5" />
              </button>
              {/* <h3 className="text-2xl font-bold text-[#E63946] font-[MaxOT] mb-2">{selectedWebinar.title}</h3> */}
              {/* <img
              src={selectedWebinar.image}
              alt={selectedWebinar.title}
              className="w-full h-full object-cover mb-4 border rounded-lg"
            /> */}
              <div className="font-[Roboto]  mb-3 text-md space-y-2">
                <div dangerouslySetInnerHTML={{ __html: selectedWebinar.details }} />
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowRegister(true)}
                  className="bg-[#BE0010] text-white px-6 py-2 rounded hover:[#E63946] text-sm"
                >
                  Register Now →
                </button>
              </div>
            </div>
          </div>
        )}

        {showRegister && (
          <RegisterForm
            isOpen={true}
            onClose={handleCloseModal}
            webinars={webinars}
            preselected={selectedWebinar}
            webinarLink={webinarLinks[selectedWebinar.id]}
          />
        )}

      </div>
    </>
  );
}

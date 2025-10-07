import React, { useState } from "react";
import Sample from '../components/pages/Home/Sample';
import { Helmet } from "react-helmet";
import EventsBanner from "/src/assets/Events/EventBanner.jpg";
import PickProduct from "../components/pages/Home/PickProduct";
import ServiceAbout from "../components/pages/Service/ServiceAbout";
import PickNew from "../components/pages/Service/PickNew";

const services = [
   
    {
        id:1 ,
        title: "Technical Services",
        content: (
            <>
                <p>
                    Instruments, like research, demand expertise. Our technical service division provides advanced troubleshooting, application support, and corrective maintenance when equipment requires immediate attention.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>On-site Support: Quick response to minimize downtime.</li>
                    <li>Remote Assistance: Virtual troubleshooting and software updates when physical visits are not required.</li>
                    <li>Application Support: Guidance on instrument usage, methods, and optimization for your research needs.</li>
                </ul>
                <p className="mt-2">
                    Our highly trained engineers are certified by leading global manufacturers and equipped with diagnostic tools to identify and resolve issues efficiently.
                </p>
            </>
        ),
    },
     {
        id: 2,
        title: "Product Installation",
        content: (
            <>
                <p>
                    Proper installation is the foundation for the smooth operation of any scientific instrument. At Inkarp, our certified service engineers carry out complete installation and commissioning services for all equipment we distribute. We follow global standard protocols provided by our principal partners, ensuring that every product is set up with precision and accuracy.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Site Readiness Checks: We inspect your laboratory for the correct electrical, water, gas, or environmental requirements before installation.</li>
                    <li>Calibration and Validation: Instruments are calibrated and validated to meet compliance standards such as GLP/GMP.</li>
                    <li>User Training: Our engineers provide hands-on training, enabling your team to operate the equipment confidently from day one.</li>
                </ul>
                <p className="mt-2">
                    By ensuring error-free installations, Inkarp helps customers maximize uptime and extend the operational life of their instruments.
                </p>
            </>
        ),
    },
    {
        id: 3,
        title: "Preventive Maintenance",
        content: (
            <>
                <p>
                    Prevention is better than cure—especially in laboratories where every hour of downtime can affect research and production schedules. Inkarp offers preventive maintenance services designed to keep instruments in top condition.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Scheduled Inspections: Routine checks on performance, calibration, and safety.</li>
                    <li>Performance Optimization: Cleaning, lubrication, and fine-tuning to extend instrument lifespan.</li>
                    <li>Compliance Documentation: Maintenance reports for regulatory audits and certifications.</li>
                </ul>
                <p className="mt-2">
                    By identifying potential issues early, preventive maintenance reduces the risk of costly repairs and ensures continuous, error-free operation.
                </p>
            </>
        ),
    },
    {
        id: 4,
        title: "Annual Maintenance Contracts (AMC)",
        content: (
            <>
                <p>
                    For long-term reliability, Inkarp provides flexible Annual Maintenance Contracts tailored to your instrument usage and budget.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Comprehensive AMC: Covers preventive and corrective maintenance, parts replacement, and priority response.</li>
                    <li>Non-Comprehensive AMC: Includes labor and service visits while spares are billed separately.</li>
                    <li>Priority Response: Contract customers receive faster turnaround times and preferential scheduling.</li>
                </ul>
                <p className="mt-2">
                    Our AMCs are highly cost-effective for laboratories that cannot risk downtime. They ensure that instruments are always maintained by experts and backed by genuine parts.
                </p>
            </>
        ),
    },
    {
        id: 5,
        title: "Spares Support",
        content: (
            <>
                <p>
                    The availability of genuine spare parts is critical to the long-term performance of scientific equipment. Inkarp maintains a strong inventory of original spares and consumables sourced directly from our principal partners.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Genuine Spares: 100% authenticity to protect your equipment warranty and performance.</li>
                    <li>Quick Availability: Fast delivery from regional service centers across India.</li>
                    <li>Consumables Support: Filters, lamps, tubing, and accessories to ensure uninterrupted workflows.</li>
                </ul>
                <p className="mt-2">
                    By offering reliable spares support, we eliminate the risk of counterfeit parts and safeguard the precision of your instruments.
                </p>
            </>
        ),
    },
];

export default function ServicePage() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <div className="relative w-full overflow-hidden">
            <Helmet>
                <title>
                    Inkarp Services | Scientific Instrument Installation, Maintenance &amp;
                    Support in India
                </title>
                <meta
                    name="description"
                    content="Discover Inkarp’s trusted service solutions for scientific instruments in India. From product installation and technical support to preventive maintenance, AMCs, and genuine spare parts, we ensure reliable performance and smooth research operations. Backed by 40+ years of expertise and nationwide service teams."
                />
                <link rel="canonical" href="https://inkarp.co.in/services" />
            </Helmet>

            {/* Banner Section */}
            <div className="relative h-full w-full rounded-2xl mb-6">
                <img
                    src={EventsBanner}
                    alt="Inkarp_Service"
                    className="w-full h-full object-cover object-center p-2 rounded-2xl"
                />
            </div>
            <div className="bg-red-50 border-l-4 border-[#E63946] w-[95%] mx-auto p-6 rounded-xl shadow-sm mb-8">
                <p className="text-gray-800 text-lg leading-relaxed">
                    At Inkarp Instruments, service is more than just support—it is the backbone of our partnership with scientists, researchers, and industries across India.
                    For over 40 years, we have delivered world-class instruments backed by one of the most trusted service networks in the country.
                    Our factory-trained engineers, application specialists, and service managers ensure smooth research journeys with quick response times, genuine spares, and expert technical care from installation to long-term maintenance.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mt-4">
                    Every lab is unique, and so are its needs. That’s why our service portfolio covers installation, technical support, preventive care, long-term maintenance, and spares replacement.
                    With Inkarp, you don’t just buy an instrument—you invest in a partnership built on performance, reliability, and trust.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mt-4 font-medium">
                    Below are the five major types of services we provide, each crafted to meet the real-world demands of laboratories and industries across India.
                </p>
            </div>
            <div className="text-center flex flex-col items-center justify-center max-w-3xl mx-auto gap-3">
                <span
                    className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
                    style={{
                        borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
                        borderWidth: 1,
                        borderStyle: "solid",
                    }}
                >
                    Our Services
                </span>
                <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
                    Services We Provide
                </h1>
                {/* <p className="text-sm sm:text-base font-[Roboto] text-black/80">
            With over four decades of experience, we partner with global leaders to empower research,
            diagnostics, and industry through reliable, precise instrumentation and personalized support.
          </p> */}
            </div>

            <div className="flex w-full px-5 pb-10 gap-6">
                <div className="w-1/4 bg-gray-100 p-4 rounded-xl shadow-md">
            
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li key={service.id}>
                                <button
                                    onClick={() => setActiveService(service)}
                                    className={`w-full text-left px-3 py-2 rounded-lg transition font-[MaxOT] ${activeService.id === service.id
                                        ? "bg-[#Be0010] text-white "
                                        : "hover:bg-gray-300"
                                        }`}
                                >
                                    {service.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Content */}
                <div className="w-3/4 bg-red-50 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-[#E63946] font-[MaxOT]">{activeService.title}</h3>
                    <div className="text-gray-800 leading-relaxed">
                        {activeService.content}
                    </div>
                </div>
            </div>
            <ServiceAbout />
            <PickNew />
        </div>
    );
}

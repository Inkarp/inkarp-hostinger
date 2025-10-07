import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import InkarpLogo from '/InkarpLogo.svg';
import CatalystLogo from '/CatalystNew.svg';

import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://inkarp-luof.onrender.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json') ? await response.json() : {};

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Thank you for subscribing!' });
        setEmail('');
        formRef.current?.classList.add('done');
        setTimeout(() => formRef.current?.classList.remove('done'), 4000);
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Failed to subscribe. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative w-full max-w-[1250px] mx-auto mt-3 rounded-2xl border border-[#F1F1F1] bg-white shadow-sm overflow-hidden text-gray-600">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.05),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(190,0,16,0.05),transparent)]" />

      {/* Main Footer */}
      <div className="px-8 sm:px-6 md:px-8 py-6 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* About */}
          <div className="text-center lg:text-left">
            {/* <h2 className="text-lg sm:text-xl md:text-2xl mb-3 text-[#E63946] font-[MaxOT]">About Inkarp</h2> */}
            <img
              className="h-12 sm:h-14 md:h-16 xl:h-20 w-auto rounded-md p-1.5 sm:p-2"
              src={InkarpLogo}
              alt="Inkarp Logo"
              title="Inkarp"
              loading="lazy"
            />
            {/* <div className="w-24 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto lg:mx-0 mb-4" /> */}
            {/* <img
              className="h-12 sm:h-14 md:h-16 xl:h-20 w-auto rounded-md p-1.5 sm:p-2"
              src={InkarpLogo}
              alt="Inkarp Logo"
              title="Inkarp"
              loading="lazy"
            /> */}
            <p className="text-sm sm:text-base font-[Roboto] text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 py-2">
              Established in 1985, Inkarp is a trusted name in the scientific instrument industry,
              offering comprehensive research solutions and exceptional after-sales support. With a robust presence in
              India, we're a go-to choice for a diverse range of sectors. Our enduring partnerships with major
              manufacturers globally ensure sustained customer support.
              {/* Our dedicated team is at the heart of our
              success, reflecting our commitment to excellence. */}
            </p>

            {/* Socials */}
            <div className="flex flex-col items-start justify-center gap-2">
              <div className='flex  justify-center items-center gap-3'>
                <h3 className="text-lg  text-[#E63946] font-[MaxOT]">
                  Subscribe to our Newsletter
                </h3>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322902933266739203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Inkarp on LinkedIn"
                  className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-full text-white font-semibold shadow-sm transition-all duration-300 hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E63946]/40"
                  style={{ backgroundImage: 'linear-gradient(90deg,#BE0010,#E63946)' }}
                >
                  {/* LinkedIn icon (inline SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    className="w-5 h-5" aria-hidden="true" focusable="false">
                    <path fill="currentColor"
                      d="M100.28 448H7.4V149.1h92.88zm-46.44-340C24.05 108 0 83.77 0 54.5A54.5 54.5 0 0 1 108.93 54.5c0 29.27-24.05 53.5-54.09 53.5zM447.9 448h-92.38V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.5V149.1h88.8v40.8h1.3c12.4-23.6 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                  <span className='whitespace-nowrap overflow-hidden text-ellipsis'>Click Here</span>
                </a>
              </div>
              <div className='flex  justify-center items-center gap-3'>
                <h3 className="text-lg  text-[#E63946] font-[MaxOT]">Follow Us</h3>
                <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                  {[
                    { href: "https://www.instagram.com/inkarpinstruments", Icon: FaInstagram, label: 'Instagram' },
                    { href: "https://www.facebook.com/Inkarp", Icon: FaFacebookF, label: 'Facebook' },
                    { href: "https://www.linkedin.com/company/inkarp/posts/?feedView=all", Icon: FaLinkedinIn, label: 'LinkedIn' },
                    { href: "https://www.youtube.com/@InkarpInstrument/videos", Icon: FaYoutube, label: 'YouTube' },
                    { href: "https://wa.me/919966634008", Icon: FaWhatsapp, label: 'WhatsApp' },
                  ].map(({ href, Icon, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full border border-[#E63946]/40 flex items-center justify-center shadow-sm transition-all hover:scale-105 hover:bg-[#Be0010] focus:outline-none focus:ring-2 focus:ring-[#E63946]/30"
                      aria-label={label}
                    >
                      <Icon className="hover:text-white text-[#BE0010]" size={20} />
                    </a>
                  ))}
                </div>
              </div>
              {/* <div className="flex flex-col xl:flex-row items-center gap-5 md:gap-6 px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-t-2xl"> */}
              {/* <img
          className="h-12 sm:h-14 md:h-16 xl:h-20 w-auto rounded-md p-1.5 sm:p-2"
          src={InkarpLogo}
          alt="Inkarp Logo"
          title="Inkarp"
          loading="lazy"
        /> */}

              {/* <div className="w-full xl:flex-1 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#E63946] mb-3 md:mb-4 font-[MaxOT]">
            Subscribe for Scientific Updates That Matter
          </h3>

          <div className="relative w-full max-w-[720px] mx-auto">
            <form
              ref={formRef}
              className="subscription relative w-full h-11 sm:h-12 rounded-full overflow-hidden shadow-sm bg-white"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="add-email absolute rounded-full top-0 left-0 w-full h-full pl-4 pr-28 text-sm sm:text-base bg-white text-gray-700 border border-[#EFEFEF] placeholder:font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30"
                placeholder="Enter your email address"
                required
                disabled={isLoading}
                inputMode="email"
                aria-label="Email address"
              />
              <button
                type="submit"
                className={`submit-email absolute top-[1px] right-[1px] h-[calc(100%-2px)] w-28 sm:w-32 text-white font-semibold rounded-full px-4 sm:px-5 transition-all duration-300 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                disabled={isLoading}
                style={{ backgroundImage: 'linear-gradient(90deg,#BE0010,#E63946)' }}
                aria-live="polite"
              >
                <span className="before-submit absolute inset-0 flex items-center justify-center rounded-full text-sm">
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </span>
                <span className="after-submit absolute inset-0 flex items-center justify-center opacity-0 rounded-full text-sm">
                  Thank you!
                </span>
              </button>
            </form>

            {status.message && (
              <div
                className={`mt-2 text-sm ${status.type === 'error' ? 'text-[#BE0010]' : 'text-emerald-600'}`}
                role="status"
              >
                {status.message}
              </div>
            )}

            <p className="text-xs sm:text-sm md:text-base font-[Roboto] mt-3 md:mt-4 font-medium text-gray-500">
              We respect your time. One email a month. Zero spam.
            </p>

            <style>{`
              .subscription.done .submit-email { width: calc(100% - 2px); }
              .subscription .submit-email .before-submit,
              .subscription .submit-email .after-submit { visibility: visible; opacity: 1; transition: opacity .25s; }
              .subscription.done .submit-email .before-submit,
              .subscription:not(.done) .submit-email .after-submit { visibility: hidden; opacity: 0; }
              .subscription.done .submit-email .after-submit { opacity: 1; }
            `}</style>
          </div>
        </div> */}
              {/* <div className="w-full xl:flex-1 text-center"> */}
              {/* <h3 className="text-lg sm:text-xl md:text-lg text-[#E63946] mb-3 md:mb-4 font-[MaxOT]">
            Subscribe for Scientific Updates That Matter
          </h3> */}

              {/* <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322902933266739203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Inkarp on LinkedIn"
                  className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-full text-white font-semibold shadow-sm transition-all duration-300 hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E63946]/40"
                  style={{ backgroundImage: 'linear-gradient(90deg,#BE0010,#E63946)' }}
                >
                 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    className="w-5 h-5" aria-hidden="true" focusable="false">
                    <path fill="currentColor"
                      d="M100.28 448H7.4V149.1h92.88zm-46.44-340C24.05 108 0 83.77 0 54.5A54.5 54.5 0 0 1 108.93 54.5c0 29.27-24.05 53.5-54.09 53.5zM447.9 448h-92.38V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.5V149.1h88.8v40.8h1.3c12.4-23.6 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                  <span>Subscribe on LinkedIn</span>
                </a> */}

              {/* <p className="text-xs sm:text-sm md:text-base font-[Roboto] mt-3 md:mt-4 font-medium text-gray-500">
            One update a month. Zero noise.
          </p> */}
              {/* </div> */}

              {/* <style>
          .libutton {
            display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7px;
          text-align: center;
          outline: none;
          text-decoration: none !important;
          color: #ffffff !important;
          width: 200px;
          height: 32px;
          border-radius: 16px;
          background-color: #0A66C2;
          font-family: "SF Pro Text", Helvetica, sans-serif;
      }
        </style> */}
              {/* <a class="libutton" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322902933266739203" target="_blank">Subscribe on LinkedIn</a> */}
              {/* </div> */}
            </div>
            {/* Subscribe */}

          </div>

          {/* Links + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl text-[#E63946] mb-3 font-[MaxOT]">Quick Links</h3>
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto sm:mx-0 mb-3" />
              <div className="space-y-2 text-sm sm:text-base">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Our Story', path: '/our-story' },
                  { name: 'Verticals', path: '/verticals' },
                  { name: 'Contact Us', path: '/contact' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'News & Events', path: '/news-events' },
                  { name: 'Careers', path: '/careers' },
                ].map((link, index) => (
                  <div key={index} className="font-[Roboto]">
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#E63946] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}

                <div className="flex justify-center sm:justify-start">
                  <Link to="/catalystcue" className="hover:opacity-90 transition-opacity">
                    <img
                      src={CatalystLogo}
                      alt="Catalyst Cue"
                      className="w-28 h-10 object-contain"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl text-[#E63946] mb-3 font-[MaxOT]">Contact Us</h3>
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto sm:mx-0 mb-3" />
              <ul className="space-y-3 text-sm sm:text-base font-[Roboto]">
                <li className="flex items-start justify-center sm:justify-start gap-2 text-gray-600">
                  <MapPin size={18} className="min-w-[18px] mt-0.5 text-[#E63946]" />
                  <span className="leading-relaxed">
                    Inkarp Instruments Pvt Ltd, Plot No - 5A/10-11, 3rd Floor, IDA Nacharam Road No. 1,
                    Nacharam - Chilka Nagar Road, Hyderabad – 500076
                  </span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={18} className="min-w-[18px] text-[#E63946]" />
                  <a
                    href="tel:+919966634008"
                    className="text-gray-600 hover:text-[#E63946] transition-colors duration-200"
                  >
                    +91 99666 34008
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={18} className="min-w-[18px] text-[#E63946]" />
                  <a
                    href="mailto:info@inkarp.co.in"
                    className="text-gray-600 hover:text-[#E63946] transition-colors duration-200"
                  >
                    info@inkarp.co.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/90 text-white border-t-[3px] border-t-[#E63946] py-4 text-sm w-[96%] max-w-[1300px] mx-auto rounded-t-full shadow-inner">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-300">
              © {new Date().getFullYear()} <span className="text-white">Inkarp</span>. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-xs sm:text-sm">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-white hover:underline hover:decoration-[#BE0010] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white hover:underline hover:decoration-[#BE0010] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

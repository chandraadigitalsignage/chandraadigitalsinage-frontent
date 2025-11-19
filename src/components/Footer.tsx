import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import logo from "../media/signagelogo.svg";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.2);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-400">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div
            className={`transition-all duration-700 transform ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
              }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="SignageFlow Logo"
                className="w-13 h-13 object-contain"
              />
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Transform your space with innovative digital signage solutions
              that engage, inform, and inspire.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Instagram, link: "#" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 delay-100 transform ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
              }`}
          >
            <h3 className="text-white font-bold text-lg mb-2">Quick Links</h3>

            <ul className="space-y-3">
              {[
                "Home",
                "Key Features",
                "Our Works",
                "Services",
                "Get in Touch",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 transition-all duration-300 hover:text-blue-400"
                  >
                    <span className="text-xs w-1 h-1 bg-blue-500 rounded-full" />
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div
            className={`transition-all duration-700 delay-300 transform ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
              } w-[120%] mb-12`}
          >
            <h3 className="text-white font-bold text-lg mb-2">Contact</h3>

            <div className="space-y-4">
              <a
                href="mailto:info@signageflow.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                chandradigitalsignage@gmail.com
              </a>

              <a
                href="tel:+919585272027"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-blue-500" />
                +91 95852 72027
              </a>

              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Coimbatore, Tamil Nadu.
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            className={`transition-all duration-700 delay-500 transform ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
              }`}
          >
            <h3 className="text-white font-bold text-lg mb-2">Our Location</h3>

            <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg pointer-events-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019408654276!2d-122.4194150846819!3d37.77492977975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e0b11d%3A0x3b46f5ecf0d6b6b5!2s123%20Innovation%20Drive%2C%20San%20Francisco%2C%20CA%2094123!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={false}
                className="pointer-events-auto"
              />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className={`text-gray-500 text-sm transition-all duration-700 transform ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
              }`}
          >
            &copy; {currentYear} All rights reserved.
            <a className="ml-2 hover:text-blue-400">Privacy Policy</a> |
            <a className="ml-2 hover:text-blue-400">Terms of Service</a>
          </p>

          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transform ${isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
              }`}
          >
            Back to Top
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      <div className="text-center mb-4 relative z-50">
        <a
          href="https://mediaweb6.com/"
          target="_blank"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          Powered by @ Media Web6
        </a>
      </div>

    </footer>
  );
};

export default Footer;

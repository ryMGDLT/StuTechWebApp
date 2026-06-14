import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { brandAssets } from "@/lib/brand";

const footerLinks = {
  services: [
    { label: "System Automation", to: "/services" },
    { label: "UI/UX Design", to: "/services" },
    { label: "Web Development", to: "/services" },
    { label: "Mobile Development", to: "/services" },
  ],
  company: [
    { label: "About us", to: "/about" },
    { label: "Our Process", to: "/process" },
    { label: "Get Started", to: "/get-started" },
    { label: "Contact", to: "/contact" },
  ],
  resources: [
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="min-w-full bg-xone-navy px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
              <img
                src={brandAssets.logoInverse}
                alt="Xone Software Development"
                className="h-10 w-auto max-w-[180px] sm:h-12 sm:max-w-[220px]"
                width={220}
                height={48}
              />
            </div>
            <div className="mb-6 flex space-x-4">
              <FaEnvelope
                className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white"
                aria-hidden
              />
              <FaLinkedin
                className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white"
                aria-hidden
              />
              <FaTwitter
                className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white"
                aria-hidden
              />
              <FaInstagram
                className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white"
                aria-hidden
              />
              <FaPhone
                className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white"
                aria-hidden
              />
              <FaGithub
                className="h-5 w-5 cursor-pointer text-xone-gray-light transition-colors hover:text-white"
                aria-hidden
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-xone-gray-light">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-xone-gray-light">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <ul className="space-y-3 text-xone-gray-light">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.to === "#" ? (
                    <span className="text-xone-gray-light">{link.label}</span>
                  ) : (
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

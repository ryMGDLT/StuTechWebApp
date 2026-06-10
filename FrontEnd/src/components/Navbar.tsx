import { NavLink } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "px-10 py-2 text-base font-medium transition-colors",
    isActive
      ? "text-primary"
      : "text-gray-900 hover:text-primary",
  );

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/home" className="flex items-center gap-6">
              <img
                src="/assets/images/Logo.png"
                alt="Xone Software Development logo"
                className="ml-20 h-10 w-auto"
              />
              <span className="text-primary text-xl font-bold">Xone</span>
            </NavLink>
          </div>

          <div className="fixed left-1/2 ml-2 hidden flex-1 -translate-x-1/2 transform items-center justify-center md:flex">
            <NavLink to="/home" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/process" className={navLinkClass}>
              Process
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/get-started"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mr-22 rounded-full px-8 py-2 text-sm",
              )}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

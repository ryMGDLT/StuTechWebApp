import { NavLink } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { brandAssets, BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "px-10 py-2 text-base font-medium transition-colors",
    isActive
      ? "text-xone-violet"
      : "text-foreground hover:text-xone-violet",
  );

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/home" className="flex items-center gap-3 sm:gap-4">
              <img
                src={brandAssets.logo}
                alt={BRAND_NAME}
                className="h-9 w-auto max-w-[160px] sm:h-10 sm:max-w-[200px]"
                width={200}
                height={40}
              />
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
                "mr-2 rounded-full px-6 py-2 text-sm sm:mr-4 sm:px-8",
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

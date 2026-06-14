import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brandAssets, BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "px-10 py-2 text-base font-medium transition-colors",
    isActive
      ? "text-xone-violet"
      : "text-foreground hover:text-xone-violet",
  );

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
    isActive
      ? "bg-xone-accent-muted text-xone-violet"
      : "text-foreground hover:bg-muted hover:text-xone-violet",
  );

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NavLink
              to="/get-started"
              className={cn(
                buttonVariants({ size: "lg" }),
                "hidden rounded-full px-6 py-2 text-sm sm:mr-2 sm:inline-flex sm:px-8 md:mr-4",
              )}
            >
              Get Started
            </NavLink>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "md:hidden",
                )}
                aria-label="Open navigation menu"
              >
                <MenuIcon className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1 px-2"
                >
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={mobileNavLinkClass}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/get-started"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-4 w-full rounded-full",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

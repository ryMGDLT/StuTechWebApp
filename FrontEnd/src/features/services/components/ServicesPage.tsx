import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceOfferings } from "@/features/services/data/services";
import { BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function ServicesPage() {
  return (
    <>
      <main className="bg-xone-section px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              {BRAND_NAME} delivers end-to-end digital solutions — from
              automation and design to production-ready web and mobile apps.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {serviceOfferings.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="border-border bg-xone-light shadow-lg shadow-xone-navy/5"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                      <Icon className="text-2xl text-xone-violet" aria-hidden />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span
                            className="h-2 w-2 shrink-0 rounded-full bg-xone-violet"
                            aria-hidden
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
            >
              Start a project
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

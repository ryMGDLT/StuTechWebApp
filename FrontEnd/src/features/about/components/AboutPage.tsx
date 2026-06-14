import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BRAND_NAME, BRAND_SHORT, brandAssets } from "@/lib/brand";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "User-first design",
    description:
      "Every product decision starts with the people who will use it — clarity, accessibility, and delight.",
  },
  {
    title: "Scalable engineering",
    description:
      "We build with TypeScript, modern frameworks, and patterns that grow with your business.",
  },
  {
    title: "Transparent partnership",
    description:
      "Regular demos, honest timelines, and collaborative communication from kickoff to launch.",
  },
] as const;

export function AboutPage() {
  return (
    <>
      <main className="bg-xone-section px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="mb-12 text-center">
            <img
              src={brandAssets.logo}
              alt={BRAND_NAME}
              className="mx-auto mb-6 h-12 w-auto"
              width={200}
              height={48}
            />
            <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
              About {BRAND_SHORT}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              {BRAND_NAME} is a forward-thinking software studio focused on
              system generation, UI/UX design, and web and mobile application
              development.
            </p>
          </header>

          <section className="mb-12 rounded-2xl bg-xone-card p-6 shadow-sm sm:p-10">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Our story
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We started {BRAND_SHORT} with a simple belief: technology should
              be powerful, accessible, and designed with real users in mind. Too
              many businesses struggle with fragmented tools, outdated
              interfaces, and systems that do not scale.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our team bridges that gap — combining product thinking, design
              craft, and engineering discipline to deliver digital solutions
              that make work easier and growth sustainable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-center text-2xl font-semibold text-foreground">
              What we stand for
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="bg-xone-light">
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-xone-accent-muted p-6 text-center sm:p-10">
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Ready to work together?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Learn how we plan, build, and deliver — or reach out to discuss
              your next project.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/process"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                See our process
              </Link>
              <Link
                to="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Contact us
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

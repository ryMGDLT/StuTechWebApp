import {
  BsCheckCircle,
  BsLightning,
  BsPersonCircle,
} from "react-icons/bs";
import { RiRocketLine, RiUserLine } from "react-icons/ri";

const valueProps = [
  {
    icon: BsCheckCircle,
    title: "Custom-built Solutions",
    description:
      "Tailored applications designed specifically for your business requirements and goals.",
  },
  {
    icon: BsLightning,
    title: "Agile & Scalable Development",
    description:
      "Fast, iterative development process that adapts to your needs and scales with growth.",
  },
  {
    icon: BsPersonCircle,
    title: "End-to-end Support",
    description:
      "From initial concept to post-launch maintenance, we support you every step of the way.",
  },
  {
    icon: RiRocketLine,
    title: "Future-ready Technology",
    description:
      "Built with modern technologies that ensure your solutions remain relevant and effective.",
  },
  {
    icon: RiUserLine,
    title: "User-first Design Approach",
    description:
      "Every decision is made with your users in mind, ensuring intuitive and engaging experiences.",
  },
] as const;

export function ValuePropsSection() {
  return (
    <section
      aria-labelledby="value-props-heading"
      className="w-full bg-xone-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="value-props-heading"
          className="mb-4 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
        >
          Why Choose Us
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center text-base text-muted-foreground sm:mb-16 sm:text-lg">
          Here&apos;s why businesses trust us to bring their ideas to life and
          drive digital transformation
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop) => (
            <article
              key={prop.title}
              className="flex flex-col rounded-2xl bg-xone-light shadow-lg shadow-xone-navy/10"
            >
              <div className="h-2 rounded-t-2xl bg-xone-section" />
              <div className="flex flex-1 flex-col items-center bg-xone-accent-muted p-6 text-center sm:p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <prop.icon
                    className="text-2xl text-muted-foreground"
                    aria-hidden
                  />
                </div>
                <h3 className="mb-4 text-xl font-bold sm:text-2xl">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

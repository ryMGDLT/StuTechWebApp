import { LearnMoreButton } from "@/components/marketing/learn-more-button";
import { FaCog, FaGlobe, FaMobile, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: FaCog,
    title: "System Generation & Automation",
    description:
      "Streamline your workflows with intelligent automation solutions that boost efficiency and reduce manual tasks.",
    items: ["Process Automation", "Workflow Optimization", "System Integration"],
    buttonClass: "bg-xone-cyan text-xone-navy hover:opacity-90",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Create user-centered, seamless experiences that engage your audience and drive conversions.",
    items: ["User Research", "Interface Design", "Prototyping"],
    buttonClass: "bg-xone-navy text-white hover:bg-xone-gray-dark",
  },
  {
    icon: FaGlobe,
    title: "Web Application Development",
    description:
      "Build scalable, secure, and modern web applications that grow with your business needs.",
    items: [
      "Full-Stack Development",
      "API Integration",
      "Performance Optimization",
    ],
    buttonClass: "bg-xone-navy text-white hover:bg-xone-gray-dark",
  },
  {
    icon: FaMobile,
    title: "Mobile Application Development",
    description:
      "Develop cross-platform, engaging mobile apps that provide exceptional user experiences.",
    items: ["iOS & Android", "Cross-Platform", "App Store Optimization"],
    buttonClass: "bg-xone-violet text-white hover:bg-xone-gray-dark",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-xone-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="services-heading"
          className="mb-4 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
        >
          What We Offer
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center text-base text-muted-foreground sm:mb-16 sm:text-lg">
          Comprehensive digital solutions designed to transform your business
          and accelerate growth
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl bg-xone-light shadow-lg shadow-xone-navy/10"
            >
              <div className="h-2 rounded-t-2xl bg-xone-accent-muted" />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <service.icon className="text-3xl" aria-hidden />
                </div>
                <h3 className="mb-2 text-center text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="mb-8 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-xone-violet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-center">
                  <LearnMoreButton className={service.buttonClass} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

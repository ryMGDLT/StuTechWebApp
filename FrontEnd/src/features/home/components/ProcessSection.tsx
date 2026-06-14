const processSteps = [
  {
    step: 1,
    title: "Determine",
    description:
      "Understanding your needs, goals, and target audience through comprehensive research and analysis.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Creating wireframes, prototypes, and visual designs that align with your brand and user expectations.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Building robust, scalable applications using modern technologies and best development practices.",
  },
  {
    step: 4,
    title: "Deployment",
    description:
      "Launching your application with proper testing, optimization, and seamless go-live processes.",
  },
  {
    step: 5,
    title: "Support",
    description:
      "Providing ongoing maintenance, updates, and support to ensure continued success and growth.",
  },
] as const;

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="w-full bg-xone-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="process-heading"
          className="mb-4 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
        >
          How We Work
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center text-base text-muted-foreground sm:mb-16 sm:text-lg">
          Our proven 5-step process ensures successful project delivery from
          concept to completion
        </p>
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-5">
          {processSteps.map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div
                className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full ${
                  item.step === 1
                    ? "bg-xone-gray-light"
                    : "border-2 border-xone-gray-light bg-white"
                }`}
              >
                {item.step === 1 ? (
                  <div className="rounded-full bg-xone-accent-muted px-3 py-1 text-xl font-bold text-xone-violet">
                    1
                  </div>
                ) : (
                  <span className="text-xl font-bold text-muted-foreground">
                    {item.step}
                  </span>
                )}
              </div>
              <h3 className="mb-3 text-lg font-bold sm:text-xl">{item.title}</h3>
              <p className="text-center text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
          <div
            className="absolute top-7 hidden h-0.5 bg-white md:block"
            style={{ width: "80%", left: "10%" }}
            aria-hidden
          />
        </div>
        <div
          className="relative mt-12 h-32 w-full overflow-hidden sm:mt-16 sm:h-48"
          aria-hidden
        >
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4">
            {[...Array(12)].map((_, index) => (
              <div
                key={`row1-${index}`}
                className={`animate-float rounded-full bg-white/80 shadow-lg ${
                  index % 3 === 0
                    ? "h-6 w-6"
                    : index % 3 === 1
                      ? "h-8 w-8"
                      : "h-4 w-4"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
          <div className="absolute left-0 right-0 top-12 flex items-center justify-between px-8">
            {[...Array(10)].map((_, index) => (
              <div
                key={`row2-${index}`}
                className={`animate-float rounded-full bg-xone-cyan/30 shadow-md ${
                  index % 2 === 0 ? "h-5 w-5" : "h-7 w-7"
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

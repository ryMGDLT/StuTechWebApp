export type ProcessStep = {
  step: number;
  title: string;
  summary: string;
  details: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Determine",
    summary:
      "Understanding your needs, goals, and target audience through comprehensive research and analysis.",
    details: [
      "Discovery workshops to align on business objectives",
      "Stakeholder interviews and user research",
      "Technical feasibility and scope assessment",
      "Project roadmap and milestone planning",
    ],
  },
  {
    step: 2,
    title: "Design",
    summary:
      "Creating wireframes, prototypes, and visual designs that align with your brand and user expectations.",
    details: [
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "Visual design aligned with Xone brand standards",
      "Usability review before development begins",
    ],
  },
  {
    step: 3,
    title: "Development",
    summary:
      "Building robust, scalable applications using modern technologies and best development practices.",
    details: [
      "Agile sprints with regular demos and feedback",
      "TypeScript-first, testable codebase",
      "API integration and third-party services",
      "Performance and accessibility built in from day one",
    ],
  },
  {
    step: 4,
    title: "Deployment",
    summary:
      "Launching your application with proper testing, optimization, and seamless go-live processes.",
    details: [
      "QA testing across devices and browsers",
      "Staging environment validation",
      "Production deployment and monitoring setup",
      "Handoff documentation and training",
    ],
  },
  {
    step: 5,
    title: "Support",
    summary:
      "Providing ongoing maintenance, updates, and support to ensure continued success and growth.",
    details: [
      "Post-launch bug fixes and optimizations",
      "Feature enhancements as your business evolves",
      "Security updates and dependency maintenance",
      "Dedicated support channel for your team",
    ],
  },
];

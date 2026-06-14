import type { IconType } from "react-icons";
import { FaCog, FaGlobe, FaMobile, FaPalette } from "react-icons/fa";

export type ServiceOffering = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "automation",
    title: "System Generation & Automation",
    description:
      "Streamline your workflows with intelligent automation solutions that boost efficiency and reduce manual tasks.",
    highlights: [
      "Process automation",
      "Workflow optimization",
      "System integration",
      "Custom tooling",
    ],
    icon: FaCog,
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Create user-centered, seamless experiences that engage your audience and drive conversions.",
    highlights: [
      "User research",
      "Interface design",
      "Prototyping",
      "Design systems",
    ],
    icon: FaPalette,
  },
  {
    id: "web",
    title: "Web Application Development",
    description:
      "Build scalable, secure, and modern web applications that grow with your business needs.",
    highlights: [
      "Full-stack development",
      "API integration",
      "Performance optimization",
      "Cloud deployment",
    ],
    icon: FaGlobe,
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description:
      "Develop cross-platform, engaging mobile apps that provide exceptional user experiences.",
    highlights: [
      "iOS and Android",
      "Cross-platform builds",
      "App store optimization",
      "Offline-first experiences",
    ],
    icon: FaMobile,
  },
];

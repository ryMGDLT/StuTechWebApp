export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export const teamMembers: TeamMember[] = [
  { name: "John Smith", role: "Company CEO", initials: "JS" },
  { name: "David Johnson", role: "Co-Founder", initials: "DJ" },
  { name: "Sarah Williams", role: "Lead Designer", initials: "SW" },
  { name: "Michael Brown", role: "Developer", initials: "MB" },
  { name: "Emily Davis", role: "Marketing", initials: "ED" },
  { name: "James Wilson", role: "Support", initials: "JW" },
  { name: "Anna Taylor", role: "Product Manager", initials: "AT" },
  { name: "Chris Lee", role: "QA Engineer", initials: "CL" },
];

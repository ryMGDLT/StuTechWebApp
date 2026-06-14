import { teamMembers } from "@/lib/team-members";

const slidesPerGroupLarge = 5;
const remainder = teamMembers.length % slidesPerGroupLarge;

let paddedTeamMembers = [...teamMembers];

if (remainder !== 0) {
  const slidesToAdd = slidesPerGroupLarge - remainder;
  const additionalSlides = teamMembers.slice(0, slidesToAdd);
  paddedTeamMembers = [...teamMembers, ...additionalSlides];
}

export { paddedTeamMembers };

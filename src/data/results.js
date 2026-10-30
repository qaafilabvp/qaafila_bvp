import {
  culturalSecretaries,
  generalSecretaries,
  headTeams,
  president,
  vicePresidents,
} from "./members";
/** Current society year for the selected execom. */
export const currentYear = "2026-27";
function toResult(member, position = member.position) {
  const role = position || "Selected";
  const department = member.department ?? "";
  return {
    id: `result-${member.id}`,
    position: role,
    name: member.name,
    image: member.image,
    year: currentYear,
    department: department === role ? "" : department,
    quote: member.quote ?? "",
  };
}
const selectedHeads = headTeams
  .filter((team) => team.title !== "Podcast")
  .flatMap((team) =>
    team.members
      .filter((member) => member.id !== president.id)
      .map((member) => toResult(member, team.title)),
  );
/**
 * Current year selected execom.
 * Portraits go in src/assets/images/members/.
 */
export const results = [
  toResult(president),
  ...vicePresidents.map((member) => toResult(member)),
  ...culturalSecretaries.map((member) => toResult(member)),
  ...generalSecretaries.map((member) => toResult(member)),
  ...selectedHeads,
].filter((entry) => entry.name.trim().length > 0);

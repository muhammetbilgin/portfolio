import { experiences } from './experience';

/** Technical skills derived from resume/experience, shown as small badges. */
function collectSkillsFromExperience(): string[] {
  const set = new Set<string>();
  for (const exp of experiences) {
    for (const pos of exp.positions) {
      if (pos.skills) {
        for (const s of pos.skills) {
          set.add(s);
        }
      }
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export const technicalSkills: string[] = collectSkillsFromExperience();

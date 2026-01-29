import { technicalSkills } from '@/config/skills';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@repo/design-system/components/ui/panel';
import { Tag } from '@repo/design-system/components/ui/tag';

export function TechnicalSkills() {
  return (
    <Panel id="technical-skills" className="space-y-4">
      <PanelHeader>
        <PanelTitle>
          Technical skills
          <PanelTitleSup>({technicalSkills.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <ul
        className="flex flex-wrap gap-1.5"
        aria-label="Technical skills from resume"
      >
        {technicalSkills.map((skill, index) => (
          <li key={index}>
            <Tag className="text-xs px-2 py-0.5">{skill}</Tag>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

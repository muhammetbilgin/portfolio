import { CollapsibleList } from '@repo/design-system/components/collapsible-list';

import { experiences } from '@/config/experience';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@repo/design-system/components/ui/panel';
import { ExperienceItem } from './experience-item';

export function Experiences() {
  return (
    <Panel id="experiences" className="space-y-4">
      <PanelHeader>
        <PanelTitle>
          Experiences
          <PanelTitleSup>({experiences.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={experiences}
        max={4}
        renderItem={(item, isFirst, isLast) => (
          <ExperienceItem
            experience={item}
            isFirst={isFirst}
            isLast={isLast}
          />
        )}
      />
    </Panel>
  );
}

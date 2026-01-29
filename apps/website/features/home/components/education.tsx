import {
  educationEntriesByDateReverse,
} from '@/config/education';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@repo/design-system/components/ui/panel';
import { CollapsibleList } from '@repo/design-system/components/collapsible-list';
import { EducationItem } from './education-item';

export function Education() {
  return (
    <Panel id="education" className="space-y-4">
      <PanelHeader>
        <PanelTitle>
          Education
          <PanelTitleSup>({educationEntriesByDateReverse.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={educationEntriesByDateReverse}
        max={4}
        keyExtractor={(item) => item.id}
        renderItem={(item, isFirst, isLast) => (
          <EducationItem
            entry={item}
            isFirst={isFirst}
            isLast={isLast}
          />
        )}
      />
    </Panel>
  );
}

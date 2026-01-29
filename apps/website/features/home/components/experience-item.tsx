import {
  BriefcaseIcon,
  Code2Icon,
  InfinityIcon,
  LinkIcon,
  PaletteIcon,
  LightbulbIcon,
  GraduationCapIcon,
} from 'lucide-react';
import Image from 'next/image';

import { Markdown } from '@/components/markdown';
import type { Experience, ExperiencePositionIcon } from '@/config/experience';
import { cn } from '@/lib/utils';

const POSITION_ICONS: Record<
  ExperiencePositionIcon,
  React.ComponentType<{ className?: string }>
> = {
  code: Code2Icon,
  design: PaletteIcon,
  education: GraduationCapIcon,
  business: BriefcaseIcon,
  idea: LightbulbIcon,
};
import { UTM_PARAMS } from '@/config/site';
import { addQueryParams } from '@/lib/url';
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from '@repo/design-system/components/ui/collapsible';
import { Tag } from '@repo/design-system/components/ui/tag';
import { TooltipWrapper } from '@repo/design-system/components/ui/tooltip';
import { ProseMono } from '@repo/design-system/components/ui/typography';

export function ExperienceItem({
  className,
  experience,
  isFirst = false,
  isLast = false,
}: {
  className?: string;
  experience: Experience;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const primaryPosition = experience.positions[0];
  const periodStart = primaryPosition?.employmentPeriod.start;
  const periodEnd = primaryPosition?.employmentPeriod.end;
  const isOngoing = !periodEnd || periodEnd === 'Present';
  const isExpanded = experience.positions.some((p) => p.isExpanded) ?? false;

  return (
    <CollapsibleWithContext defaultOpen={isExpanded} asChild>
      <div className={cn(className, 'group/item')}>
        <div
          className={cn(
            'flex items-center border-2 border-accent',
            isFirst && 'rounded-t-xl',
            isLast && 'group-data-[state=closed]/item:rounded-b-xl'
          )}
        >
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none rounded object-contain"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <BriefcaseIcon className="size-4" aria-hidden />
            </div>
          )}

          <div className="flex-1">
            <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {experience.companyName}
                </h3>
                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Location and period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{experience.city}</span>
                    {periodStart && (
                      <>
                        <span className="font-mono">·</span>
                        <span>{periodStart}</span>
                        {!isOngoing && periodEnd && (
                          <>
                            <span className="font-mono">—</span>
                            <span>{periodEnd}</span>
                          </>
                        )}
                        {isOngoing && (
                          <>
                            <span className="font-mono">—</span>
                            <InfinityIcon
                              className="size-4.5 translate-y-[0.5px]"
                              aria-hidden
                            />
                            <span className="sr-only">Present</span>
                          </>
                        )}
                      </>
                    )}
                  </dd>
                </dl>
              </div>
              <TooltipWrapper content="Open company website">
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={addQueryParams(experience.companyUrl, UTM_PARAMS)}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                </a>
              </TooltipWrapper>
              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group/content overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div
            className={cn(
              'border-x-2 border-dashed border-edge border-accent',
              isLast &&
                'group-data-[state=open]/item:border-b-2 group-data-[state=open]/item:rounded-b-xl'
            )}
          >
            <div className="space-y-6 p-4 duration-300 group-data-[state=closed]/content:animate-fade-out group-data-[state=open]/content:animate-fade-in">
              {experience.positions.map((position) => {
                const posStart = position.employmentPeriod.start;
                const posEnd = position.employmentPeriod.end;
                const posOngoing = !posEnd || posEnd === 'Present';
                return (
                  <div key={position.id} className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {position.icon && (
                        <span
                          className="flex size-5 shrink-0 items-center justify-center text-muted-foreground"
                          aria-hidden
                        >
                          {(() => {
                            const Icon =
                              POSITION_ICONS[position.icon] ?? Code2Icon;
                            return <Icon className="size-4" />;
                          })()}
                        </span>
                      )}
                      <span className="font-medium">{position.title}</span>
                      {position.employmentType && (
                        <span className="text-sm text-muted-foreground">
                          {position.employmentType}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">
                        {posStart}
                        {posOngoing ? ' — Present' : ` — ${posEnd}`}
                      </span>
                    </div>
                    {(position.highlights?.length ?? 0) > 0 ? (
                      <ul
                        className="list-disc space-y-1 pl-5 text-sm text-muted-foreground [&_li]:leading-relaxed"
                        aria-label="Key responsibilities and achievements"
                      >
                        {(position.highlights ?? []).map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      position.description && (
                        <ProseMono>
                          <Markdown>{position.description}</Markdown>
                        </ProseMono>
                      )
                    )}
                    {position.skills && position.skills.length > 0 && (
                      <ul className="flex flex-wrap gap-1.5">
                        {position.skills.map((skill, index) => (
                          <li key={index} className="flex">
                            <Tag>{skill}</Tag>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}

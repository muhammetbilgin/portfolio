import { GraduationCapIcon, LinkIcon } from 'lucide-react';

import type { EducationEntry } from '@/config/education';
import { UTM_PARAMS } from '@/config/site';
import { addQueryParams } from '@/lib/url';
import { cn } from '@/lib/utils';
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from '@repo/design-system/components/ui/collapsible';
import { TooltipWrapper } from '@repo/design-system/components/ui/tooltip';

export function EducationItem({
  className,
  entry,
  isFirst = false,
  isLast = false,
}: {
  className?: string;
  entry: EducationEntry;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const isExpanded = entry.isExpanded ?? false;
  const { period, institution, title, city, institutionUrl, highlights } =
    entry;

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
          <div
            className={cn('mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none')}
            aria-hidden
          >
            <GraduationCapIcon className="size-4" aria-hidden />
          </div>

          <div className="flex-1">
            <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {title}
                </h3>
                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Institution and period</dt>
                  <dd className="flex items-center gap-0.5 flex-wrap">
                    <span>{institution}</span>
                    {city && (
                      <>
                        <span className="font-mono">·</span>
                        <span>{city}</span>
                      </>
                    )}
                    <span className="font-mono">·</span>
                    <span>
                      {period.start} — {period.end}
                    </span>
                  </dd>
                </dl>
              </div>
              {institutionUrl && (
                <TooltipWrapper content="Open institution website">
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(institutionUrl, UTM_PARAMS)}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                  </a>
                </TooltipWrapper>
              )}
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
            <div className="space-y-2 p-4 duration-300 group-data-[state=closed]/content:animate-fade-out group-data-[state=open]/content:animate-fade-in">
              {highlights && highlights.length > 0 ? (
                <ul
                  className="list-disc space-y-1 pl-5 text-sm text-muted-foreground [&_li]:leading-relaxed"
                  aria-label="Education details"
                >
                  {highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}

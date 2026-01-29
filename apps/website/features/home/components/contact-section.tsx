'use client';

import { CodeIcon, DownloadIcon, MailIcon, MapPinIcon } from 'lucide-react';

import { Icons } from '@/components/icons';
import { USER } from '@/config/user';
import { RESUME_URL } from '@/config/site';
import { cn } from '@/lib/utils';

const iconWrapperClassName =
  'flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background';

function ContactRow({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-sm text-foreground',
        className
      )}
    >
      <span className={iconWrapperClassName} aria-hidden>
        {icon}
      </span>
      {children}
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="mt-12" aria-label="Contact information">
      <h2 className="mb-4 font-medium text-lg">Contact</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <ContactRow icon={<CodeIcon className="size-4" />}>
            <span>{USER.jobTitle}</span>
          </ContactRow>
          <ContactRow icon={<MapPinIcon className="size-4" />}>
            <span>{USER.location}</span>
          </ContactRow>
          <ContactRow icon={<Icons.github className="size-4" />}>
            <a
              href={USER.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-muted-foreground/30 underline-offset-2 hover:decoration-foreground"
            >
              GitHub
            </a>
          </ContactRow>
        </div>
        <div className="flex flex-col gap-2.5">
          <ContactRow icon={<Icons.linkedin className="size-4" />}>
            <a
              href={USER.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-muted-foreground/30 underline-offset-2 hover:decoration-foreground"
            >
              LinkedIn
            </a>
          </ContactRow>
          <ContactRow icon={<MailIcon className="size-4" />}>
            <a
              href={`mailto:${USER.email}`}
              className="text-foreground underline decoration-muted-foreground/30 underline-offset-2 hover:decoration-foreground"
            >
              {USER.email}
            </a>
          </ContactRow>
          <ContactRow icon={<DownloadIcon className="size-4" />}>
            <a
              href={RESUME_URL}
              download="MuhammetMustafaBilgin-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-muted-foreground/30 underline-offset-2 hover:decoration-foreground"
            >
              Download resume
            </a>
          </ContactRow>
        </div>
      </div>
    </section>
  );
}

import { FloatingHeader } from '@/components/navigation/floating-header';
import { ProfileImage } from '@/components/profile-image';
import { ScrollArea } from '@/components/scroll-area';
import { USER } from '@/config/user';
import { GitHubContribution } from '@/features/home/components/github-contribution';
import { ContactSection } from '@/features/home/components/contact-section';
import Info from '@/features/home/components/info';
import { Education } from '@/features/home/components/education';
import { Experiences } from '@/features/home/components/experiences';
import { TechnicalSkills } from '@/features/home/components/technical-skills';
import { createOgImage } from '@/lib/createOgImage';
import { JsonLd, Organization, WithContext } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { FlipSentences } from '@repo/design-system/components/ui/flip-sentences';
import type { Metadata } from 'next/types';

// Force static generation at build time
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = USER.tagline;
  const description = USER.description;
  const image = createOgImage({
    title: title,
    meta: description,
  });
  return createMetadata({
    title: title,
    description: description,
    image: image,
  });
}

export default async function Page() {
  const jsonLd: WithContext<Organization> = {
    '@type': 'Organization',
    '@context': 'https://schema.org',
  };

  return (
    <>
      <JsonLd code={jsonLd} />
      <Info show={['time', 'screen']} />
      <ScrollArea useScrollAreaId className="">
        <FloatingHeader scrollTitle={USER.name} />
        <div className="layout relative z-10 content-wrapper mb-10">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <ProfileImage />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-semibold text-3xl sm:text-l">
                  {USER.name}
                </h1>
              </div>
              <div className="">
                <FlipSentences sentences={USER.flipSentences} />
              </div>
            </div>
          </header>

          <ContactSection />

          <section className="mt-12">
            <h2 className="mb-3 font-medium text-lg">About</h2>
            <div className="space-y-4 text-neutral-800 dark:text-neutral-300/80">
              <p>{USER.description}</p>
            </div>
          </section>

          <section className="mt-12">
            <GitHubContribution />
          </section>

          <section className="mt-12">
            <Experiences />
          </section>

          <section className="mt-12">
            <Education />
          </section>

          <section className="mt-12">
            <TechnicalSkills />
          </section>

          {/* <section className="mt-12">
          <h2 className="mb-3 text-lg font-medium">Where</h2>
          <ViewMagnifier>
            <MapLocation />
          </ViewMagnifier>
        </section> */}
        </div>
      </ScrollArea>
    </>
  );
}

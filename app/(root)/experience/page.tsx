import { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { education, experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { basePath } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.experience.metadata.title} | Professional Experience Timeline`,
  description: `${pagesConfig.experience.metadata.description} Explore my professional journey, education and career milestones.`,
  keywords: [
    "experience timeline",
    "professional experience",
    "AI developer experience",
    "full stack developer",
    "education",
  ],
  alternates: {
    canonical: `${basePath}/experience/`,
  },
};

const getYear = (date: Date) => new Date(date).getFullYear().toString();

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Timeline experiences={experiences} />

      <h2 className="font-heading text-3xl tracking-tight lg:text-4xl mt-14 mb-6">
        Education
      </h2>
      <div className="space-y-4 mb-10">
        {education.map((item, index) => (
          <AnimatedSection key={item.id} delay={0.1 * (index + 1)} direction="up">
            <div className="w-full p-4 sm:p-6 bg-background border border-border rounded-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {item.degree}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
                  {getYear(item.startDate)} - {getYear(item.endDate)}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {item.school}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageContainer>
  );
}

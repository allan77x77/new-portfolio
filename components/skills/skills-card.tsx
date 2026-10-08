import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-3 sm:h-[230px] sm:p-6">
            {/* Shrink the glyph on phones so two cards fit side by side. */}
            <span className="[&>svg]:h-8 [&>svg]:w-8 sm:[&>svg]:h-[50px] sm:[&>svg]:w-[50px]">
              <skill.icon size={50} />
            </span>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-sm sm:text-base font-bold leading-tight">
                {skill.name}
              </h3>
              <p className="line-clamp-3 sm:line-clamp-none text-[11px] sm:text-sm text-muted-foreground">
                {skill.description}
              </p>
              {skill.rating ? <Rating stars={skill.rating} /> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import { ProjectInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-3 sm:p-4 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      {/* Shorter cover on phones so two cards still fit side by side. */}
      <div className="relative w-full h-[95px] sm:h-[160px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-3 flex flex-col flex-grow">
        <h5 className="line-clamp-2 sm:line-clamp-none text-base leading-tight sm:text-xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        {/* No flex-grow here: it stretches the box past the clamp and the
            truncated lines reappear. The Link's mt-auto does the spacing. */}
        <p className="mt-1.5 line-clamp-2 sm:line-clamp-3 overflow-hidden text-xs sm:text-sm font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        {/* Two chips do not fit side by side in a half-width card: they wrap
            onto a second row and stretch it. Phones show the first one only. */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.category.map((category, index) => (
            <Chip
              key={category}
              content={category}
              className={cn(index >= 1 && "hidden sm:inline-block")}
            />
          ))}
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto pt-3">
          <Button
            variant={"default"}
            size={"sm"}
            className="w-full whitespace-nowrap px-2 text-xs sm:w-auto sm:px-3 sm:text-sm"
          >
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-3 right-3 p-2 rounded-full bg-background border border-border hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-3.5 w-3.5" />
        ) : (
          <Icons.work className="h-3.5 w-3.5" />
        )}
      </div>
    </div>
  );
}

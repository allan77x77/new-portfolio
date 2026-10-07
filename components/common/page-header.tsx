import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "mt-5 -ml-4 inline-flex text-muted-foreground hover:text-foreground"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      <div className="flex flex-col mt-2 items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize ">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
}

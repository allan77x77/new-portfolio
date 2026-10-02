import { Icons } from "@/components/common/icons";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

function ResumeBadge({ className }: { className?: string }) {
  return (
    <a
      href={siteConfig.resume}
      target="_blank"
      rel="noreferrer"
      aria-label="Open resume (PDF)"
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background/60 px-3 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      <Icons.post className="h-3.5 w-3.5" />
      <span className="font-medium">Resume</span>
    </a>
  );
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <ResumeBadge className="w-full justify-center" />
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-5">
            <ResumeBadge />
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

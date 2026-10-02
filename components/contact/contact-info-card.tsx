"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const details = [
  {
    icon: Icons.mail,
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Icons.contact,
    label: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  {
    icon: Icons.linkedin,
    label: "Allan Rakotomamonjy",
    href: siteConfig.links.linkedin,
  },
  { icon: Icons.mapPin, label: siteConfig.location },
];

export default function ContactInfoCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <Icons.mail
            className={`w-12 h-12 transition-colors duration-300 ease-out ${
              isHovered ? "text-foreground" : "text-muted-foreground"
            }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Reach me directly
        </h2>
        <p className="mt-2 mb-8 font-heading text-lg text-muted-foreground">
          Email, phone or LinkedIn, whichever you prefer.
        </p>
        <ul className="w-full space-y-4 text-left">
          {details.map((item) => (
            <li key={item.label} className="flex items-center gap-3 text-sm">
              <item.icon className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        {/* Plain <a>: siteConfig.resume already includes the base path. */}
        <a
          href={siteConfig.resume}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6"
          )}
        >
          <span className="mr-2">Download my resume</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-primary to-primary transition-all duration-300 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </Card>
  );
}

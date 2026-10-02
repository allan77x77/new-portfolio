import { Icons } from "@/components/common/icons";

import { siteConfig } from "./site";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@allan77x77",
    icon: Icons.gitHub,
    link: siteConfig.links.github,
  },
  {
    name: "LinkedIn",
    username: "Allan Rakotomamonjy",
    icon: Icons.linkedin,
    link: siteConfig.links.linkedin,
  },
  {
    name: "Gmail",
    username: "ranto.allan7",
    icon: Icons.gmail,
    link: `mailto:${siteConfig.email}`,
  },
];

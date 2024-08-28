

import { FloatingNav } from "./ui/floating-navbar";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconVocabulary,
  IconUser,
  IconBuilding,
  IconWand

} from "@tabler/icons-react";

export function Navbar() {
    const navItems = [
      {
        title: "About",
        icon: (
          <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#about",
      },
   
      {
        title: "Projects",
        icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
      },
      {
        title: "Education",
        icon: (
          <IconVocabulary className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#education",
      },
      {
        title: "Experience",
        icon: (
          <IconBuilding className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#experience",
      },
      {
        title: "Skills",
        icon: (
          <IconWand className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#skills",
      },
    ];

    return (
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={navItems}
        desktopClassName="bg-transparent py-3 px-6 rounded-lg flex items-center justify-center text-lg"
        mobileClassName="bg-transparent py-3 px-6 rounded-lg flex items-center justify-center text-base"
      />
      </div>
    );
  }
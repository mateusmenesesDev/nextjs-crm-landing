import crmBuild from "/public/images/build.png";
import crmRefine from "/public/images/refine.png";
import crmWork from "/public/images/work.png";
import crmHero from "/public/images/hero.png";

import crmBuildDesktop from "/public/images/build-desktop.png";

import { type FeatureCard } from "~/types/feature.type";
import BuildIcon from "~/components/icons/BuildIcon";
import StarsIcon from "~/components/icons/StarsIcon";
import ReportIcon from "~/components/icons/ReportIcon";

export const features: FeatureCard[] = [
  {
    title: "Build",
    description:
      "Create your dream CRM with powerful, flexible templates for every use case.",
    Icon: BuildIcon,
    image: crmBuild,
    imageDesktop: crmBuildDesktop,
  },
  {
    title: "Refine",
    description:
      "Use Attio’s intuitive UI and ultra-customizable blocks to craft your ideal workflows.",
    Icon: BuildIcon,
    image: crmRefine,
    imageDesktop: crmHero,
  },
  {
    title: "Work",
    description:
      "Collaborate with your team in real time to create the perfect CRM for your business.",
    Icon: StarsIcon,
    image: crmWork,
    imageDesktop: crmBuildDesktop,
  },
  {
    title: "Report",
    description:
      "Get started with a CRM that’s as flexible as you are. No code required.",
    Icon: ReportIcon,
    image: crmHero,
    imageDesktop: crmHero,
  },
];

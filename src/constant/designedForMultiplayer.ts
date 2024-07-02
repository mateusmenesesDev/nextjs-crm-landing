import { type FeatureCard } from "~/types/feature.type";

import colaborationImage from "/public/images/hero.png";
import colaborationImageDesktop from "/public/images/hero.png";

import onboardingImage from "/public/images/onboarding.png";

export const designedForMultiplayer: FeatureCard[] = [
  {
    title: "Real-time collaboration.",
    description:
      "Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time.",
    image: colaborationImage,
    imageDesktop: colaborationImageDesktop,
  },
  {
    title: "Build from anywhere.",
    description:
      "Our world-class mobile app lets you collaborate from anywhere without compromising your workflow.",
    image: onboardingImage,
    imageDesktop: onboardingImage,
  },
  {
    title: "Permission control.",
    description:
      "Control how your team interacts with your business’s collections, views, and emails.",
    image: onboardingImage,
    imageDesktop: onboardingImage,
  },
  {
    title: "Hold that thought.",
    description:
      "Never lose another idea with Attio’s real-time collaborative note-taking features.",
    image: colaborationImage,
    imageDesktop: colaborationImage,
  },
];

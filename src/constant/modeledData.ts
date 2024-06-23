import { type FeatureCard } from "~/types/feature.type";

import anyUseCaseImage from "/public/images/refine.png";
import workspacesImage from "/public/images/workspaces.png";
import workspacesDesktopImage from "/public/images/workspaces-desktop.png";

export const modeledData: FeatureCard[] = [
  {
    title: "Always connected to your data.",
    description:
      "Continually sync your product, billing, and relationship data into your workspace.",
    image: workspacesImage,
    imageDesktop: workspacesDesktopImage,
  },
  {
    title: "A CRM for any use case.",
    description:
      "Easily create custom objects that match your business’ unique data structure.",
    image: anyUseCaseImage,
    imageDesktop: anyUseCaseImage,
  },
];

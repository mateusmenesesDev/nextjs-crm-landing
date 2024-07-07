import type { MuchMore } from "~/types/muchMore.type";
import quickActionsImage from "/public/images/muchMore/quick-actions.png";
import enrichmentImage from "/public/images/muchMore/enrichment.png";
import chromeImage from "/public/images/muchMore/chrome.png";
import contactAnalysisImage from "/public/images/muchMore/contact-analysis.png";
import filtersImage from "/public/images/muchMore/filters.png";
import tieredSortingImage from "/public/images/muchMore/sorting.png";

export const muchMore: MuchMore[] = [
  {
    alt: "Quick Actions",
    image: quickActionsImage,
    title: "Quick Actions",
    description: "Streamline your workflow with customizable shortcuts.",
  },
  {
    alt: "Automatic enrichment",
    image: enrichmentImage,
    title: "Automatic enrichment",
    description:
      "Update your contacts with the latest information on autopilot.",
  },
  {
    alt: "Chrome extension",
    title: "Chrome extension",
    image: chromeImage,
    description: "Stay lean with Attio’s lightweight browser extension.",
  },
  {
    alt: "Contact analysis",
    title: "Contact analysis",
    image: contactAnalysisImage,
    description: "Get deeper insights into your contacts at a single glance.",
  },
  {
    alt: "Filters",
    title: "Filters",
    image: filtersImage,
    description: "Streamline your workflow with customizable shortcuts.",
  },
  {
    alt: "Tiered sorting",
    title: "Tiered sorting",
    image: tieredSortingImage,
    description: "Update your contacts with the latest information on.",
  },
];

import type { BuilderTestimonial } from "~/types/BuilderTestimonial.type";
import womanAvatarIcon01 from "/public/avatar/woman-01.svg";
import womanAvatarIcon02 from "/public/avatar/woman-02.svg";
import womanAvatarIcon03 from "/public/avatar/woman-03.svg";
import womanAvatarIcon04 from "/public/avatar/woman-04.svg";
import manAvatarIcon01 from "/public/avatar/man-01.svg";
import manAvatarIcon02 from "/public/avatar/man-02.svg";
import { type StaticImageData } from "next/image";

export const builderTestimonials: BuilderTestimonial[] = [
  {
    avatar: womanAvatarIcon01 as StaticImageData,
    name: "Sebastiaan Debrouwere",
    socialName: "@iamsebdeb",
    testimonial:
      "We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI",
    date: "10:01 PM · Apr 7, 2022",
  },
  {
    avatar: manAvatarIcon01 as StaticImageData,
    name: "Alon",
    socialName: "@alon",
    testimonial:
      "As an early stage startup I’m really loving using @attio - great balance of flexibility and prescriptiveness",
    date: "6:57 PM · Dec 1, 2022",
  },
  {
    avatar: womanAvatarIcon03 as StaticImageData,
    name: "Alexandra Smith",
    socialName: "@smith_alexandra",
    testimonial:
      "We use our CRM @attio for sales, fundraising, and recruiting. It's awesome",
    date: "1:32 PM · Jan 4, 2023",
  },
  {
    avatar: manAvatarIcon02 as StaticImageData,
    name: "Khrisna",
    socialName: "@ntkris",
    testimonial:
      "Holy shit @attio is beautiful 😍 I've run  my CRM on Notion to date. Hubspot & Salesforce too clunky. Sleek and simple, just what I need",
    date: "10:22 PM · Mar 3, 2023",
  },
  {
    avatar: womanAvatarIcon04 as StaticImageData,
    name: "Villa Gouse",
    socialName: "@villa_gouse",
    testimonial:
      "Let's be honest, most CRMs suck. Overcomplicated, expensive, and you have to bend to their will...not the other way around. I am a huge fan of @attio - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple.",
    date: "4:05 PM · Dec 1, 2022",
  },
  {
    avatar: womanAvatarIcon02 as StaticImageData,
    name: "Damian",
    socialName: "@damian09",
    testimonial:
      "I've been using @attio to track applicants, manage my deal pipeline and manage the associated notes/tasks. The use-cases are unlimited; it truly feels like the Notion of CRM.",
    date: "2:21 PM · Jan 9, 2023",
  },
];

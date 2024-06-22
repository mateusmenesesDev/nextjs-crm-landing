import { type StaticImageData } from "next/image";

export type FeatureCard = {
  title: string;
  description: string;
  Icon: () => React.ReactNode;
  image?: StaticImageData;
  imageDesktop?: StaticImageData;
  children?: React.ReactNode;
};

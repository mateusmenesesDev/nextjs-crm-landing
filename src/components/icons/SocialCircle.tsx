import Image, { type StaticImageData } from "next/image";
import socialCircleIcon from "/public/svg/social-circle.svg";

export default function SocialCircle() {
  return <Image src={socialCircleIcon as StaticImageData} alt="social icon" />;
}

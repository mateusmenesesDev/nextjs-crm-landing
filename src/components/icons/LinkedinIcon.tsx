import Image, { type StaticImageData } from "next/image";

import linkedinIcon from "/public/svg/linkedin.svg";

export default function LinkedinIcon() {
  return <Image src={linkedinIcon as StaticImageData} alt="Linkedin icon" />;
}

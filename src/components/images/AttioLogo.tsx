import Image, { type StaticImageData } from "next/image";
import attioLogo from "/public/svg/attio-logo.svg";

export default function AttioLogo() {
  return <Image src={attioLogo as StaticImageData} alt="Attio CRM logobrand" />;
}

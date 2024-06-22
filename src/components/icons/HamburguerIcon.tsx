import Image, { type StaticImageData } from "next/image";
import hamburguerIcon from "/public/svg/hamburguer.svg";

export default function HamburguerIcon() {
  return <Image src={hamburguerIcon as StaticImageData} alt="Open menu icon" />;
}

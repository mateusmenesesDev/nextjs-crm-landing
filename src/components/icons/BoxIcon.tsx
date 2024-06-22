import Image, { type StaticImageData } from "next/image";
import boxIcon from "/public/svg/box.svg";

export default function BoxIcon() {
  return <Image src={boxIcon as StaticImageData} alt="Box icon" />;
}

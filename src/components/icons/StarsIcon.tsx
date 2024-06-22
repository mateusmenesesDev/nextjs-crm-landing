import Image, { type StaticImageData } from "next/image";
import starsIcon from "/public/svg/star.svg";

export default function StarsIcon() {
  return (
    <Image
      src={starsIcon as StaticImageData}
      alt="Star icon"
      className="lg:h-4"
    />
  );
}

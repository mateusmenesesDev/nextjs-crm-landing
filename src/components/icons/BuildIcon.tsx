import Image, { type StaticImageData } from "next/image";

import buildIcon from "/public/svg/build.svg";

export default function BuildIcon() {
  return (
    <Image
      src={buildIcon as StaticImageData}
      alt="build icon"
      className="lg:h-4"
    />
  );
}

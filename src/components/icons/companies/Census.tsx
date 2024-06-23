import Image, { type StaticImageData } from "next/image";

import censusSvg from "/public/svg/companies/census.svg";

export default function Census() {
  return <Image src={censusSvg as StaticImageData} alt="Census" />;
}

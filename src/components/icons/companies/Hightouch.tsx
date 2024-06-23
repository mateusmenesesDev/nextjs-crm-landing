import Image, { type StaticImageData } from "next/image";

import hightouchSvg from "/public/svg/companies/hightouch.svg";

export default function Hightouch() {
  return <Image src={hightouchSvg as StaticImageData} alt="Hightouch" />;
}

import Image, { type StaticImageData } from "next/image";

import segmentSvg from "/public/svg/companies/segment.svg";

export default function Segment() {
  return <Image src={segmentSvg as StaticImageData} alt="Segment" />;
}

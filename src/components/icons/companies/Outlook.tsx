import Image, { type StaticImageData } from "next/image";

import outlookSvg from "/public/svg/companies/outlook.svg";

export default function Outlook() {
  return <Image src={outlookSvg as StaticImageData} alt="Outlook" />;
}

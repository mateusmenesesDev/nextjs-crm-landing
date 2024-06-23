import Image, { type StaticImageData } from "next/image";

import gmailSvg from "/public/svg/companies/gmail.svg";

export default function Gmail() {
  return <Image src={gmailSvg as StaticImageData} alt="Gmail" />;
}

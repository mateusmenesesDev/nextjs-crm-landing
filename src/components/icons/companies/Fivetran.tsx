import Image, { type StaticImageData } from "next/image";

import fivetranSvg from "/public/svg/companies/fivetran.svg";

export default function Fivetran() {
  return <Image src={fivetranSvg as StaticImageData} alt="Fivetran" />;
}

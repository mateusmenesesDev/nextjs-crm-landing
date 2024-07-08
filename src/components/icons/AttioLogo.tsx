import Image, { type StaticImageData } from "next/image";
import attioLogo from "/public/svg/attio-logo.svg";
import attioLogoWhite from "/public/svg/attio-logo-white.svg";

type Props = {
  variant?: "white" | "black";
};

export default function AttioLogo({ variant = "black" }: Props) {
  if (variant === "white") {
    return (
      <Image
        src={attioLogoWhite as StaticImageData}
        alt="Attio CRM logobrand"
      />
    );
  }
  return <Image src={attioLogo as StaticImageData} alt="Attio CRM logobrand" />;
}

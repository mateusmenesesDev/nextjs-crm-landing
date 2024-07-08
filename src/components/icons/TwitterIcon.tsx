import Image, { type StaticImageData } from "next/image";
import twitterIcon from "/public/svg/twitter.svg";
import twitterWhiteIcon from "/public/svg/twitter-white.svg";

type Props = {
  variant?: "white" | "black";
};

export const TwitterIcon = ({ variant }: Props) => {
  const finalImage = (
    variant === "white" ? twitterWhiteIcon : twitterIcon
  ) as StaticImageData;

  return <Image src={finalImage} alt="Twitter" />;
};

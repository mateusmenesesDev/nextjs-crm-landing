import Image, { type StaticImageData } from "next/image";
import reportIcon from "/public/svg/report.svg";

export default function ReportIcon() {
  return (
    <Image
      src={reportIcon as StaticImageData}
      alt="Report icon"
      className="lg:h-4"
    />
  );
}

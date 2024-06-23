import Image, { type StaticImageData } from "next/image";

type Props = {
  avatarImage: StaticImageData;
  text: string;
  name: string;
  position: string;
};
export default function FeatureTestimonial({
  avatarImage,
  text,
  name,
  position,
}: Props) {
  return (
    <div className="lg:m-auto lg:flex lg:max-w-[38.125rem] lg:flex-col lg:items-center ">
      <Image src={avatarImage} alt="avatar" className="mb-6" />
      <p className="lg:text-center lg:text-2xl">{text}</p>
      <p className="mt-6 text-base">{name}</p>
      <p className="pb-10 text-base text-base-400 lg:p-0">{position}</p>
    </div>
  );
}

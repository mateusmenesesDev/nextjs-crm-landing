import Image from "next/image";
import { type FeatureCard } from "~/types/feature.type";

export default function FeatureCard({
  children,
  description,
  Icon,
  image,
  title,
}: FeatureCard) {
  return (
    <div className="h-full rounded-[1.25rem] bg-dark-100 p-1">
      <div className="flex h-full flex-col rounded-[1.25rem] bg-base-100 p-6 pr-0">
        <div className="mb-3 flex gap-[0.38rem]">
          {<Icon />}
          <span>{title}</span>
        </div>
        <p className="mb-6">{description}</p>
        {image && (
          <div className="mt-auto h-[12.48606rem]">
            <Image
              src={image}
              alt="CRM build"
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

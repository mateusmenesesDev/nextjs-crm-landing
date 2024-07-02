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
          {Icon && <Icon />}
          <h3 className="font-semibold text-base-500">{title}</h3>
        </div>
        <p className="mb-12 lg:mb-[5.5rem]">{description}</p>
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

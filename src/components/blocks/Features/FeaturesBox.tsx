"use client";

import Image from "next/image";
import { useState } from "react";
import { features } from "~/constant/features";
import { cn } from "~/lib/utils";
import { type FeatureCard } from "~/types/feature.type";

type FeatureTextProps = {
  isSelect?: boolean;
  onClick?: () => void;
} & Pick<FeatureCard, "title" | "description" | "Icon">;

const FeatureText = ({
  title,
  description,
  Icon,
  isSelect,
  onClick,
}: FeatureTextProps) => (
  <div
    className={cn(
      "flex items-baseline gap-[0.38rem] text-base-300 transition-colors",
      {
        "text-base-600": isSelect,
      },
    )}
  >
    <div className="">
      <Icon />
    </div>
    <button className="group text-start" onClick={onClick}>
      <p className="mb-3 text-lg group-hover:underline">{title}</p>
      <p className="max-w-[15.375rem] text-md group-hover:underline">
        {description}
      </p>
    </button>
  </div>
);

export default function FeaturesBox() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="h-full rounded-[1.25rem] bg-dark-100 p-1">
      <div className="flex h-full flex-col rounded-[1.25rem] bg-base-100 p-9 pb-0">
        <div className="flex justify-between">
          {features.map((feature, i) => (
            <FeatureText
              key={i}
              {...feature}
              isSelect={i === selected}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
        <div className="mt-16 h-[24rem] w-full">
          <Image
            src={features[selected]?.imageDesktop ?? ""}
            alt="feature"
            className="h-full w-full rounded-t-[1.25rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

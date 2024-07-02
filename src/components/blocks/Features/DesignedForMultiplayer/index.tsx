import { designedForMultiplayer } from "~/constant/designedForMultiplayer";
import FeatureItem from "../FeatureItem";
import FeatureCard from "../FeatureCard";
import FeatureTestimonial from "../FeatureTestimonial";
import avatarImage from "/public/svg/avatar-3.svg";
import { type StaticImageData } from "next/image";
import { cn } from "~/lib/utils";

export default function DesignedForMultiplayer() {
  return (
    <FeatureItem
      title="Designed for multiplayer."
      description="The first trully multiplayer CRM. After all, the best work doesn’t come from silos."
    >
      <div className="mb-6 grid flex-col gap-6 lg:mb-[3.75rem] lg:grid-cols-6">
        {designedForMultiplayer.map((feature, index) => (
          <div
            key={index}
            className={cn("col-span-2", {
              "lg:col-span-4": index === 0 || index === 3,
            })}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
      <FeatureTestimonial
        avatarImage={avatarImage as StaticImageData}
        name="Alon Bartur"
        position="Co-founder & CEO, Dopt"
        text="“Attio has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything.”"
      />
    </FeatureItem>
  );
}

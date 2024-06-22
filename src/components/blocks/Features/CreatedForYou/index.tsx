import Image, { type StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselCounter,
} from "~/components/ui/carousel";
import FeatureCard from "../FeatureCard";
import FeatureItem from "../FeatureItem";
import FeaturesBox from "../FeaturesBox";
import Container from "~/components/ui/Container";
import { features } from "~/constant/features";

import avatarImage from "/public/svg/avatar.svg";

export default function CreatedForYou() {
  return (
    <Container>
      <FeatureItem
        title="A CRM created to be your own."
        description="Tweak anything and everything to ensure Attio fits your business, not the other way around."
      >
        <Carousel className="lg:hidden">
          <CarouselContent className="mb-6 ">
            {features.map((feature, i) => (
              <CarouselItem key={i} className="basis-[17rem]">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  Icon={feature.Icon}
                  image={feature.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselCounter itemsLength={features.length} />
        </Carousel>
        <div className="hidden lg:block">
          <FeaturesBox />
        </div>
        <div className="mt-10 lg:m-auto lg:mt-[3.75rem] lg:flex lg:max-w-[38.125rem] lg:flex-col lg:items-center ">
          <Image
            src={avatarImage as StaticImageData}
            alt="avatar"
            className="mb-6"
          />
          <p className="lg:text-center lg:text-2xl">
            “My team loves Attio’s reporting system because it’s so dynamic. We
            can splice our data in so many different ways and combinations.”
          </p>
          <p className="mt-6 text-base">Jane Doe</p>
          <p className="pb-10 text-base text-base-400 lg:p-0">Founder</p>
        </div>
      </FeatureItem>
    </Container>
  );
}

import { type StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselCounter,
} from "~/components/ui/carousel";
import Container from "~/components/ui/Container";
import FeatureCard from "../FeatureCard";
import FeatureItem from "../FeatureItem";
import FeaturesBox from "../FeaturesBox";
import FeatureTestimonial from "../FeatureTestimonial";

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

        <div className="mt-10 lg:mt-[3.75rem]">
          <FeatureTestimonial
            avatarImage={avatarImage as StaticImageData}
            text="“My team loves Attio’s reporting system because it’s so dynamic. We can splice our data in so many different ways and combinations.”"
            name="Jane Doe"
            position="Founder"
          />
        </div>
      </FeatureItem>
    </Container>
  );
}

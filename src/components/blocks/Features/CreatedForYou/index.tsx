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
      </FeatureItem>
    </Container>
  );
}

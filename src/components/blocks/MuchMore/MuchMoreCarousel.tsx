import MuchMoreCard from "./MuchMoreCard";
import {
  Carousel,
  CarouselContent,
  CarouselCounter,
  CarouselItem,
} from "~/components/ui/carousel";

import { muchMore } from "~/constant/muchMore";

export default function MuchMoreCarousel() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {muchMore.map((slide, index) => (
            <CarouselItem key={index}>
              <MuchMoreCard {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselCounter
          className="mt-6"
          itemsLength={muchMore.length}
          variant="circle"
        />
      </Carousel>
    </div>
  );
}

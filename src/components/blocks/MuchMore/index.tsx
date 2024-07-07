import MuchMoreCard from "./MuchMoreCard";
import MuchMoreCarousel from "./MuchMoreCarousel";

import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

import { muchMore } from "~/constant/muchMore";

export default function MuchMore() {
  return (
    <Container className="py-[3.75rem] lg:py-[7.25rem]">
      <div>
        <Heading level={2} style={2} className="mb-4 text-base-200">
          <span className="text-base-300">And so</span> much more...
        </Heading>
        <p>
          Your customers are always connected. Why should your CRM be any
          different?
        </p>
      </div>
      <div className="my-[2.75rem]">
        <div className="lg:hidden">
          <MuchMoreCarousel />
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {muchMore.map((slide, index) => (
            <MuchMoreCard key={index} {...slide} />
          ))}
        </div>
      </div>
    </Container>
  );
}

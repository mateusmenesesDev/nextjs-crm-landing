import { Button } from "~/components/ui/Button";
import Container from "~/components/ui/Container";
import Heading from "~/components/ui/Heading";
import BuilderTestimonialCard from "./BuilderTestimonialCard";
import { builderTestimonials } from "~/constant/builderTestimonials";

export default function LovedByBuilders() {
  return (
    <Container>
      <Heading level={2} style={2} className="mb-4 text-base-200">
        <span className="text-base-300">Loved by</span> Builders.
      </Heading>
      <p className="mb-8 text-lg">
        Attio is the customer relationship management tool for everyone who
        values collaboration.
      </p>
      <Button
        variant="outline"
        color="tertiary"
        disabled
        className="mb-[3.75rem]"
      >
        More customer stories
      </Button>
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3">
        {builderTestimonials.map((testimonial, index) => (
          <BuilderTestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
}

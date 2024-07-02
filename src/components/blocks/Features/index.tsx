import Container from "~/components/ui/Container";
import CreatedForYou from "./CreatedForYou";
import DesignedForMultiplayer from "./DesignedForMultiplayer";
import ModeledYourData from "./ModeledYourData";

export default function Features() {
  return (
    <>
      <section className="mb-[3.75rem] lg:mb-36">
        <CreatedForYou />
      </section>
      <section className="mb-24 lg:mb-36">
        <ModeledYourData />
      </section>
      <section className="mb-24 lg:mb-36">
        <Container>
          <DesignedForMultiplayer />
        </Container>
      </section>
    </>
  );
}

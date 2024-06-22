import Container from "~/components/ui/Container";
import Heading from "~/components/ui/Heading";

export default function HomePage() {
  return (
    <main>
      <section>
        <Container>
          <Heading>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <p className="text-xs">text xs</p>
          <p className="text-sm">text sm</p>
          <p className="text-base">text base</p>
          <p className="text-md">text md</p>
          <p className="text-lg">text lg</p>
          <p className="text-xl">text xl</p>
          <p className="text-2xl">text 2xl</p>
        </Container>
      </section>
    </main>
  );
}

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
          <p>text xs</p>
          <p>text sm</p>
          <p>text base</p>
          <p>text md</p>
          <p>text lg</p>
          <p>text xl</p>
          <p>text 2xl</p>
        </Container>
      </section>
    </main>
  );
}

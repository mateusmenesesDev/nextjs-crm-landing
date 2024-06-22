import Features from "~/components/blocks/Features";
import Hero from "~/components/blocks/Hero";

export default function HomePage() {
  return (
    <main>
      <section className="mb-[3.75rem] mt-8 lg:my-20">
        <Hero />
      </section>
      <section className="mb-[3.75rem]">
        <Features />
      </section>
    </main>
  );
}

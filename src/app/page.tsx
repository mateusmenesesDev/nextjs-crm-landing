import Features from "~/components/blocks/Features";
import Hero from "~/components/blocks/Hero";
import MuchMore from "~/components/blocks/MuchMore";
import ScaleWithSecurity from "~/components/blocks/ScaleWithSecurity";

export default function HomePage() {
  return (
    <main>
      <section className="mb-[3.75rem] mt-8 lg:my-20">
        <Hero />
      </section>
      <section className="mb-[3.75rem] lg:my-20">
        <Features />
      </section>
      <section className="mb-[3.75rem] lg:my-20">
        <ScaleWithSecurity />
      </section>
      <section className="bg-dark-600 text-base-200">
        <MuchMore />
      </section>
    </main>
  );
}

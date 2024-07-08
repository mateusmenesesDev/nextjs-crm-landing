import Container from "~/components/ui/Container";
import Heading from "~/components/ui/Heading";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <Container className="gap-16 py-6 text-primary-300 lg:flex lg:items-center lg:justify-between lg:py-20">
      <Heading
        style={1}
        level={2}
        className="mb-8 text-[2rem] leading-[2.375rem] text-primary-300"
      >
        Ready to build your
        <br /> team’s <span className="text-base-100">dream CRM?</span>
      </Heading>
      <ContactUsForm />
    </Container>
  );
}

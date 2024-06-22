import Image from "next/image";

import { LinkButton } from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

import heroImage from "/public/images/hero.png";

export default function Hero() {
  return (
    <Container>
      <Heading className="m-auto mb-4 text-center md:max-w-[35rem] lg:mb-8 lg:max-w-[51rem]">
        Customer relationship magic.
      </Heading>
      <p className="m-auto mb-8 max-w-[34rem] text-center">
        Powerful, flexible and data-driven, Attio makes it easy to build the
        exact CRM your business needs.
      </p>
      <div className="mb-16 flex justify-center">
        <LinkButton href="https://attioscrm.vercel.app/signup">
          Get started
        </LinkButton>
      </div>
      <div className="flex justify-center">
        <Image src={heroImage} alt="CRM system image" />
      </div>
    </Container>
  );
}

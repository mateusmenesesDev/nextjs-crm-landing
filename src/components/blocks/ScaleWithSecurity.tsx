import { LinkButton } from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

import gdprImage from "/public/images/security/gdpr.png";
import ccpaImage from "/public/images/security/ccpa.png";
import iso9001 from "/public/images/security/iso9001.png";
import iso27001 from "/public/images/security/iso27001.png";
import Image from "next/image";

export default function ScaleWithSecurity() {
  return (
    <div>
      <div className="relative">
        <div className="absolute left-0 top-5 h-[1px] w-6 bg-base-200"></div>
        <div className="absolute right-0 top-5 h-[1px] w-6 bg-base-200"></div>
        <Container>
          <div className="flex justify-between">
            <div className="h-5 w-[1px] bg-base-200"></div>
            <div className="h-5 w-[1px] bg-base-200"></div>
          </div>
          <div className="flex flex-col items-center border border-base-200 px-6 pb-[3.12rem] pt-[1.88rem]">
            <Heading level={2} style={2} className="mb-1">
              Scale with <span className="text-base-300">security.</span>
            </Heading>
            <p className="mb-5 text-center text-md">
              Attio is audited and certified by industry leading Third Party
              standards.
            </p>
            <LinkButton href="#" className="w-full">
              Start for free
            </LinkButton>
          </div>
        </Container>
      </div>

      <div className="relative">
        <Container>
          <div className="grid grid-cols-2 place-items-center items-center gap-8 border border-t-0 border-base-200 px-6 pb-[3.12rem] pt-[1.88rem] md:grid-cols-4">
            <Image src={gdprImage} alt="GDPR" className="object-contain" />
            <Image src={ccpaImage} alt="CCPA" className="object-contain" />
            <Image src={iso9001} alt="ISO 9001" className="object-contain" />
            <Image src={iso27001} alt="ISO 27001" className="object-contain" />
          </div>
          <div className="flex justify-between">
            <div className="h-5 w-[1px] bg-base-200"></div>
            <div className="h-5 w-[1px] bg-base-200"></div>
          </div>
        </Container>
        <div className="absolute bottom-5 left-0 h-[1px] w-6 bg-base-200"></div>
        <div className="absolute bottom-5 right-0 h-[1px] w-6 bg-base-200"></div>
      </div>
    </div>
  );
}

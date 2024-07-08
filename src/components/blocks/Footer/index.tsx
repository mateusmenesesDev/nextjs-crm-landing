import Container from "../../ui/Container";
import AttioLogo from "../../icons/AttioLogo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import SocialCircle from "../../icons/SocialCircle";
import LinkedinIcon from "../../icons/LinkedinIcon";
import FooterAccordion from "./FooterAccordion";
import { footerNavigationItems } from "~/constant/footerNavigationItems";
import Link from "next/link";
import { Button } from "~/components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-base-600 pb-[3.75rem] pt-10">
      <Container>
        <div className="mb-10 flex justify-between">
          <AttioLogo variant="white" />
          <div className="flex gap-3 lg:hidden">
            <TwitterIcon variant="white" />
            <SocialCircle />
            <LinkedinIcon />
          </div>
        </div>
        <div className="lg:hidden">
          <FooterAccordion />
        </div>
        <div className="hidden lg:flex">
          <div className="grid flex-1 grid-cols-4">
            {footerNavigationItems.map((item, i) => (
              <div key={i}>
                <h3 className="mb-3 text-lg font-bold text-base-300">
                  {item.title}
                </h3>
                <ul>
                  {item.links.map((subItem, i) => (
                    <li key={i} className="mb-2">
                      <Link
                        href={subItem.href}
                        className="text-base text-base-400 transition-colors hover:text-base-200"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="min-w-[18.5rem]">
            <h3 className="mb-3 text-lg font-bold text-base-300">
              Ready to build?
            </h3>
            <div className="flex flex-col gap-3">
              <Button color="tertiary">Start for free</Button>
              <Button color="primary" variant="outline">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center text-xs text-base-400 lg:flex-row lg:justify-between lg:text-sm">
          <span className="mb-2 lg:mb-0">
            Portfolio website. Usage only for Resume
          </span>
          <div className="flex gap-2">
            <Link href="#" className="transition-colors hover:text-base-200">
              Terms & Conditions
            </Link>
            <span>∙</span>
            <Link href="#" className="transition-colors hover:text-base-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

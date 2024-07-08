import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { footerNavigationItems } from "~/constant/footerNavigationItems";

export default function FooterAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-3 text-base-400"
    >
      {footerNavigationItems.map((item, i) => (
        <AccordionItem
          key={i}
          value={String(i)}
          className="rounded-lg border-none bg-[#222529] px-5 py-2 text-md text-base-300"
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          {item.links.map((subItem, i) => (
            <AccordionContent key={i}>
              <Link
                className="transition-colors hover:text-base-200"
                href={subItem.href}
              >
                {subItem.name}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

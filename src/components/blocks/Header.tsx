import Link from "next/link";

import { navigationItems } from "~/constant/navigationItems";

import HamburguerIcon from "../icons/HamburguerIcon";
import AttioLogo from "../icons/AttioLogo";
import { LinkButton } from "../ui/Button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-16">
        <AttioLogo />
        <nav className="hidden gap-4 lg:flex">
          <ul className="flex gap-4">
            {navigationItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="text-md capitalize text-base-600 transition-colors hover:text-base-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <HamburguerIcon />
          </SheetTrigger>
          <SheetContent>
            <div className="flex h-full flex-col">
              <nav>
                <ul className="flex flex-col gap-6">
                  {navigationItems.map((item, i) => (
                    <li
                      key={i}
                      className="text-2xl font-semibold text-base-400"
                    >
                      <SheetClose asChild>
                        <Link href={item.href} className="capitalize">
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <LinkButton
                  color="secondary"
                  href="https://app.attioscrm.vercel.app/login"
                >
                  Login
                </LinkButton>
                <LinkButton href="https://app.attioscrm.vercel.app/signup">
                  Start for free
                </LinkButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex lg:gap-3">
        <LinkButton
          size="md"
          variant="outline"
          color="primary"
          href="https://app.attioscrm.vercel.app/login"
        >
          Login
        </LinkButton>
        <LinkButton size="md" href="https://app.attioscrm.vercel.app/signup">
          Start for free
        </LinkButton>
      </div>
    </header>
  );
}

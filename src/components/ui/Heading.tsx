import React from "react";
import { gilroy } from "~/assets/fonts";
import { cn } from "~/lib/utils";

type Props = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: 1 | 2 | 3;
};

<h1 className="track"></h1>;

export default function Heading({ children, level = 1, style }: Props) {
  style = style ?? (level as 1 | 2 | 3);
  return React.createElement(
    `h${level}`,
    {
      className: cn(`${gilroy.className} font-bold`, {
        "text-[3.75rem] leading-[3.5rem] tracking-[-0.09375rem] lg:text-[5.75rem] lg:leading-[5.5rem] lg:tracking-[-0.225rem]":
          style === 1,
        "text-[2rem] leading-[2.375rem] tracking-[-0.03125rem] lg:text-[3.25rem] lg:leading-[3.625rem] lg:tracking-[-0.075rem]":
          style === 2,
        "text-[1.5rem] leading-[1.625rem] tracking-[-0.05rem] lg:text-[2.5rem] lg:leading-[2.75rem] lg:tracking-[0.05rem]":
          style === 3,
      }),
    },
    children,
  );
}

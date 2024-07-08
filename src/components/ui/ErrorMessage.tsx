import autoAnimate from "@formkit/auto-animate";
import React, { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

export default function ErrorMessage({
  children,
}: {
  children?: React.ReactNode;
}) {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <p
      ref={parent}
      className={cn("text-xs font-semibold text-error-100 lg:text-sm", {
        "pt-1": children,
      })}
    >
      {children}
    </p>
  );
}

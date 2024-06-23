import { cn } from "~/lib/utils";

type Props = {
  children: React.ReactNode;
  rootClassName?: string;
  className?: string;
};

export default function FeatureContainer({
  children,
  className,
  rootClassName,
}: Props) {
  return (
    <div className={cn("rounded-[1.25rem] bg-dark-100 p-1", rootClassName)}>
      <div
        className={cn(
          "min-h-full rounded-[1.25rem] border border-dark-200 bg-base-100 p-6",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

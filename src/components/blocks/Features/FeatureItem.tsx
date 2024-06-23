import Heading from "~/components/ui/Heading";
import BoxIcon from "~/components/icons/BoxIcon";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function FeatureItem({ title, description, children }: Props) {
  return (
    <div>
      <div className="flex items-start gap-1 lg:gap-6">
        <BoxIcon />
        <div className="flex w-full flex-col">
          <Heading className="mb-4 lg:max-w-[33rem]" level={2}>
            {title}
          </Heading>
          <p className="mb-[4.25rem] lg:max-w-[31rem]">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

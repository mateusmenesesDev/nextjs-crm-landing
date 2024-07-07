import Image from "next/image";
import Heading from "~/components/ui/Heading";
import type { MuchMore } from "~/types/muchMore.type";

export default function MuchMoreCard({
  image,
  alt,
  title,
  description,
}: MuchMore) {
  return (
    <div className="bg-base-1 h-[20.875rem] rounded-3xl border border-base-500 p-1">
      <div className="flex h-full flex-col rounded-3xl border border-base-400 p-10">
        <div className="flex justify-center py-4">
          <Image src={image} alt={alt} width={300} height={300} />
        </div>
        <div className="mt-auto lg:mt-[1.12rem]">
          <Heading
            className="mb-2 text-base-200 lg:text-2xl"
            style={3}
            level={3}
          >
            {title}
          </Heading>
          <p className="text-md text-base-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

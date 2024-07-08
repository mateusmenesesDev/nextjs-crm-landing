import Image, { type StaticImageData } from "next/image";

import twitterIcon from "/public/svg/twitter.svg";

import type { BuilderTestimonial } from "~/types/BuilderTestimonial.type";

export default function BuilderTestimonialCard({
  avatar,
  name,
  socialName,
  testimonial,
  date,
}: BuilderTestimonial) {
  return (
    <div className="h-fit rounded-3xl border border-base-500 p-1">
      <div className="flex h-fit flex-col gap-6 rounded-3xl border border-base-400 p-6">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={avatar}
                alt={name}
                width={100}
                height={100}
                className="h-8 w-8"
              />
              <div className="text-sm">
                <p className="text-base-300">{name}</p>
                <p className="text-base-400">{socialName}</p>
              </div>
            </div>
            <Image
              src={twitterIcon as StaticImageData}
              alt="Twitter"
              className="h-6 w-6"
              width={100}
              height={100}
            />
          </div>
        </div>
        <p className="text-md">{testimonial}</p>
        <p className="text-sm text-base-400">{date}</p>
      </div>
    </div>
  );
}

"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/ui/Button";
import Heading from "~/components/ui/Heading";
import ErrorMessage from "~/components/ui/ErrorMessage";

import type { ContactUs } from "~/types/ContactUs.type";
import { contactUsSchema } from "~/schema/contactUs.schema";
import { wait } from "~/utils/wait";
import { toast } from "sonner";
import LoadingSpinner from "~/components/ui/LoadingSpinner";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUs>({ resolver: zodResolver(contactUsSchema) });

  const onSubmit: SubmitHandler<ContactUs> = async () => {
    await wait(1500);
    toast.success("Thank you for subscribing!", {
      closeButton: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 rounded-lg bg-base-100 p-8 text-lg text-base-500"
    >
      <Heading style={3} level={3} className="text-base-500 lg:text-2xl">
        Subscribe for demo version
      </Heading>
      <label>
        <span className="text-md">Name</span>
        <input
          {...register("name")}
          className="w-full rounded-md border border-base-600 bg-transparent px-4 py-1 text-md text-base-600"
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </label>
      <label>
        <span className="text-md">Email</span>
        <input
          {...register("email")}
          className="w-full rounded-md border border-base-600 bg-transparent px-4 py-1 text-md text-base-600"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </label>
      <Button disabled={isSubmitting} color="secondary">
        {!isSubmitting && "Confirm subscription"}
        {isSubmitting && <LoadingSpinner />}
      </Button>
    </form>
  );
}

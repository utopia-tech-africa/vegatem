"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  organization: z.string().min(1, "Please describe your organization type"),
  interest: z.string().min(1, "Please indicate what you are interested in"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setSubmitMessage({
        type: "success",
        text: "Form submitted successfully! Check your email for confirmation.",
      });

      form.reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col justify-center h-full overflow-hidden">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-1000">
            Full name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...form.register("name")}
            disabled={isSubmitting}
            className="rounded-lg p-3 mt-2"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-neutral-1000">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="example@email.com"
              {...form.register("email")}
              disabled={isSubmitting}
              className="rounded-lg p-3 mt-2"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-neutral-1000">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="rounded-lg border border-input bg-background p-1.5 mt-2">
              <Controller
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    international
                    defaultCountry="GH"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                    className="w-full bg-transparent"
                  />
                )}
              />
            </div>
            {form.formState.errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Organization Type */}
        <div>
          <label className="block text-sm font-medium text-neutral-1000">
            Organization type <span className="text-red-500">*</span>
          </label>

          <Controller
            name="organization"
            control={form.control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isSubmitting}
              >
                <SelectTrigger className="rounded-lg p-3 mt-2 w-full">
                  <SelectValue placeholder="Select organization type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Pharmaceutical distributor">
                    Pharmaceutical distributor
                  </SelectItem>
                  <SelectItem value="Pharmacy">Hospital or clinic</SelectItem>
                  <SelectItem value="Distributor">Distributor</SelectItem>
                  <SelectItem value="NGO">NGO or nonprofit</SelectItem>
                  <SelectItem value="Corporate">Retail pharmacy</SelectItem>
                  <SelectItem value="Retailer">
                    Public health organization
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {form.formState.errors.organization && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.organization.message}
            </p>
          )}
        </div>

        {/* Interest */}
        <div>
          <label className="block text-sm font-medium text-neutral-1000">
            What are you interested in? <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Partnerships, distribution, retail, etc..."
            {...form.register("interest")}
            disabled={isSubmitting}
            rows={3}
            className="rounded-lg p-3 mt-2 resize-none"
          />
          {form.formState.errors.interest && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.interest.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-neutral-1000">
            Message
          </label>
          <Textarea
            {...form.register("message")}
            disabled={isSubmitting}
            rows={4}
            className="rounded-lg p-3 mt-2 resize-none"
          />
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div
            className={`p-4 rounded-lg text-sm ${
              submitMessage.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          style={{
            background: "linear-gradient(0deg, #35A142 0%, #00540A 100%)",
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

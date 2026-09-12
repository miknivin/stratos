"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Tell us a little about your needs.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const subject = `Website inquiry from ${values.name}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
      values.service ? `Service of interest: ${values.service}` : null,
      "",
      values.message,
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-ink-900/8 bg-mist-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" />
        <h3 className="text-lg font-semibold text-ink-900">
          Your email client should be opening now
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-mist-500">
          If nothing happened, email us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-brand-700 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline-ink"
          size="sm"
          onClick={() => {
            setValues(initialState);
            setSent(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-900/8 bg-mist-50 p-7 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field label="Company (optional)" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field label="Service of interest (optional)" htmlFor="service">
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.shortTitle}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="How can we help?" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            className={inputClass(Boolean(errors.message))}
          />
        </Field>
      </div>

      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Send message
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-ink-900"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-brand-700">{error}</p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-mist-400",
    "focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
    hasError ? "border-brand-600" : "border-ink-900/12",
  ].join(" ");
}

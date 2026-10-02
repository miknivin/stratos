"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, productCategories } from "@/lib/site-config";
import { serviceCategories, getServiceBySlug } from "@/lib/services-data";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

const interestOptions = [
  ...serviceCategories.map((category) => category.name),
  "Products",
  "Help me choose",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [specificInterest, setSpecificInterest] = useState("");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  // Prefill from ?service=slug or ?product=slug without opting this page
  // into dynamic rendering (no useSearchParams needed for this read-only use).
  // window.location is only available post-mount, so this one-time prefill
  // genuinely requires an effect rather than a lazy useState initializer
  // (which would cause a hydration mismatch against the static HTML).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceSlug = params.get("service");
    const productSlug = params.get("product");

    if (serviceSlug) {
      const service = getServiceBySlug(serviceSlug);
      if (service) {
        const category = serviceCategories.find(
          (c) => c.slug === service.categorySlug,
        );
        setValues((prev) => ({ ...prev, interest: category?.name ?? "" }));
        setSpecificInterest(service.title);
      }
    } else if (productSlug) {
      const product = productCategories.find((p) => p.slug === productSlug);
      if (product) {
        setValues((prev) => ({ ...prev, interest: "Products" }));
        setSpecificInterest(product.title);
      }
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim() || !emailPattern.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.interest) next.interest = "Select an area of interest.";
    if (!values.message.trim()) {
      next.message = "Tell us about your requirements.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const subject = `Website enquiry from ${values.name}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Business email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
      values.phone ? `Phone: ${values.phone}` : null,
      `Area of interest: ${values.interest}`,
      specificInterest ? `Specific interest: ${specificInterest}` : null,
      "",
      "Project requirements:",
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
          Send the message from there to reach our team. If nothing opened,
          email us directly at{" "}
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
            setSpecificInterest("");
            setSent(false);
          }}
        >
          Send another enquiry
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

        <Field label="Business email" htmlFor="email" error={errors.email}>
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

        <Field label="Phone (optional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            label="Service or product interest"
            htmlFor="interest"
            error={errors.interest}
          >
            <select
              id="interest"
              name="interest"
              value={values.interest}
              onChange={(event) => update("interest", event.target.value)}
              aria-invalid={Boolean(errors.interest)}
              className={inputClass(Boolean(errors.interest))}
            >
              <option value="">Select an area of interest</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          {specificInterest ? (
            <p className="mt-1.5 text-xs text-mist-500">
              Specifically: <span className="font-medium text-ink-900">{specificInterest}</span>
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <Field
          label="Project requirements"
          htmlFor="message"
          error={errors.message}
        >
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
        Send Enquiry
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

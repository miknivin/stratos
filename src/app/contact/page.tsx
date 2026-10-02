import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: { absolute: "Contact STRATOS INFO TECH | Abu Dhabi" },
  description:
    "Whether you are planning new infrastructure, moving to the cloud, improving your business systems or sourcing technology products, tell STRATOS INFO TECH what you need.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's Discuss Your IT Requirements"
        description="Whether you are planning new infrastructure, moving to the cloud, improving your business systems or sourcing technology products, tell us what you need. STRATOS will help you define the next step."
        breadcrumb={
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
        }
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </section>
    </>
  );
}

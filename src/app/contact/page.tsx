import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stratos Info Tech in Abu Dhabi for cybersecurity, cloud, IT consultancy and network services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your technology needs"
        description="Reach out for a security audit, a cloud migration plan, or to learn more about our services. Our team typically responds within one business day."
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

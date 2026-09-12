import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute -top-32 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-brand-600/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute bottom-[-14rem] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-navy-600/40 blur-[110px]"
        aria-hidden
      />

      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={600}
        height={585}
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-6%] h-[34rem] w-auto -translate-y-1/2 opacity-[0.07] mix-blend-screen sm:right-[-2%] lg:right-[4%]"
      />

      <Container className="relative py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:py-36">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Abu Dhabi &middot; United Arab Emirates</Eyebrow>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Cybersecurity and IT foundations built for{" "}
            <span className="text-gradient-brand">what&apos;s next</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/65">
            Stratos Info Tech designs, secures and manages the technology
            modern enterprises run on, from cyber risk audits and security
            architecture to cloud, network and AI services, backed by
            trusted hardware partners.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/services" size="lg">
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Talk to an expert
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-white/50">
            <ShieldCheck className="h-5 w-5 text-brand-400" />
            Built on industry best practice, backed by top technology
            manufacturers
          </div>
        </div>

        <div className="relative mt-16 hidden shrink-0 lg:mt-0 lg:block">
          <div className="relative h-120 w-92 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-navy-950/50">
            <Image
              src="/images/hero-visual.jpg"
              alt="Stratos Info Tech cybersecurity operations"
              fill
              priority
              sizes="(min-width: 1024px) 23rem, 0px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>
          <div
            className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-gradient-brand opacity-90 blur-2xl"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}

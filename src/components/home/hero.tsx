import Image from "next/image";
import { HeroSwiper } from "@/components/home/hero-swiper";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
      <div
        className="animate-float-a absolute -top-32 right-[-10%] h-128 w-lg rounded-full bg-brand-600/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="animate-float-b absolute -bottom-56 left-[-8%] h-104 w-104 rounded-full bg-navy-600/40 blur-[110px]"
        aria-hidden
      />

      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={600}
        height={585}
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-6%] h-136 w-auto -translate-y-1/2 opacity-[0.07] mix-blend-screen sm:right-[-2%] lg:right-[4%]"
      />

      <HeroSwiper />
    </section>
  );
}

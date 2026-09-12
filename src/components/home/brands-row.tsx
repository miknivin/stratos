import Image from "next/image";
import { Container } from "@/components/ui/container";
import { brandLogos } from "@/lib/brands-data";

export function BrandsRow() {
  return (
    <section className="border-b border-ink-900/8 bg-mist-50 py-12">
      <Container>
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-mist-500 uppercase">
          Technology partners we work with
        </p>
      </Container>

      <div className="relative mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex shrink-0 items-center gap-16" aria-hidden={pass === 1}>
              {brandLogos.map((brand) => (
                <Image
                  key={`${pass}-${brand.name}`}
                  src={`/images/brands/${brand.file}`}
                  alt={pass === 0 ? brand.name : ""}
                  width={brand.width}
                  height={brand.height}
                  className="h-9 w-auto shrink-0 object-contain grayscale opacity-60 transition-all duration-200 hover:grayscale-0 hover:opacity-100 sm:h-11"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

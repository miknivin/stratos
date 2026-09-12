import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

const blocks = [
  {
    image: "/images/about-who-we-are.jpg",
    imageAlt: "Stratos Info Tech team collaborating",
    eyebrow: "Who we are",
    title: "A full-service technology partner headquartered in Abu Dhabi",
    paragraphs: [
      "STRATOS INFO TECH is a leading information technology company headquartered in Abu Dhabi, United Arab Emirates. We specialize in delivering a comprehensive range of IT and security solutions tailored to modern enterprises.",
      "Our expertise spans wholesale distribution of advanced hardware, as well as cutting-edge cybersecurity, cloud, and AI services. By partnering with top manufacturers and leveraging industry best practices, we've built a reputation for quality and customer satisfaction, and as organizations worldwide increase their cybersecurity investments, we're well positioned to meet this growing demand with reliable solutions.",
    ],
  },
  {
    image: "/images/about-our-goals.jpg",
    imageAlt: "Stratos Info Tech engineer securing a network",
    eyebrow: "Our goals",
    title: "Innovation, excellence and integrity in every engagement",
    paragraphs: [
      "We are driven by a commitment to innovation, excellence, and integrity, and we strive to empower businesses by aligning technology with their strategic needs.",
      "Our goal is to foster long-term partnerships through creative problem-solving, disciplined execution, and the highest standards of service, maintaining strict quality control and a customer-focused approach in every project we take on.",
    ],
  },
];

export function CompanyStory() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-20">
        {blocks.map((block, index) => (
          <Reveal key={block.eyebrow}>
            <div
              className={
                index % 2 === 1
                  ? "flex flex-col-reverse gap-10 lg:flex-row-reverse lg:items-center lg:gap-16"
                  : "flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"
              }
            >
              <div className="flex-1">
                <Eyebrow>{block.eyebrow}</Eyebrow>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
                  {block.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="text-base leading-relaxed text-pretty text-mist-500 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="group flex-1">
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-ink-900/8">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

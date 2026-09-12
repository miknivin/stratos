import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const items = [
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.country}`,
    href: `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.mapQuery)}`,
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-3/2 overflow-hidden rounded-2xl border border-ink-900/8">
        <Image
          src="/images/contact-office.jpg"
          alt="Stratos Info Tech office"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.icon === MapPin ? "_blank" : undefined}
              rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-2xl border border-ink-900/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/25 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-[0.12em] text-mist-500 uppercase">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm font-medium text-ink-900 group-hover:text-brand-700">
                  {item.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="overflow-hidden rounded-2xl border border-ink-900/8">
        <iframe
          title="Stratos Info Tech location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            siteConfig.address.mapQuery,
          )}&output=embed`}
          width="100%"
          height="260"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </div>
    </div>
  );
}

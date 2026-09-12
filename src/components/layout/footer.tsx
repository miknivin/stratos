import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-navy-950">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <Image
              src="/brand/logo-dark.png"
              alt={siteConfig.name}
              width={960}
              height={262}
              className="h-8 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
            <p dir="rtl" className="text-sm text-white/35">
              {siteConfig.arabicName}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-start gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Abu Dhabi, United Arab Emirates
          </p>
        </div>
      </Container>
    </footer>
  );
}

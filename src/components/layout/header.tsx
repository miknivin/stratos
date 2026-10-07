"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/services-data";
import { cn } from "@/lib/cn";

type OpenMenu = "services" | null;

export function Header() {
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [activeCategory, setActiveCategory] = useState(
    serviceCategories[0].slug,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Close desktop dropdowns on outside click or Escape.
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeCategoryData =
    serviceCategories.find((c) => c.slug === activeCategory) ??
    serviceCategories[0];

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-navy-900/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/brand/logo-dark.png"
            alt={siteConfig.name}
            width={960}
            height={262}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav
          ref={navRef}
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          <NavLink href="/" label="Home" pathname={pathname} exact />
          <NavLink href="/about" label="About" pathname={pathname} />

          {/* Services mega menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenMenu((m) => (m === "services" ? null : "services"))
              }
              aria-expanded={openMenu === "services"}
              aria-controls="services-menu-panel"
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
                pathname.startsWith("/services")
                  ? "text-white"
                  : "text-white/65 hover:text-white",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  openMenu === "services" && "rotate-180",
                )}
              />
            </button>

            {openMenu === "services" ? (
              <div
                id="services-menu-panel"
                className="absolute top-full left-1/2 z-50 mt-3 w-2xl -translate-x-1/2 overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-2xl shadow-ink-900/20"
              >
                <div className="grid grid-cols-[1fr_1.3fr] divide-x divide-ink-900/8">
                  <ul className="max-h-96 overflow-y-auto p-2">
                    {serviceCategories.map((category) => (
                      <li key={category.slug}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(category.slug)}
                          onMouseEnter={() => setActiveCategory(category.slug)}
                          aria-current={
                            category.slug === activeCategory
                              ? "true"
                              : undefined
                          }
                          className={cn(
                            "flex w-full items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                            category.slug === activeCategory
                              ? "bg-ink-900/4 text-ink-900"
                              : "text-mist-500 hover:bg-ink-900/3 hover:text-ink-900",
                          )}
                        >
                          <span className="flex items-center gap-2.5">
                            <category.icon className="h-4 w-4 shrink-0 text-brand-600" />
                            {category.shortName}
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="max-h-96 overflow-y-auto p-5">
                    <Link
                      href={`/services/${activeCategoryData.slug}`}
                      className="rounded text-sm font-semibold text-ink-900 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      {activeCategoryData.name}
                      <span className="ml-1.5 text-xs font-medium text-brand-700">
                        View category &rarr;
                      </span>
                    </Link>
                    <ul className="mt-3 grid grid-cols-1 gap-0.5">
                      {activeCategoryData.navItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-2 py-1.5 text-sm text-mist-500 transition-colors hover:bg-ink-900/3 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-ink-900/8 bg-mist-50 px-5 py-3">
                  <Link
                    href="/services"
                    className="rounded text-sm font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    View all services &rarr;
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          <NavLink href="/products" label="Products" pathname={pathname} />
          <NavLink href="/brands" label="Brands" pathname={pathname} />
          <NavLink href="/contact" label="Contact" pathname={pathname} />
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Talk to an IT Expert
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile accordion menu */}
      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-white/8 bg-navy-900/98 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out md:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-y-auto">
          <Container className="flex flex-col gap-1 py-4">
            <MobileLink href="/" label="Home" pathname={pathname} exact />
            <MobileLink href="/about" label="About" pathname={pathname} />

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-panel"
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileServicesOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                id="mobile-services-panel"
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows] duration-300",
                  mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 pl-3">
                  {serviceCategories.map((category) => {
                    const expanded = mobileCategory === category.slug;
                    return (
                      <div key={category.slug} className="border-l border-white/10 pl-3">
                        <div className="flex items-center">
                          <Link
                            href={`/services/${category.slug}`}
                            className="flex-1 rounded-lg px-2 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                          >
                            {category.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() =>
                              setMobileCategory(expanded ? null : category.slug)
                            }
                            aria-expanded={expanded}
                            aria-controls={`mobile-category-${category.slug}`}
                            aria-label={`${expanded ? "Collapse" : "Expand"} ${category.name} submenu`}
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                          >
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                expanded && "rotate-180",
                              )}
                            />
                          </button>
                        </div>
                        <div
                          id={`mobile-category-${category.slug}`}
                          className={cn(
                            "grid overflow-hidden transition-[grid-template-rows] duration-300",
                            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                          )}
                        >
                          <div className="min-h-0 pb-1 pl-2">
                            {category.navItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-lg px-2 py-1.5 text-sm text-white/55 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    href="/services"
                    className="mt-1 block rounded-lg px-2 py-2 text-sm font-semibold text-brand-300 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                  >
                    View all services &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {navLinks
              .filter((l) => l.href !== "/" && l.href !== "/about")
              .map((link) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                />
              ))}

            <Button href="/contact" className="mt-2">
              Talk to an IT Expert
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  label,
  pathname,
  exact = false,
}: {
  href: string;
  label: string;
  pathname: string;
  exact?: boolean;
}) {
  const active = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
        "after:absolute after:right-4 after:bottom-1 after:left-4 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-brand after:transition-transform after:duration-300 hover:after:scale-x-100",
        active ? "text-white after:scale-x-100" : "text-white/65 hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  pathname,
  exact = false,
}: {
  href: string;
  label: string;
  pathname: string;
  exact?: boolean;
}) {
  const active = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
        active ? "bg-white/8 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}

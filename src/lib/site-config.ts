export const siteConfig = {
  name: "Stratos Info Tech",
  legalName: "Stratos Info Tech",
  arabicName: "ستراتوس لتقنية المعلومات",
  tagline: "Integrated IT solutions and hardware distribution for the UAE",
  description:
    "STRATOS INFO TECH provides integrated IT solutions, infrastructure, cloud, cybersecurity, AI and hardware supply for businesses across the UAE.",
  url: "https://www.stratosinfotec.com",
  ogImage: "/opengraph-image",
  email: "info@stratosinfotec.com",
  contactEmail: "suhail@stratosinfotec.com",
  phone: "+971 50 990 6093",
  phoneHref: "+971509906093",
  address: {
    line1: "No 37A, Al Mafraq Industrial",
    line2: "Abu Dhabi City, Abu Dhabi, 1111",
    country: "United Arab Emirates",
    mapQuery: "Al Mafraq Industrial, Abu Dhabi, United Arab Emirates",
  },
  social: {
    // No public social profiles supplied yet.
  },
} as const;

/** Simple top-level links shown alongside the Services/Products menus. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Contact", href: "/contact" },
] as const;

export const productCategories = [
  {
    slug: "spare-parts-equipment",
    title: "Spare Parts & Equipment",
    description:
      "Source electronic and mechanical components and specialist machinery parts for maintenance and upgrades. Product examples include routers, switches, circuit boards and sensors.",
  },
  {
    slug: "alarm-monitoring",
    title: "Alarm & Monitoring Devices",
    description:
      "Explore alarm sensors, surveillance cameras, monitors and control panels for site and system monitoring requirements.",
  },
  {
    slug: "astronomical-instruments",
    title: "Astronomical Instruments & Accessories",
    description:
      "Source telescopes, mounts, optics and related accessories for research, educational and specialist applications.",
  },
  {
    slug: "smart-systems",
    title: "Smart Systems",
    description:
      "Explore IoT devices, sensors and controllers for integrated building functions such as lighting, HVAC and access control.",
  },
  {
    slug: "encryption-equipment",
    title: "Encryption Equipment",
    description:
      "Discuss encryption devices, secure routers and cryptographic modules for data protection and secure communications.",
  },
] as const;

/** "Our values" — used on the About page. */
export const values = [
  {
    title: "Innovation",
    description: "Explore technology that solves a real business need.",
  },
  {
    title: "Excellence",
    description: "Apply care and discipline to design and delivery.",
  },
  {
    title: "Integrity",
    description: "Give clear advice and define expectations honestly.",
  },
  {
    title: "Partnership",
    description:
      "Build working relationships around your long-term priorities.",
  },
] as const;

/** "Why STRATOS" — used on the homepage (distinct from the About page values). */
export const whyStratos = [
  {
    title: "Connected expertise",
    description:
      "Bring hardware, infrastructure and specialist IT services into one coordinated plan.",
  },
  {
    title: "Business-led recommendations",
    description:
      "Choose technology around your priorities, existing systems and budget.",
  },
  {
    title: "Experienced delivery",
    description:
      "Work with consultants and engineers who tailor solutions to your requirements.",
  },
  {
    title: "Local understanding",
    description:
      "Discuss your project with an Abu Dhabi-based team serving UAE businesses.",
  },
] as const;

/** Homepage delivery-approach steps. */
export const deliveryProcess = [
  {
    title: "Understand",
    description: "Review your operations and current technology.",
  },
  {
    title: "Plan",
    description: "Define priorities, architecture and a practical scope.",
  },
  {
    title: "Implement",
    description: "Deploy and integrate the agreed solution.",
  },
  {
    title: "Support",
    description:
      "Maintain and improve the environment within your selected service agreement.",
  },
] as const;

/** Category-overview-page process steps (distinct labels from the homepage version). */
export const categoryProcess = [
  {
    title: "Assess",
    description: "Review your current environment and requirements.",
  },
  {
    title: "Design",
    description: "Define the right architecture and scope.",
  },
  {
    title: "Implement",
    description: "Deploy and integrate the agreed solution.",
  },
  {
    title: "Support",
    description:
      "Maintain and improve the environment within your selected service agreement.",
  },
] as const;

export const serviceDelivery = {
  heading: "From Requirement to Working Solution",
  body: "We review your requirements and existing environment, define the appropriate scope, implement the agreed solution and document the handover. Ongoing support is arranged according to your selected service agreement.",
} as const;

export const serviceFaqs = [
  {
    question: "Can this solution work with our existing systems?",
    answer:
      "We assess your current environment before recommending integration, migration or replacement.",
  },
  {
    question: "What does the project include?",
    answer:
      "Scope, delivery stages, support arrangements and commercial terms are defined in your proposal.",
  },
] as const;

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  image: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Total IT Solutions",
    headline: "Complete IT Solutions. One Connected Partner.",
    body: "From infrastructure and cloud to cybersecurity, AI and business systems, STRATOS brings experienced consultants and engineers together to support your technology needs across the UAE.",
    primaryLabel: "Explore Our Services",
    primaryHref: "/services",
    image: "/images/hero-visual.jpg",
    alt: "STRATOS Info Tech technology dashboard overview",
  },
  {
    eyebrow: "Infrastructure & Network",
    headline: "Build the IT Foundation Your Business Needs.",
    body: "Connect your people, applications and locations with infrastructure and network solutions designed by experienced professionals around performance, reliability and future growth.",
    primaryLabel: "Explore Infrastructure",
    primaryHref: "/services/infrastructure-networking",
    image: "/images/hero-visual-2.jpg",
    alt: "STRATOS Info Tech infrastructure and network planning",
  },
  {
    eyebrow: "Cloud & Business Continuity",
    headline: "Move Forward with a Cloud That Works for You.",
    body: "From readiness assessment and migration to workload management and recovery planning, our team helps you build a practical cloud environment for your business.",
    primaryLabel: "Explore Cloud Solutions",
    primaryHref: "/services/cloud-aws",
    image: "/images/hero-visual-3.jpg",
    alt: "STRATOS Info Tech cloud environment planning",
  },
  {
    eyebrow: "AI, Data & Applications",
    headline: "Turn Technology into Smarter Business.",
    body: "Use AI, analytics and connected applications to simplify workflows, understand your data and make better decisions, with solutions shaped around your business priorities.",
    primaryLabel: "Explore AI & Data",
    primaryHref: "/services/ai-data-applications",
    image: "/images/hero-visual.jpg",
    alt: "STRATOS Info Tech data and automation dashboard",
  },
  {
    eyebrow: "Collaboration & Smart Systems",
    headline: "Connect Your Workplace. Simplify Your Operations.",
    body: "Bring collaboration spaces, smart systems and physical security together with an experienced technology team, supporting how your people work and how your premises operate.",
    primaryLabel: "Explore Workplace Solutions",
    primaryHref: "/services/av-collaboration",
    image: "/images/hero-visual-2.jpg",
    alt: "STRATOS Info Tech workplace and collaboration technology",
  },
];

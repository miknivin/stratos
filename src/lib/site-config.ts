export const siteConfig = {
  name: "Stratos Info Tech",
  legalName: "Stratos Info Tech",
  arabicName: "ستراتوس لتقنية المعلومات",
  tagline: "Cybersecurity, cloud and IT solutions for modern enterprises",
  description:
    "Stratos Info Tech is an Abu Dhabi based information technology company delivering cybersecurity, cloud, AI and network solutions for modern enterprises across the UAE.",
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

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  {
    value: "$212B",
    label: "Projected global cybersecurity spend by 2025",
  },
  {
    value: "72%",
    label: "Of businesses were hit by ransomware in 2023",
  },
  {
    value: "92%",
    label: "Of companies now run on cloud-based services",
  },
  {
    value: "$15.7T",
    label: "Potential AI contribution to the global economy by 2030",
  },
] as const;

export const productCategories = [
  {
    title: "Spare Parts & Equipment",
    description:
      "Electronic and mechanical components, and specialized machinery parts including routers, switches, circuit boards and sensors.",
  },
  {
    title: "Alarm & Monitoring Devices",
    description:
      "Alarm sensors, surveillance cameras, monitors and control panels that detect intrusions, hazards and system failures in real time.",
  },
  {
    title: "Astronomical Instruments",
    description:
      "Precision telescopes, mounts, optics and accessories sourced for observatories, universities and research institutions.",
  },
  {
    title: "Smart Systems",
    description:
      "Integrated smart building and automation systems, including IoT devices, sensors and controllers for lighting, HVAC and access control.",
  },
  {
    title: "Encryption Equipment",
    description:
      "Specialized hardware for data encryption and secure communications, including secure routers and cryptographic modules.",
  },
] as const;

export const values = [
  {
    title: "Innovation",
    description:
      "We invest in emerging technology and creative problem-solving to keep clients ahead of evolving threats and opportunities.",
  },
  {
    title: "Excellence",
    description:
      "Strict quality control and disciplined execution guide every engagement, from a single audit to a full architecture rollout.",
  },
  {
    title: "Integrity",
    description:
      "We give clients a clear, honest view of their risk posture so decisions are made on evidence, not assumptions.",
  },
  {
    title: "Partnership",
    description:
      "We aim for long-term relationships, aligning technology roadmaps with strategic business needs rather than one-off projects.",
  },
] as const;

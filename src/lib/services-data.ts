import {
  SearchCheck,
  Layers,
  Compass,
  ShieldCheck,
  Database,
  BrainCircuit,
  Network,
  Cloud,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string[];
  features: string[];
  icon: LucideIcon;
  stat?: { value: string; label: string };
};

export const services: Service[] = [
  {
    slug: "cyber-risk-auditing",
    title: "Auditing, Reviewing & Testing Cyber Risks",
    shortTitle: "Cyber Risk Auditing",
    summary:
      "Security audits, penetration testing and vulnerability assessments that expose weaknesses before attackers do.",
    description: [
      "We perform thorough security audits, penetration testing, and vulnerability assessments to identify weaknesses in systems, networks, and processes.",
      "Our experts use industry-standard tools and best practices to simulate real-world attacks and review configurations across your environment.",
      "The results give your team a clear, prioritized view of exposure so vulnerabilities can be remediated before they are exploited.",
    ],
    features: [
      "Penetration testing across networks, applications and infrastructure",
      "Vulnerability assessments benchmarked against industry standards",
      "Configuration reviews to catch misconfigurations and policy gaps",
      "Prioritized remediation reporting for technical and leadership teams",
    ],
    icon: SearchCheck,
    stat: { value: "72%", label: "of businesses were hit by ransomware in 2023" },
  },
  {
    slug: "cyber-security-architecture",
    title: "Cyber Security Architecture",
    shortTitle: "Security Architecture",
    summary:
      "Multi-layered defenses, including firewalls, IDS/IPS, secure network design and encryption, built around your infrastructure.",
    description: [
      "Our team designs robust security architectures and frameworks tailored to how your organization actually operates.",
      "We implement multi-layered defenses including firewalls, intrusion detection and prevention, secure network design, endpoint protection, and encryption schemes.",
      "Every architecture is tailored to the organization's infrastructure and compliance needs, not delivered as a generic template.",
    ],
    features: [
      "Multi-layered network and perimeter defense design",
      "Intrusion detection and prevention systems (IDS/IPS)",
      "Endpoint protection and secure network segmentation",
      "Encryption schemes aligned to compliance requirements",
    ],
    icon: Layers,
  },
  {
    slug: "it-consultancy",
    title: "Information Technology Consultancy",
    shortTitle: "IT Consultancy",
    summary:
      "Strategic IT roadmaps that align infrastructure, integration and cloud adoption with business objectives.",
    description: [
      "Stratos offers strategic IT consulting to optimize your organization's technology roadmap.",
      "We advise on IT infrastructure planning, system integration, digital transformation, and cloud adoption.",
      "Our consultants work directly with leadership to align IT investments with business objectives, ensuring systems remain scalable and cost-effective.",
    ],
    features: [
      "IT infrastructure planning and technology roadmaps",
      "System integration and digital transformation advisory",
      "Cloud adoption strategy aligned to business goals",
      "Investment planning for scalable, cost-effective systems",
    ],
    icon: Compass,
  },
  {
    slug: "cyber-security-consultancy",
    title: "Cyber Security Consultancy",
    shortTitle: "Security Consultancy",
    summary:
      "Boardroom-level guidance on security policy, incident response and compliance, built into your business strategy.",
    description: [
      "We provide expert guidance on all aspects of information security, from technical controls to organizational policy.",
      "Our consultants help organizations develop security policies, incident response plans, and compliance programs.",
      "Recognizing that cybersecurity is now a boardroom-level priority, we ensure security considerations are integrated into overall business strategy, not treated as an afterthought.",
    ],
    features: [
      "Security policy and governance development",
      "Incident response planning and readiness",
      "Compliance program design and support",
      "Executive-level risk advisory and reporting",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "data-management-security",
    title: "Data Management & Cyber Security Services",
    shortTitle: "Data Management & Security",
    summary:
      "Secure database implementation, backup and recovery, access control and encryption to keep data safe and compliant.",
    description: [
      "We help organizations collect, store, and protect their data throughout its lifecycle.",
      "Services include secure database implementation, backup and recovery planning, access control, and data encryption.",
      "By combining strong data management with security best practices, we help ensure data integrity and compliance with regulations.",
    ],
    features: [
      "Secure database implementation and administration",
      "Backup and disaster recovery planning",
      "Access control and identity governance",
      "Data encryption at rest and in transit",
    ],
    icon: Database,
  },
  {
    slug: "ai-development",
    title: "Artificial Intelligence Development Services",
    shortTitle: "AI Development",
    summary:
      "Custom AI and machine learning solutions for predictive insight, process automation and decision support.",
    description: [
      "Our team develops custom AI and machine learning solutions to drive innovation across your operations.",
      "We design algorithms and analytics tools for predictive insights, process automation, and decision support.",
      "AI-powered services from Stratos help clients enhance efficiency and unlock new opportunities. Industry studies estimate AI could add $15.7 trillion to the global economy by 2030.",
    ],
    features: [
      "Custom machine learning model development",
      "Predictive analytics and decision-support tools",
      "Process automation powered by AI",
      "Integration of AI capabilities into existing systems",
    ],
    icon: BrainCircuit,
    stat: { value: "$15.7T", label: "potential AI contribution to the global economy by 2030" },
  },
  {
    slug: "network-services",
    title: "Information Technology Network Services",
    shortTitle: "Network Services",
    summary:
      "Enterprise network design, installation and maintenance, covering LAN/WAN, wireless, VPNs and performance tuning.",
    description: [
      "We design, install, and maintain enterprise network infrastructures built to keep growing organizations connected.",
      "Our services include LAN/WAN setup, wireless networking, VPNs, and network performance optimization.",
      "We ensure reliable, secure connectivity so employees and applications remain seamlessly connected, wherever they work.",
    ],
    features: [
      "LAN/WAN design, installation and maintenance",
      "Enterprise wireless network deployment",
      "Site-to-site and remote-access VPNs",
      "Network performance monitoring and optimization",
    ],
    icon: Network,
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing Services",
    shortTitle: "Cloud Computing",
    summary:
      "End-to-end cloud readiness, migration and managed hosting that improve scalability while reducing IT overhead.",
    description: [
      "We provide end-to-end cloud solutions, including cloud readiness assessment, migration, and managed cloud hosting.",
      "By leveraging cloud platforms, clients gain scalability, flexibility, and cost savings. 92% of companies now use cloud-based services to take advantage of accessible data and collaborative tools.",
      "Stratos helps businesses migrate to the cloud smoothly and securely, improving productivity and reducing IT overhead.",
    ],
    features: [
      "Cloud readiness assessment and planning",
      "Migration of workloads and infrastructure to the cloud",
      "Managed cloud hosting and ongoing support",
      "Cost and performance optimization post-migration",
    ],
    icon: Cloud,
    stat: { value: "92%", label: "of companies now use cloud-based services" },
  },
  {
    slug: "cyber-risk-management",
    title: "Cyber Risk Management Services",
    shortTitle: "Cyber Risk Management",
    summary:
      "Risk management frameworks that identify, evaluate and mitigate cyber threats to protect critical assets.",
    description: [
      "Stratos implements risk management frameworks to identify, evaluate, and mitigate cyber threats across your organization.",
      "We help clients develop security policies, conduct regular risk assessments, and establish business continuity plans.",
      "Effective risk management is critical: a record 72% of businesses were hit by ransomware in 2023, and global cybercrime damages are projected to reach $10.5 trillion by 2025. Our services aim to reduce such risks and protect your organization's critical assets.",
    ],
    features: [
      "Cyber risk identification and evaluation frameworks",
      "Regular, structured risk assessments",
      "Business continuity and resilience planning",
      "Ongoing monitoring to reduce critical-asset exposure",
    ],
    icon: ShieldAlert,
    stat: { value: "$10.5T", label: "projected global cybercrime damages by 2025" },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

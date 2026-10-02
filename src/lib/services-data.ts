import {
  Server,
  Network,
  Cloud,
  CloudCog,
  ShieldCheck,
  SearchCheck,
  Layers,
  ShieldAlert,
  BrainCircuit,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  LayoutGrid,
  Palette,
  Megaphone,
  MonitorPlay,
  Cctv,
  SquareParking,
  KeyRound,
  Building2,
  Compass,
  Wrench,
  Headset,
  type LucideIcon,
} from "lucide-react";

export type ScopeItem = {
  id: string;
  title: string;
  description: string;
};

export type ServicePage = {
  slug: string;
  categorySlug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string[];
  scope: ScopeItem[];
  icon: LucideIcon;
  /**
   * Reference-derived pages (Website Development, Web Applications, Mobile
   * Applications, Graphic Design, Digital Marketing) are fully drafted but
   * excluded from navigation, category listings and the sitemap until
   * STRATOS confirms delivery scope. The pages themselves still build so
   * content is ready to switch on.
   */
  approved: boolean;
};

export type NavSubItem = { label: string; href: string };

export type ServiceCategory = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  intro: string;
  outcomes: string[];
  /** Curated flat list shown in the Services mega menu for this category. */
  navItems: NavSubItem[];
  pages: ServicePage[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "infrastructure-networking",
    name: "Infrastructure & Networking",
    shortName: "Infrastructure",
    icon: Server,
    intro:
      "Create a dependable foundation for your business with integrated infrastructure, network and workplace technology. STRATOS helps you plan, connect and maintain the systems your people use every day.",
    outcomes: [
      "Reliable connectivity",
      "Capacity for growth",
      "Simpler infrastructure coordination",
    ],
    navItems: [
      { label: "IT Infrastructure", href: "/services/it-infrastructure" },
      { label: "Network Services", href: "/services/network-services" },
      {
        label: "Servers, Backup & Storage",
        href: "/services/it-infrastructure#servers-backup-storage",
      },
      {
        label: "Enterprise Software",
        href: "/services/it-infrastructure#enterprise-software",
      },
      {
        label: "End-User Devices",
        href: "/services/it-infrastructure#end-user-devices",
      },
    ],
    pages: [
      {
        slug: "it-infrastructure",
        categorySlug: "infrastructure-networking",
        title: "IT Infrastructure",
        shortTitle: "IT Infrastructure",
        summary:
          "Build an IT environment around your operational needs, from core hardware and business software to system integration and expansion planning.",
        intro: [
          "Build an IT environment around your operational needs, from core hardware and business software to system integration and expansion planning.",
        ],
        scope: [
          {
            id: "servers-backup-storage",
            title: "Servers, Backup and Storage",
            description:
              "Support business workloads with suitable compute, protected storage and recovery planning.",
          },
          {
            id: "enterprise-software",
            title: "Enterprise Software (ERP, ITSM, ITAM)",
            description:
              "Connect business processes, service workflows and asset records through appropriately selected systems.",
          },
          {
            id: "end-user-devices",
            title: "End-User Devices",
            description:
              "Source and configure laptops, desktops, hard drives and printers for workplace requirements.",
          },
        ],
        icon: Server,
        approved: true,
      },
      {
        slug: "network-services",
        categorySlug: "infrastructure-networking",
        title: "Network Services",
        shortTitle: "Network Services",
        summary:
          "Enterprise network design, installation and maintenance that keeps people, locations and applications connected.",
        intro: [
          "STRATOS designs, installs and maintains enterprise networks to keep your people, locations and applications connected. We review coverage, capacity and security requirements before proposing the right network setup.",
        ],
        scope: [
          {
            id: "lan-wan",
            title: "LAN and WAN",
            description: "Connect office and multi-location systems.",
          },
          {
            id: "wifi",
            title: "Wireless Networking",
            description: "Plan coverage and capacity for productive access.",
          },
          {
            id: "vpn",
            title: "VPN and Remote Connectivity",
            description: "Enable controlled access to business resources.",
          },
          {
            id: "optimisation",
            title: "Network Optimisation",
            description:
              "Review performance and address connectivity bottlenecks.",
          },
        ],
        icon: Network,
        approved: true,
      },
    ],
  },
  {
    slug: "cloud-aws",
    name: "Cloud & AWS",
    shortName: "Cloud",
    icon: Cloud,
    intro:
      "Build a cloud environment that matches your workloads, growth plans and operating requirements. STRATOS connects assessment, migration, operations and protection in one practical cloud strategy.",
    outcomes: [
      "Flexible capacity",
      "Clearer workload planning",
      "Better visibility of cloud operations",
    ],
    navItems: [
      { label: "Cloud Computing", href: "/services/cloud-computing" },
      { label: "AWS Solutions", href: "/services/aws-solutions" },
    ],
    pages: [
      {
        slug: "cloud-computing",
        categorySlug: "cloud-aws",
        title: "Cloud Computing Services",
        shortTitle: "Cloud Computing",
        summary:
          "Move applications, data and workloads to a cloud model that suits your business.",
        intro: [
          "Move applications, data and workloads to a cloud model that suits your business. STRATOS helps assess readiness, plan migration and manage the transition with attention to continuity and access.",
        ],
        scope: [
          {
            id: "assessment",
            title: "Cloud Assessment and Planning",
            description: "Review workloads and define the target environment.",
          },
          {
            id: "migration",
            title: "Migration and Deployment",
            description: "Plan and implement the move in agreed stages.",
          },
          {
            id: "operations",
            title: "Infrastructure Operations",
            description: "Coordinate ongoing cloud administration.",
          },
          {
            id: "monitoring",
            title: "Cloud Monitoring",
            description:
              "Track service health within the agreed support scope.",
          },
          {
            id: "cost",
            title: "Cost Optimisation",
            description: "Review usage and resource allocation.",
          },
          {
            id: "support",
            title: "Cloud Support",
            description:
              "Arrange technical assistance under the selected agreement.",
          },
        ],
        icon: Cloud,
        approved: true,
      },
      {
        slug: "aws-solutions",
        categorySlug: "cloud-aws",
        title: "AWS Solutions",
        shortTitle: "AWS Solutions",
        summary:
          "Plan, migrate and manage business workloads on Amazon Web Services with a solution designed around your requirements.",
        intro: [
          "Plan, migrate and manage business workloads on Amazon Web Services with a solution designed around your requirements. STRATOS brings together architecture planning, workload migration and application protection.",
        ],
        scope: [
          {
            id: "consulting",
            title: "AWS Consulting and Workloads",
            description: "Define requirements and a suitable deployment plan.",
          },
          {
            id: "vmware",
            title: "VMware Workload Migration to AWS",
            description:
              "Assess supported migration pathways and current platform availability before recommending a deployment.",
          },
          {
            id: "migration",
            title: "AWS Migration",
            description: "Move agreed workloads with a defined transition plan.",
          },
          {
            id: "application-security",
            title: "AWS Application Security",
            description:
              "Configure appropriate access and protection for applications.",
          },
        ],
        icon: CloudCog,
        approved: true,
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    icon: ShieldCheck,
    intro:
      "Protect your wider IT environment through coordinated security architecture, risk assessment and practical controls. STRATOS helps you understand exposure and prioritise improvements across networks, users, applications, cloud and data.",
    outcomes: [
      "Clearer risk priorities",
      "Coordinated protection",
      "Stronger recovery planning",
    ],
    navItems: [
      { label: "Cyber Risk Auditing", href: "/services/cyber-risk-auditing" },
      {
        label: "Security Architecture",
        href: "/services/cyber-security-architecture",
      },
      {
        label: "Security Consultancy",
        href: "/services/cyber-security-consultancy",
      },
      {
        label: "Cyber Risk Management",
        href: "/services/cyber-risk-management",
      },
      {
        label: "Cloud Security",
        href: "/services/cyber-security-architecture#cloud-security",
      },
      {
        label: "Application Security",
        href: "/services/cyber-security-architecture#application-security",
      },
      {
        label: "Network Monitoring",
        href: "/services/cyber-security-architecture#network-monitoring",
      },
      {
        label: "Identity Security",
        href: "/services/cyber-security-architecture#identity-security",
      },
      {
        label: "Data Security",
        href: "/services/data-management-security#data-security",
      },
      {
        label: "Zero Trust",
        href: "/services/cyber-security-architecture#zero-trust",
      },
      {
        label: "Email & Workspace Security",
        href: "/services/cyber-security-architecture#workspace-security",
      },
    ],
    pages: [
      {
        slug: "cyber-risk-auditing",
        categorySlug: "cybersecurity",
        title: "Auditing, Reviewing & Testing Cyber Risks",
        shortTitle: "Cyber Risk Auditing",
        summary:
          "Security audits, vulnerability assessments and authorised penetration testing that expose weaknesses before they affect your business.",
        intro: [
          "Identify weaknesses before they affect your business through security audits, vulnerability assessments and authorised penetration testing. Our findings help you prioritise remediation across systems, networks and processes.",
        ],
        scope: [
          {
            id: "audits",
            title: "Security Audits",
            description: "Review configurations and controls.",
          },
          {
            id: "vulnerabilities",
            title: "Vulnerability Assessments",
            description: "Identify and prioritise weaknesses.",
          },
          {
            id: "penetration-testing",
            title: "Penetration Testing",
            description: "Test only within explicitly authorised scope.",
          },
        ],
        icon: SearchCheck,
        approved: true,
      },
      {
        slug: "cyber-security-architecture",
        categorySlug: "cybersecurity",
        title: "Cyber Security Architecture",
        shortTitle: "Security Architecture",
        summary:
          "Layered protection designed around your existing infrastructure and business needs.",
        intro: [
          "Design layered protection around your existing infrastructure and business needs. STRATOS integrates network controls, endpoint protection, access management and encryption into a coherent security framework.",
        ],
        scope: [
          {
            id: "network-security",
            title: "Network Security and Firewalls",
            description:
              "Design and configure appropriate perimeter and internal controls.",
          },
          {
            id: "endpoint",
            title: "Endpoint Protection",
            description: "Protect business devices.",
          },
          {
            id: "ids-ips",
            title: "IDS and IPS",
            description:
              "Add detection and prevention controls where appropriate.",
          },
          {
            id: "cloud-security",
            title: "Cloud Security",
            description: "Protect cloud access and workloads.",
          },
          {
            id: "application-security",
            title: "Application Security",
            description: "Review application protections.",
          },
          {
            id: "network-monitoring",
            title: "Network Monitoring",
            description: "Improve visibility of network events.",
          },
          {
            id: "identity-security",
            title: "Identity Security",
            description: "Define access and authentication controls.",
          },
          {
            id: "zero-trust",
            title: "Zero Trust",
            description:
              "Apply least-privilege access and verification principles.",
          },
          {
            id: "workspace-security",
            title: "Email and Workspace Security",
            description:
              "Protect business communications and user environments.",
          },
        ],
        icon: Layers,
        approved: true,
      },
      {
        slug: "cyber-security-consultancy",
        categorySlug: "cybersecurity",
        title: "Cyber Security Consultancy",
        shortTitle: "Security Consultancy",
        summary:
          "Make information security part of your business planning, from policy to incident response.",
        intro: [
          "Make information security part of your business planning. STRATOS helps develop security policies, incident response plans and control priorities that reflect your organisation's risks and requirements.",
        ],
        scope: [
          {
            id: "policies",
            title: "Security Policies",
            description: "Define responsibilities and controls.",
          },
          {
            id: "incident-planning",
            title: "Incident Response Planning",
            description: "Prepare escalation and recovery procedures.",
          },
          {
            id: "compliance",
            title: "Compliance Planning",
            description:
              "Assess applicable obligations and improvement priorities.",
          },
        ],
        icon: ShieldCheck,
        approved: true,
      },
      {
        slug: "cyber-risk-management",
        categorySlug: "cybersecurity",
        title: "Cyber Risk Management Services",
        shortTitle: "Cyber Risk Management",
        summary:
          "Risk assessment practices and treatment planning that connect security with business continuity.",
        intro: [
          "Understand, evaluate and manage cyber risks to your critical assets. STRATOS helps establish risk assessment practices, prioritise treatment actions and connect security planning with business continuity.",
        ],
        scope: [
          {
            id: "risk-assessment",
            title: "Risk Assessment",
            description: "Identify and evaluate exposure.",
          },
          {
            id: "risk-treatment",
            title: "Risk Treatment",
            description: "Prioritise practical improvements.",
          },
          {
            id: "continuity",
            title: "Business Continuity",
            description: "Plan for operational disruption.",
          },
        ],
        icon: ShieldAlert,
        approved: true,
      },
    ],
  },
  {
    slug: "ai-data-applications",
    name: "AI, Data & Business Applications",
    shortName: "AI & Data",
    icon: BrainCircuit,
    intro:
      "Turn information and digital workflows into practical business value. STRATOS brings AI, data management, analytics and application solutions together around the way your organisation works.",
    outcomes: [
      "Less repetitive work",
      "Usable business insight",
      "Connected digital experiences",
    ],
    navItems: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "Big Data & Analytics", href: "/services/big-data-analytics" },
      {
        label: "Data Management",
        href: "/services/data-management-security",
      },
      { label: "Mobility Solutions", href: "/services/mobility-solutions" },
    ],
    pages: [
      {
        slug: "ai-development",
        categorySlug: "ai-data-applications",
        title: "Artificial Intelligence Development Services",
        shortTitle: "AI Development",
        summary:
          "AI and machine learning solutions developed around a defined business problem.",
        intro: [
          "Develop AI and machine learning solutions around a defined business problem. STRATOS helps turn data into predictive insights, automate suitable processes and support informed decisions.",
        ],
        scope: [
          {
            id: "predictive",
            title: "Predictive Analytics",
            description: "Explore patterns and forecasting use cases.",
          },
          {
            id: "vision",
            title: "Computer Vision",
            description: "Apply visual analysis to suitable workflows.",
          },
          {
            id: "nlp",
            title: "Natural Language Processing",
            description:
              "Analyse text and support conversational interfaces.",
          },
          {
            id: "automation",
            title: "RPA and Intelligent Automation",
            description: "Reduce repetitive tasks.",
          },
          {
            id: "ai-security",
            title: "AI in Cybersecurity",
            description: "Apply suitable analysis to security workflows.",
          },
          {
            id: "recommendations",
            title: "Recommendation Systems",
            description: "Support relevant personalised suggestions.",
          },
        ],
        icon: BrainCircuit,
        approved: true,
      },
      {
        slug: "big-data-analytics",
        categorySlug: "ai-data-applications",
        title: "Big Data & Analytics",
        shortTitle: "Big Data & Analytics",
        summary:
          "Bring business information together and make it easier to act on.",
        intro: [
          "Bring business information together and make it easier to act on. STRATOS helps organise data flows and present useful insights so teams can understand performance and make informed decisions.",
        ],
        scope: [
          {
            id: "consulting",
            title: "Big Data Consulting",
            description: "Define data priorities.",
          },
          {
            id: "integration",
            title: "Data Integration",
            description: "Connect relevant sources.",
          },
          {
            id: "realtime",
            title: "Real-Time Analytics",
            description: "Enable timely operational insight where needed.",
          },
          {
            id: "visualisation",
            title: "Data Visualisation",
            description: "Present information through clear dashboards.",
          },
          {
            id: "cloud-data",
            title: "Cloud-Based Data Solutions",
            description: "Plan scalable data environments.",
          },
          {
            id: "iot",
            title: "IoT Data",
            description: "Process relevant connected-device information.",
          },
        ],
        icon: BarChart3,
        approved: true,
      },
      {
        slug: "data-management-security",
        categorySlug: "ai-data-applications",
        title: "Data Management & Cyber Security Services",
        shortTitle: "Data Management & Security",
        summary:
          "Collect, store and protect business data through structured implementation and controls.",
        intro: [
          "Collect, store and protect business data through structured database implementation, access controls, encryption and backup planning. STRATOS helps preserve data integrity and support recovery requirements.",
        ],
        scope: [
          {
            id: "database",
            title: "Database Implementation",
            description: "Establish suitable data structures.",
          },
          {
            id: "backup",
            title: "Backup and Recovery",
            description: "Define protection and restoration plans.",
          },
          {
            id: "access",
            title: "Access Control",
            description: "Limit data access by role.",
          },
          {
            id: "data-security",
            title: "Data Security",
            description: "Apply encryption and appropriate handling controls.",
          },
        ],
        icon: Database,
        approved: true,
      },
      {
        slug: "mobility-solutions",
        categorySlug: "ai-data-applications",
        title: "Mobility Solutions",
        shortTitle: "Mobility Solutions",
        summary:
          "Enable your workforce to access the tools and information they need while working across locations.",
        intro: [
          "Enable your workforce to access the tools and information they need while working across locations. STRATOS helps plan secure mobile access, device management and integration with business systems.",
        ],
        scope: [
          {
            id: "mdm",
            title: "Mobile Device Management",
            description: "Coordinate enrolled business devices.",
          },
          {
            id: "access",
            title: "Secure Mobile Access",
            description: "Apply controlled access to business resources.",
          },
          {
            id: "workforce",
            title: "Workforce Mobility",
            description: "Connect remote and mobile workflows.",
          },
        ],
        icon: Smartphone,
        approved: true,
      },
      {
        slug: "website-development",
        categorySlug: "ai-data-applications",
        title: "Website Development",
        shortTitle: "Website Development",
        summary:
          "A clear, responsive business website that helps visitors understand your offering and contact your team.",
        intro: [
          "Create a clear, responsive business website that helps visitors understand your offering and contact your team. Plan content, navigation and functionality around your business goals.",
        ],
        scope: [
          {
            id: "planning",
            title: "Website Planning",
            description: "Define structure and visitor journeys.",
          },
          {
            id: "development",
            title: "Responsive Development",
            description: "Build for desktop and mobile.",
          },
          {
            id: "maintenance",
            title: "Launch and Maintenance",
            description: "Arrange launch checks and ongoing updates.",
          },
        ],
        icon: Globe,
        approved: false,
      },
      {
        slug: "web-applications",
        categorySlug: "ai-data-applications",
        title: "Web Applications",
        shortTitle: "Web Applications",
        summary:
          "Browser-based applications designed around your users and processes.",
        intro: [
          "Connect business workflows through browser-based applications designed around your users and processes. Define the required features, integrations and access controls before development.",
        ],
        scope: [
          {
            id: "portals",
            title: "Business Portals",
            description: "Connect users and information.",
          },
          {
            id: "workflows",
            title: "Workflow Applications",
            description: "Simplify agreed processes.",
          },
          {
            id: "integration",
            title: "System Integration",
            description: "Connect relevant business tools.",
          },
        ],
        icon: LayoutGrid,
        approved: false,
      },
      {
        slug: "mobile-applications",
        categorySlug: "ai-data-applications",
        title: "Mobile Applications",
        shortTitle: "Mobile Applications",
        summary:
          "Purpose-built mobile applications bringing business or customer workflows to mobile devices.",
        intro: [
          "Bring selected business or customer workflows to mobile devices through purpose-built applications. Plan usability, platform requirements and integration around the intended audience.",
        ],
        scope: [
          {
            id: "planning",
            title: "Application Planning",
            description: "Define users and features.",
          },
          {
            id: "development",
            title: "Mobile Development",
            description: "Build agreed platform functionality.",
          },
          {
            id: "support",
            title: "Integration and Support",
            description: "Connect systems and arrange maintenance.",
          },
        ],
        icon: Smartphone,
        approved: false,
      },
      {
        slug: "graphic-design",
        categorySlug: "ai-data-applications",
        title: "Graphic Design",
        shortTitle: "Graphic Design",
        summary:
          "Visual materials designed around your brand and audience, across digital and print.",
        intro: [
          "Communicate your business clearly through visual materials designed around your brand and audience. Align digital and print assets with the message you need to deliver.",
        ],
        scope: [
          {
            id: "assets",
            title: "Brand and Marketing Assets",
            description: "Prepare agreed visual materials.",
          },
          {
            id: "digital",
            title: "Digital Creatives",
            description: "Design assets for online channels.",
          },
          {
            id: "collateral",
            title: "Business Collateral",
            description: "Develop presentations and print-ready materials.",
          },
        ],
        icon: Palette,
        approved: false,
      },
      {
        slug: "digital-marketing",
        categorySlug: "ai-data-applications",
        title: "Digital Marketing",
        shortTitle: "Digital Marketing",
        summary:
          "A practical online marketing approach built around your audience and objectives.",
        intro: [
          "Build a practical online marketing approach around your audience, business objectives and available channels. Connect campaign planning, content and measurement to support informed improvements.",
        ],
        scope: [
          {
            id: "planning",
            title: "Campaign Planning",
            description: "Define audience and objectives.",
          },
          {
            id: "execution",
            title: "Content and Channel Execution",
            description: "Deliver the agreed channel scope.",
          },
          {
            id: "reporting",
            title: "Performance Reporting",
            description: "Review results against agreed measures.",
          },
        ],
        icon: Megaphone,
        approved: false,
      },
    ],
  },
  {
    slug: "av-collaboration",
    name: "AV & Collaboration",
    shortName: "AV & Collaboration",
    icon: MonitorPlay,
    intro:
      "Make communication easier through integrated audio visual systems for meeting rooms, offices and educational spaces. STRATOS helps select and connect technology around how each space will be used.",
    outcomes: [
      "Clearer communication",
      "Effective shared spaces",
      "Coordinated room technology",
    ],
    navItems: [
      {
        label: "Audio Visual Solutions",
        href: "/services/audio-visual-solutions",
      },
      {
        label: "Corporate AV",
        href: "/services/audio-visual-solutions#corporate-av",
      },
      {
        label: "Education AV",
        href: "/services/audio-visual-solutions#education-av",
      },
    ],
    pages: [
      {
        slug: "audio-visual-solutions",
        categorySlug: "av-collaboration",
        title: "Audio Visual Solutions",
        shortTitle: "Audio Visual Solutions",
        summary:
          "Displays, audio and conferencing tools brought together to support clear presentations and collaboration.",
        intro: [
          "Create spaces that support clear presentations and effective collaboration. Bring displays, audio and conferencing tools together in a practical solution matched to your environment.",
        ],
        scope: [
          {
            id: "corporate-av",
            title: "Corporate AV",
            description:
              "Plan smart displays and meeting-room collaboration systems.",
          },
          {
            id: "education-av",
            title: "Education AV",
            description:
              "Provide display and presentation technology for educational spaces. This is equipment integration, not training programmes.",
          },
          {
            id: "integration",
            title: "Installation and Integration",
            description:
              "Connect AV systems with existing IT and room requirements.",
          },
          {
            id: "support",
            title: "AV Support",
            description: "Arrange maintenance under the agreed scope.",
          },
        ],
        icon: MonitorPlay,
        approved: true,
      },
    ],
  },
  {
    slug: "smart-security",
    name: "Smart Systems & Physical Security",
    shortName: "Smart Systems",
    icon: Building2,
    intro:
      "Connect premises technology with your operational requirements. STRATOS brings surveillance, access, parking and smart building systems into a coordinated approach to visibility, control and convenience.",
    outcomes: [
      "Better site visibility",
      "Controlled access",
      "Easier premises management",
    ],
    navItems: [
      { label: "CCTV Surveillance", href: "/services/cctv-surveillance" },
      { label: "Parking Management", href: "/services/parking-management" },
      {
        label: "Access Control & Intercom",
        href: "/services/access-control-intercom",
      },
      {
        label: "Smart Building Systems",
        href: "/services/smart-building-systems",
      },
    ],
    pages: [
      {
        slug: "cctv-surveillance",
        categorySlug: "smart-security",
        title: "CCTV Surveillance",
        shortTitle: "CCTV Surveillance",
        summary:
          "Surveillance solutions designed around coverage, recording and access requirements.",
        intro: [
          "Improve visibility across your premises through surveillance solutions designed around coverage, recording and access requirements. Define the camera layout and system scope before installation.",
        ],
        scope: [
          {
            id: "planning",
            title: "Camera Planning",
            description: "Assess coverage requirements.",
          },
          {
            id: "monitoring",
            title: "Recording and Monitoring",
            description: "Select recording and viewing arrangements.",
          },
          {
            id: "support",
            title: "Integration and Maintenance",
            description: "Coordinate agreed integration and service needs.",
          },
        ],
        icon: Cctv,
        approved: true,
      },
      {
        slug: "parking-management",
        categorySlug: "smart-security",
        title: "Parking Management",
        shortTitle: "Parking Management",
        summary:
          "Organise vehicle access and parking operations with a system suited to your site.",
        intro: [
          "Organise vehicle access and parking operations with a system suited to your site. Plan entry and exit control, monitoring and management features around your operating requirements.",
        ],
        scope: [
          {
            id: "access",
            title: "Entry and Exit Control",
            description: "Manage authorised vehicle movement.",
          },
          {
            id: "operations",
            title: "Parking Operations",
            description: "Define the required management workflow.",
          },
          {
            id: "integration",
            title: "System Integration",
            description: "Connect suitable controls and monitoring systems.",
          },
        ],
        icon: SquareParking,
        approved: true,
      },
      {
        slug: "access-control-intercom",
        categorySlug: "smart-security",
        title: "Access Control & Intercom",
        shortTitle: "Access Control & Intercom",
        summary:
          "Manage entry to your premises and improve visitor communication through integrated systems.",
        intro: [
          "Manage entry to your premises and improve visitor communication through integrated access control and intercom systems. Select equipment and permissions around the site's users and security needs.",
        ],
        scope: [
          {
            id: "access",
            title: "Access Control",
            description: "Define credentials and access permissions.",
          },
          {
            id: "intercom",
            title: "Intercom Systems",
            description: "Support visitor communication.",
          },
          {
            id: "integration",
            title: "Integration",
            description:
              "Connect access and communication systems where appropriate.",
          },
        ],
        icon: KeyRound,
        approved: true,
      },
      {
        slug: "smart-building-systems",
        categorySlug: "smart-security",
        title: "Smart Building Systems",
        shortTitle: "Smart Building Systems",
        summary:
          "Connected devices, sensors and automation that improve control of your premises.",
        intro: [
          "Improve control of your premises through connected devices, sensors and automation systems. STRATOS helps bring lighting, HVAC and access functions into a practical smart-system plan.",
        ],
        scope: [
          {
            id: "iot",
            title: "IoT Devices and Sensors",
            description: "Source and integrate suitable connected components.",
          },
          {
            id: "automation",
            title: "Lighting and HVAC Automation",
            description: "Coordinate agreed control functions.",
          },
          {
            id: "access",
            title: "Smart Access",
            description: "Connect relevant building access technology.",
          },
        ],
        icon: Building2,
        approved: true,
      },
    ],
  },
  {
    slug: "consulting-managed-it",
    name: "Consulting & Managed IT",
    shortName: "IT Support",
    icon: Compass,
    intro:
      "Align technology decisions with your business and keep the agreed environment working effectively. STRATOS brings planning, operation, maintenance and lifecycle support together around your needs.",
    outcomes: [
      "Clearer IT priorities",
      "Organised maintenance",
      "Predictable support scope",
    ],
    navItems: [
      { label: "IT Consultancy", href: "/services/it-consultancy" },
      {
        label: "Operation & Maintenance",
        href: "/services/operation-maintenance",
      },
      { label: "Managed IT Support", href: "/services/managed-it-support" },
      {
        label: "Asset Lifecycle Management",
        href: "/services/operation-maintenance#asset-lifecycle",
      },
    ],
    pages: [
      {
        slug: "it-consultancy",
        categorySlug: "consulting-managed-it",
        title: "Information Technology Consultancy",
        shortTitle: "IT Consultancy",
        summary:
          "Make technology decisions with a clear view of your business priorities.",
        intro: [
          "Make technology decisions with a clear view of your business priorities. STRATOS advises on infrastructure planning, integration, digital transformation and cloud adoption to support an appropriate technology roadmap.",
        ],
        scope: [
          {
            id: "strategy",
            title: "IT Strategy",
            description: "Define business-aligned priorities.",
          },
          {
            id: "infrastructure",
            title: "Infrastructure Planning",
            description: "Assess capacity and architecture.",
          },
          {
            id: "integration",
            title: "System Integration",
            description: "Coordinate connected tools.",
          },
          {
            id: "transformation",
            title: "Digital Transformation",
            description: "Plan phased technology improvements.",
          },
        ],
        icon: Compass,
        approved: true,
      },
      {
        slug: "operation-maintenance",
        categorySlug: "consulting-managed-it",
        title: "Operation & Maintenance",
        shortTitle: "Operation & Maintenance",
        summary:
          "Maintain the health of business hardware, software and infrastructure through a matched service plan.",
        intro: [
          "Maintain the health of business hardware, software and infrastructure through a service plan matched to your environment. Combine scheduled upkeep, fault resolution and performance review within an agreed scope.",
        ],
        scope: [
          {
            id: "updates",
            title: "System Updates",
            description: "Coordinate patches and firmware changes.",
          },
          {
            id: "monitoring",
            title: "Proactive Monitoring",
            description: "Review service health under the agreed coverage.",
          },
          {
            id: "optimisation",
            title: "Performance Optimisation",
            description: "Address relevant bottlenecks.",
          },
          {
            id: "repairs",
            title: "Troubleshooting and Repairs",
            description: "Resolve supported technical issues.",
          },
          {
            id: "asset-lifecycle",
            title: "Asset Lifecycle Management",
            description:
              "Plan procurement, maintenance, refresh and appropriate disposal.",
          },
        ],
        icon: Wrench,
        approved: true,
      },
      {
        slug: "managed-it-support",
        categorySlug: "consulting-managed-it",
        title: "Managed IT Support",
        shortTitle: "Managed IT Support",
        summary:
          "Keep day-to-day technology support organised through an agreed service arrangement.",
        intro: [
          "Keep day-to-day technology support organised through an agreed service arrangement. Define supported systems, channels, escalation procedures and service coverage around your business requirements.",
        ],
        scope: [
          {
            id: "user-support",
            title: "User Support",
            description: "Assist with supported workplace issues.",
          },
          {
            id: "infrastructure",
            title: "Infrastructure Support",
            description: "Coordinate supported systems and networks.",
          },
          {
            id: "support-plan",
            title: "Support Planning",
            description:
              "Define coverage, priorities and escalation. Hours and response commitments are confirmed with each client.",
          },
        ],
        icon: Headset,
        approved: true,
      },
    ],
  },
];

export const allServicePages: ServicePage[] = serviceCategories.flatMap(
  (category) => category.pages,
);

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return allServicePages.find((page) => page.slug === slug);
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getCategoryForService(
  service: ServicePage,
): ServiceCategory | undefined {
  return getCategoryBySlug(service.categorySlug);
}

export function getRelatedServices(
  service: ServicePage,
  limit = 3,
): ServicePage[] {
  const category = getCategoryForService(service);
  if (!category) return [];
  return category.pages
    .filter((page) => page.slug !== service.slug && page.approved)
    .slice(0, limit);
}

/** Approved pages only — used for navigation, category listings and the sitemap. */
export function approvedPages(pages: ServicePage[]): ServicePage[] {
  return pages.filter((page) => page.approved);
}

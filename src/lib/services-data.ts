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
  HardDrive,
  Boxes,
  Laptop,
  Route,
  Wifi,
  Lock,
  Gauge,
  FileSearch,
  UploadCloud,
  ServerCog,
  Activity,
  PieChart,
  LifeBuoy,
  ClipboardList,
  GitBranch,
  ClipboardCheck,
  AlertTriangle,
  Target,
  MonitorSmartphone,
  Radar,
  FileCheck,
  Eye,
  Fingerprint,
  MailWarning,
  Siren,
  ListChecks,
  Repeat,
  LineChart,
  Scan,
  MessageSquare,
  Bot,
  Sparkles,
  Combine,
  FileBarChart,
  Antenna,
  Tablet,
  Users2,
  LayoutDashboard,
  Link2,
  FileText,
  Send,
  Projector,
  Camera,
  Video,
  ParkingCircle,
  SlidersHorizontal,
  PhoneCall,
  Lightbulb,
  DoorOpen,
  RefreshCw,
  Recycle,
  type LucideIcon,
} from "lucide-react";

export type ScopeItem = {
  id: string;
  title: string;
  description: string;
  /** Used by the illustrated scope cards and derived hero illustrations. */
  icon: LucideIcon;
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
            icon: HardDrive,
          },
          {
            id: "enterprise-software",
            title: "Enterprise Software (ERP, ITSM, ITAM)",
            description:
              "Connect business processes, service workflows and asset records through appropriately selected systems.",
            icon: Boxes,
          },
          {
            id: "end-user-devices",
            title: "End-User Devices",
            description:
              "Source and configure laptops, desktops, hard drives and printers for workplace requirements.",
            icon: Laptop,
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
            icon: Route,
          },
          {
            id: "wifi",
            title: "Wireless Networking",
            description: "Plan coverage and capacity for productive access.",
            icon: Wifi,
          },
          {
            id: "vpn",
            title: "VPN and Remote Connectivity",
            description: "Enable controlled access to business resources.",
            icon: Lock,
          },
          {
            id: "optimisation",
            title: "Network Optimisation",
            description:
              "Review performance and address connectivity bottlenecks.",
            icon: Gauge,
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
            icon: FileSearch,
          },
          {
            id: "migration",
            title: "Migration and Deployment",
            description: "Plan and implement the move in agreed stages.",
            icon: UploadCloud,
          },
          {
            id: "operations",
            title: "Infrastructure Operations",
            description: "Coordinate ongoing cloud administration.",
            icon: ServerCog,
          },
          {
            id: "monitoring",
            title: "Cloud Monitoring",
            description:
              "Track service health within the agreed support scope.",
            icon: Activity,
          },
          {
            id: "cost",
            title: "Cost Optimisation",
            description: "Review usage and resource allocation.",
            icon: PieChart,
          },
          {
            id: "support",
            title: "Cloud Support",
            description:
              "Arrange technical assistance under the selected agreement.",
            icon: LifeBuoy,
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
            icon: ClipboardList,
          },
          {
            id: "vmware",
            title: "VMware Workload Migration to AWS",
            description:
              "Assess supported migration pathways and current platform availability before recommending a deployment.",
            icon: GitBranch,
          },
          {
            id: "migration",
            title: "AWS Migration",
            description: "Move agreed workloads with a defined transition plan.",
            icon: UploadCloud,
          },
          {
            id: "application-security",
            title: "AWS Application Security",
            description:
              "Configure appropriate access and protection for applications.",
            icon: ShieldCheck,
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
            icon: ClipboardCheck,
          },
          {
            id: "vulnerabilities",
            title: "Vulnerability Assessments",
            description: "Identify and prioritise weaknesses.",
            icon: AlertTriangle,
          },
          {
            id: "penetration-testing",
            title: "Penetration Testing",
            description: "Test only within explicitly authorised scope.",
            icon: Target,
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
            icon: ShieldCheck,
          },
          {
            id: "endpoint",
            title: "Endpoint Protection",
            description: "Protect business devices.",
            icon: MonitorSmartphone,
          },
          {
            id: "ids-ips",
            title: "IDS and IPS",
            description:
              "Add detection and prevention controls where appropriate.",
            icon: Radar,
          },
          {
            id: "cloud-security",
            title: "Cloud Security",
            description: "Protect cloud access and workloads.",
            icon: Cloud,
          },
          {
            id: "application-security",
            title: "Application Security",
            description: "Review application protections.",
            icon: FileCheck,
          },
          {
            id: "network-monitoring",
            title: "Network Monitoring",
            description: "Improve visibility of network events.",
            icon: Eye,
          },
          {
            id: "identity-security",
            title: "Identity Security",
            description: "Define access and authentication controls.",
            icon: Fingerprint,
          },
          {
            id: "zero-trust",
            title: "Zero Trust",
            description:
              "Apply least-privilege access and verification principles.",
            icon: KeyRound,
          },
          {
            id: "workspace-security",
            title: "Email and Workspace Security",
            description:
              "Protect business communications and user environments.",
            icon: MailWarning,
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
            icon: ClipboardList,
          },
          {
            id: "incident-planning",
            title: "Incident Response Planning",
            description: "Prepare escalation and recovery procedures.",
            icon: Siren,
          },
          {
            id: "compliance",
            title: "Compliance Planning",
            description:
              "Assess applicable obligations and improvement priorities.",
            icon: FileCheck,
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
            icon: Radar,
          },
          {
            id: "risk-treatment",
            title: "Risk Treatment",
            description: "Prioritise practical improvements.",
            icon: ListChecks,
          },
          {
            id: "continuity",
            title: "Business Continuity",
            description: "Plan for operational disruption.",
            icon: Repeat,
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
            icon: LineChart,
          },
          {
            id: "vision",
            title: "Computer Vision",
            description: "Apply visual analysis to suitable workflows.",
            icon: Scan,
          },
          {
            id: "nlp",
            title: "Natural Language Processing",
            description:
              "Analyse text and support conversational interfaces.",
            icon: MessageSquare,
          },
          {
            id: "automation",
            title: "RPA and Intelligent Automation",
            description: "Reduce repetitive tasks.",
            icon: Bot,
          },
          {
            id: "ai-security",
            title: "AI in Cybersecurity",
            description: "Apply suitable analysis to security workflows.",
            icon: ShieldCheck,
          },
          {
            id: "recommendations",
            title: "Recommendation Systems",
            description: "Support relevant personalised suggestions.",
            icon: Sparkles,
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
            icon: ClipboardList,
          },
          {
            id: "integration",
            title: "Data Integration",
            description: "Connect relevant sources.",
            icon: Combine,
          },
          {
            id: "realtime",
            title: "Real-Time Analytics",
            description: "Enable timely operational insight where needed.",
            icon: Activity,
          },
          {
            id: "visualisation",
            title: "Data Visualisation",
            description: "Present information through clear dashboards.",
            icon: FileBarChart,
          },
          {
            id: "cloud-data",
            title: "Cloud-Based Data Solutions",
            description: "Plan scalable data environments.",
            icon: Cloud,
          },
          {
            id: "iot",
            title: "IoT Data",
            description: "Process relevant connected-device information.",
            icon: Antenna,
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
            icon: Database,
          },
          {
            id: "backup",
            title: "Backup and Recovery",
            description: "Define protection and restoration plans.",
            icon: HardDrive,
          },
          {
            id: "access",
            title: "Access Control",
            description: "Limit data access by role.",
            icon: KeyRound,
          },
          {
            id: "data-security",
            title: "Data Security",
            description: "Apply encryption and appropriate handling controls.",
            icon: Lock,
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
            icon: Tablet,
          },
          {
            id: "access",
            title: "Secure Mobile Access",
            description: "Apply controlled access to business resources.",
            icon: Lock,
          },
          {
            id: "workforce",
            title: "Workforce Mobility",
            description: "Connect remote and mobile workflows.",
            icon: Users2,
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
            icon: ClipboardList,
          },
          {
            id: "development",
            title: "Responsive Development",
            description: "Build for desktop and mobile.",
            icon: LayoutDashboard,
          },
          {
            id: "maintenance",
            title: "Launch and Maintenance",
            description: "Arrange launch checks and ongoing updates.",
            icon: Wrench,
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
            icon: MonitorSmartphone,
          },
          {
            id: "workflows",
            title: "Workflow Applications",
            description: "Simplify agreed processes.",
            icon: Combine,
          },
          {
            id: "integration",
            title: "System Integration",
            description: "Connect relevant business tools.",
            icon: Link2,
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
            icon: ClipboardList,
          },
          {
            id: "development",
            title: "Mobile Development",
            description: "Build agreed platform functionality.",
            icon: Smartphone,
          },
          {
            id: "support",
            title: "Integration and Support",
            description: "Connect systems and arrange maintenance.",
            icon: LifeBuoy,
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
            icon: Palette,
          },
          {
            id: "digital",
            title: "Digital Creatives",
            description: "Design assets for online channels.",
            icon: Sparkles,
          },
          {
            id: "collateral",
            title: "Business Collateral",
            description: "Develop presentations and print-ready materials.",
            icon: FileText,
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
            icon: Target,
          },
          {
            id: "execution",
            title: "Content and Channel Execution",
            description: "Deliver the agreed channel scope.",
            icon: Send,
          },
          {
            id: "reporting",
            title: "Performance Reporting",
            description: "Review results against agreed measures.",
            icon: FileBarChart,
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
            icon: MonitorPlay,
          },
          {
            id: "education-av",
            title: "Education AV",
            description:
              "Provide display and presentation technology for educational spaces. This is equipment integration, not training programmes.",
            icon: Projector,
          },
          {
            id: "integration",
            title: "Installation and Integration",
            description:
              "Connect AV systems with existing IT and room requirements.",
            icon: Link2,
          },
          {
            id: "support",
            title: "AV Support",
            description: "Arrange maintenance under the agreed scope.",
            icon: LifeBuoy,
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
            icon: Camera,
          },
          {
            id: "monitoring",
            title: "Recording and Monitoring",
            description: "Select recording and viewing arrangements.",
            icon: Video,
          },
          {
            id: "support",
            title: "Integration and Maintenance",
            description: "Coordinate agreed integration and service needs.",
            icon: Wrench,
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
            icon: ParkingCircle,
          },
          {
            id: "operations",
            title: "Parking Operations",
            description: "Define the required management workflow.",
            icon: SlidersHorizontal,
          },
          {
            id: "integration",
            title: "System Integration",
            description: "Connect suitable controls and monitoring systems.",
            icon: Link2,
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
            icon: KeyRound,
          },
          {
            id: "intercom",
            title: "Intercom Systems",
            description: "Support visitor communication.",
            icon: PhoneCall,
          },
          {
            id: "integration",
            title: "Integration",
            description:
              "Connect access and communication systems where appropriate.",
            icon: Link2,
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
            icon: Antenna,
          },
          {
            id: "automation",
            title: "Lighting and HVAC Automation",
            description: "Coordinate agreed control functions.",
            icon: Lightbulb,
          },
          {
            id: "access",
            title: "Smart Access",
            description: "Connect relevant building access technology.",
            icon: DoorOpen,
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
            icon: Target,
          },
          {
            id: "infrastructure",
            title: "Infrastructure Planning",
            description: "Assess capacity and architecture.",
            icon: Server,
          },
          {
            id: "integration",
            title: "System Integration",
            description: "Coordinate connected tools.",
            icon: Link2,
          },
          {
            id: "transformation",
            title: "Digital Transformation",
            description: "Plan phased technology improvements.",
            icon: RefreshCw,
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
            icon: RefreshCw,
          },
          {
            id: "monitoring",
            title: "Proactive Monitoring",
            description: "Review service health under the agreed coverage.",
            icon: Activity,
          },
          {
            id: "optimisation",
            title: "Performance Optimisation",
            description: "Address relevant bottlenecks.",
            icon: Gauge,
          },
          {
            id: "repairs",
            title: "Troubleshooting and Repairs",
            description: "Resolve supported technical issues.",
            icon: Wrench,
          },
          {
            id: "asset-lifecycle",
            title: "Asset Lifecycle Management",
            description:
              "Plan procurement, maintenance, refresh and appropriate disposal.",
            icon: Recycle,
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
            icon: Headset,
          },
          {
            id: "infrastructure",
            title: "Infrastructure Support",
            description: "Coordinate supported systems and networks.",
            icon: Server,
          },
          {
            id: "support-plan",
            title: "Support Planning",
            description:
              "Define coverage, priorities and escalation. Hours and response commitments are confirmed with each client.",
            icon: ClipboardList,
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

/**
 * A short, deduplicated set of icons representing a service page, used to
 * populate its hero illustration: the page's own icon plus its first few
 * scope-item icons.
 */
export function heroIconsForService(service: ServicePage): LucideIcon[] {
  const icons = [service.icon, ...service.scope.map((item) => item.icon)];
  return Array.from(new Set(icons)).slice(0, 4);
}

/**
 * A short, deduplicated set of icons representing a category, used to
 * populate its hero illustration: the category's own icon plus the lead
 * icon from each of its first few child pages.
 */
export function heroIconsForCategory(category: ServiceCategory): LucideIcon[] {
  const icons = [category.icon, ...category.pages.map((page) => page.icon)];
  return Array.from(new Set(icons)).slice(0, 4);
}

/**
 * Short, benefit-led hero taglines for the redesigned service pages, keyed
 * by category or service slug. The eyebrow, breadcrumb and page metadata
 * keep using the approved category/service names unchanged — this is only
 * the large display line in the new hero template, in the spirit of the
 * brief's own "The foundation for your digital business." example.
 */
export const heroHeadlines: Record<string, string> = {
  "infrastructure-networking": "A stronger foundation for how your business runs.",
  "cloud-aws": "Cloud that moves at the pace of your business.",
  cybersecurity: "Protection built around how your business actually works.",
  "ai-data-applications": "Turn your data and applications into an advantage.",
  "av-collaboration": "Spaces built for clearer collaboration.",
  "smart-security": "Premises technology that works as one system.",
  "consulting-managed-it": "Technology decisions and support, aligned to your business.",

  "it-infrastructure": "The foundation for your digital business.",
  "network-services": "Keep every location and application connected.",
  "cloud-computing": "A cloud environment built around your workloads.",
  "aws-solutions": "AWS, planned and managed around your business.",
  "cyber-risk-auditing": "Know where your real exposure lies.",
  "cyber-security-architecture": "Layered protection for your whole environment.",
  "cyber-security-consultancy": "Make security part of how you plan.",
  "cyber-risk-management": "Manage risk before it becomes disruption.",
  "ai-development": "Turn your data into informed decisions.",
  "big-data-analytics": "Bring your business information together.",
  "data-management-security": "Protect the data your business runs on.",
  "mobility-solutions": "Keep your workforce connected, wherever they work.",
  "website-development": "A website built around how customers find you.",
  "web-applications": "Applications built around how your teams work.",
  "mobile-applications": "Bring your workflows to mobile devices.",
  "graphic-design": "Visual materials that communicate your business clearly.",
  "digital-marketing": "A marketing approach built around your audience.",
  "audio-visual-solutions": "Spaces designed for clearer collaboration.",
  "cctv-surveillance": "Better visibility across your premises.",
  "parking-management": "Vehicle access, organised around your site.",
  "access-control-intercom": "Manage entry and visitor communication as one system.",
  "smart-building-systems": "Bring your premises systems under one plan.",
  "it-consultancy": "Technology decisions aligned to your business priorities.",
  "operation-maintenance": "Keep your technology environment running reliably.",
  "managed-it-support": "Day-to-day support, organised around your business.",
};

export function getHeroHeadline(slug: string): string {
  return heroHeadlines[slug] ?? slug;
}

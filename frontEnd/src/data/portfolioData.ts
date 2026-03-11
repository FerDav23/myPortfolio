import type { ExperienceItem, ProjectCategory, ProjectItem, SkillCategory } from "../types";

export const profile = {
  name: "Fernando David Arias Navia",
  title: "Systems Engineering Graduate | Embedded Systems & Full-Stack Developer",
  summary:
    "Systems engineering graduate with experience building embedded IoT devices, automation systems, and full-stack software platforms. Skilled in integrating hardware, firmware, cloud infrastructure, and mobile applications to develop complete cyber-physical systems.",
  location: "Vancouver, BC",
  phone: "+1 (236) 865-3397",
  email: "ariasfernando11@gmail.com",
  /** Place your resume PDFs in frontEnd/public/ — filenames must match the paths below */
  resumes: {
    developer: {
      url: "/Resume%20Fernando%20Arias%20(Full-stack%20Developer).pdf",
      label: "Resume (Developer)",
      description:
        "Focused on software development: full-stack web, APIs, cloud, and mobile. Best for software engineer and full-stack roles.",
    },
    systemsEmbedded: {
      url: "/Resume%20Fernando%20Arias%20(Systems%20and%20Embedded).pdf",
      label: "Resume (Systems & Embedded)",
      description:
        "Highlights systems engineering, embedded systems, firmware, IoT, and hardware integration. Best for embedded and systems roles.",
    },
  } as const,
  /** @deprecated Use resumes.developer or open resume modal instead */
  resumeUrl: "/Resume%20Fernando%20Arias%20(Full-stack%20Developer).pdf",
  github: "https://github.com/FerDav23",
  linkedIn: "www.linkedin.com/in/fernando-arias-navia",
};

export const aboutNarrative = [
  "I combine systems engineering foundations with hands-on software delivery to build products that connect devices, users, and data.",
  "My work spans embedded firmware and hardware integration all the way to cloud infrastructure, REST APIs, mobile applications, and full-stack dashboards. I enjoy building practical engineering solutions in IoT, automation, and full-stack platforms where reliability, usability, and measurable business impact matter.",
];

export const skills: SkillCategory[] = [
  {
    title: "Programming",
    items: ["C", "C++", "JavaScript", "Python", "SQL", "MATLAB"],
  },
  {
    title: "Embedded & Hardware",
    items: [
      "ESP32",
      "MQTT",
      "Sensor integration",
      "Circuit design",
      "Battery management systems",
      "Oscilloscope & instrumentation",
    ],
  },
  {
    title: "Software Development",
    items: ["React", "React Native", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "TimescaleDB"],
  },
  {
    title: "Cloud & Systems",
    items: ["AWS (EC2, S3, RDS, Route53, CloudFront)", "Linux", "Git"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Systems & Software Engineer (Co-op Work)",
    company: "FJ Centro Integral de Mantenimiento",
    dates: "Jan 2026 - Current",
    achievements: [
      "Developed a full-stack customer loyalty and rewards platform using React, Node.js, MySQL, and AWS, supporting 100+ registered users.",
      "Designed REST APIs and relational schemas for customer accounts, reward points, and vehicle service history.",
      "Implemented QR-code authentication with physical membership cards for fast login.",
      "Architected a multi-user shrimp trading platform in Ecuador with centralized price comparison and logistics workflows.",
      "Built role-based dashboards and workflows supporting producers, packers, and operations users.",
    ],
  },
  {
    role: "Systems & Software Engineer (Freelance)",
    company: "ElContadorEC",
    dates: "Apr 2025 - Oct 2025",
    achievements: [
      "Designed and deployed a full-stack e-commerce platform using React, Node.js, and MySQL.",
      "Implemented secure authentication, encrypted password storage, and Nuvei payment integration.",
      "Provisioned and deployed cloud infrastructure with AWS EC2, S3, and Route53.",
    ],
  },
  {
    role: "Software Developer (Freelance Work)",
    company: "FJ CIM",
    dates: "April 2025 - Oct 2025",
    achievements: [
      "Developed a web interface integrating the company's vehicle maintenance database using React and Node.js.",
      "Implemented filtering and data access features, allowing customers to view their service history online.",
      "Provided technical consulting to company management on software systems and technology infrastructure.",
    ],
  },
  {
    role: "Mobile App Developer (Co-op Work)",
    company: "FJ Star Aqua",
    dates: "Sept 2024 - Jan 2025",
    achievements: [
      "Developed a cross-platform e-commerce app using React Native, Node.js, and MySQL.",
      "Built backend APIs and an admin dashboard for inventory, order tracking, and user administration.",
      "Designed mobile interfaces and UI prototypes in Figma.",
      "Integrated deployment and storage workflows with AWS services.",
    ],
  },
  {
    role: "Database Developer (Co-op Work)",
    company: "Parwood Door Products Ltd.",
    dates: "May 2024 - Sept 2024",
    achievements: [
      "Designed a MySQL engineering database with ~25 relational tables for manufacturing data.",
      "Built a JavaScript engineering interface to reduce manual entry and improve workflow efficiency.",
      "Implemented normalization, indexing, triggers, and stored procedures for reliable data operations.",
      "Maintained Linux-based infrastructure on AWS (EC2, S3, IAM).",
    ],
  },
];

export const projects: ProjectItem[] = [
  
  {
    id: "shrimp-platform",
    title: "Shrimp Trading Platform",
    shortDescription:
      "Role-based platform connecting producers and packers with centralized price comparison and logistics workflows. Utilizes AWS services for scalable, secure, and highly available infrastructure.",
    fullDescription:
      "Architected a multi-stakeholder full-stack platform for shrimp trading operations in Ecuador, leveraging AWS Cloud services (including EC2, S3, CloudFront, IAM, RDS, and Aurora) for robust cloud infrastructure. The product improves coordination, decision speed, and transparency through role-aware dashboards and transaction workflows, backed by secure, scalable, and resilient AWS architecture.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "AWS (EC2, S3, CloudFront, RDS, Aurora)"
    ],
    category: "Full Stack Web Application",
    architecture: [
      "React dashboards provide role-specific views for producers, packers, and operators.",
      "Node.js/Express APIs enforce workflow rules and transaction consistency.",
      "AWS EC2 hosts backend services, while S3 stores static assets and user uploads.",
      "Data persistence is managed by AWS RDS and Aurora, ensuring high performance and reliability for pricing, logistics, and account-level operations.",
    ],
    highlights: [
      "Role-based dashboards",
      "Centralized price comparison",
      "Logistics workflow orchestration",
      "Cloud infrastructure with AWS EC2, S3, CloudFront, IAM, RDS, and Aurora",
      "Scalable and secure architecture"
    ],
    demoUrl: "https://shrimp-platform.fernando-arias-navia.cv/login",
    githubUrl: "https://github.com/FerDav23/Shrimp-Trading-Platform-Demo",
    images: [
      {
        src: "/projects-images/Shrimp-project/producer-offer-preview.PNG",
        alt: "Producer offer preview screen",
        caption: "Producer dashboard — view and accept offers from packers.",
      },
      {
        src: "/projects-images/Shrimp-project/packers-offers.PNG",
        alt: "Packers offers view",
        caption: "Packers console — create and manage offers to producers.",
      },
      {
        src: "/projects-images/Shrimp-project/packers-purchases-console.PNG",
        alt: "Packers purchases console",
        caption: "Purchases workflow — track and manage purchases from producers.",
      },
    ],
  },
  {
    id: "loyalty-platform",
    title: "Customer Loyalty & Rewards Platform",
    shortDescription:
      "Full-stack loyalty platform with QR-based authentication and customer service history tracking.",
    fullDescription:
      "Built a full-stack loyalty and rewards platform for vehicle service operations with 100+ registered users. The platform centralizes account data, reward balance management, and service history while improving access speed through QR card authentication.",
    techStack: ["React", "Node.js", "MySQL", "AWS", "REST APIs", "QR authentication"],
    category: "Full Stack Web Application",
    architecture: [
      "Frontend UI handles customer account and rewards operations.",
      "REST API services manage authentication, points, and service history records.",
      "MySQL schema models loyalty accounts, transactions, and historical maintenance events.",
    ],
    highlights: [
      "100+ users supported",
      "QR-based login experience",
      "Relational API-first architecture",
    ],
    githubUrl: "https://github.com/FerDav23/AUTOVIP-Rewards-System-Demo",
    demoUrl: "https://autovip-rewards.fernando-arias-navia.cv/",
  },
  {
    id: "iot-smart-plug",
    title: "IoT Smart Plug Energy Monitoring System",
    shortDescription:
      "ESP32-based smart plug with real-time telemetry, mobile control, and automatic shutdown logic.",
    fullDescription:
      "Designed and built a WiFi-enabled smart plug that combines embedded control, cloud telemetry, and mobile UX. The system collects energy data, stores time-series metrics, and gives users remote appliance control with configurable protection thresholds.",
    techStack: [
      "ESP32",
      "MQTT",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "TimescaleDB",
      "QR provisioning",
    ],
    category: "Embedded",
    architecture: [
      "ESP32 firmware streams telemetry and listens for relay commands over MQTT.",
      "Backend services process device events and persist time-series power data in TimescaleDB.",
      "Mobile app provides onboarding, device control, and energy analytics visualization.",
    ],
    highlights: [
      "Real-time energy monitoring graphs",
      "Relay-based remote on/off control",
      "Automatic shutdown triggered by configurable limits",
    ]
  },
  {
    id: "transcription-glasses",
    title: "Real-Time Transcription Glasses",
    shortDescription:
      "Wearable embedded system focused on battery management, safe power distribution, and mechanical enclosure design.",
    fullDescription:
      "Contributed to the embedded hardware design of a wearable transcription system by engineering the battery and power subsystem. The project prioritized safety, reliability, and compact integration of electronics inside a custom frame.",
    techStack: ["Battery management systems", "Embedded hardware", "Power electronics", "SolidWorks"],
    category: "Embedded",
    architecture: [
      "Battery management subsystem regulates charging and discharge behavior.",
      "Power routing ensures stable operation across sensing and processing modules.",
      "Custom enclosure geometry integrates electronics into wearable form factor.",
    ],
    highlights: [
      "Battery management and safety logic",
      "Power distribution design",
      "Custom SolidWorks enclosure integration",
    ],
  },
  {
    id: "mobile-ecommerce",
    title: "Mobile E-Commerce Application",
    shortDescription:
      "Cross-platform commerce app with inventory and order workflows backed by an admin dashboard.",
    fullDescription:
      "Developed a React Native mobile commerce app integrated with Node.js APIs and MySQL data models. The solution includes administrator controls for inventory management, order tracking, and user administration.",
    techStack: ["React Native", "Node.js", "Express", "MySQL", "AWS"],
    category: "Software",
    architecture: [
      "React Native mobile clients provide product browsing and order flow.",
      "Admin dashboard supports operational management tasks and user oversight.",
      "Node.js APIs and MySQL backend manage transactions and inventory state.",
    ],
    highlights: ["Cross-platform mobile delivery", "Admin workflows", "AWS-backed deployment"],
    githubUrl: "https://github.com/",
    demoUrl: "https://github.com/",
  },
];

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Software",
  "Embedded",
  "Full Stack Web Application",
];

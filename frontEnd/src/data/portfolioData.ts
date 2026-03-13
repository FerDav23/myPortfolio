import type { EducationItem, ExperienceItem, ProjectCategory, ProjectItem, SkillCategory } from "../types";

export const profile = {
  name: "Fernando David Arias Navia",
  title: "Systems Engineering Graduate (May 2026) | Embedded, Signal & Network Systems | Full-Stack Developer",
  summary:
    "Systems engineering graduate with experience developing embedded and distributed systems integrating sensors, actuators, communication networks, and cloud infrastructure. Skilled in embedded firmware development, signal analysis, networked system design, and full-stack software development for connected systems. Experienced building IoT devices, real-time monitoring systems, and cyber-physical platforms using C/C++, Python, JavaScript, MATLAB, Git, and Linux.",
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
  "I combine systems engineering foundations with hands-on software delivery to build products that connect devices, users, and data. My work spans embedded firmware and hardware integration all the way to cloud infrastructure, REST APIs, mobile applications, and full-stack dashboards. I enjoy building practical engineering solutions in IoT, automation, and full-stack platforms where reliability, usability, and measurable business impact matter.",
  "I use signal processing and data analysis (e.g. Fourier and frequency-domain analysis, time-series, MATLAB/Simulink) to model and evaluate system behavior. I also work with networking and distributed systems (TCP/IP, MQTT, peer-to-peer, ns-3 simulation) to design and test connected and cyber-physical systems.",
];

export const aboutPillars = [
  { title: "Hardware", detail: "Sensors, relays, power systems, instrumentation" },
  { title: "Firmware", detail: "ESP32 control logic, MQTT communication, edge behavior" },
  { title: "Networks", detail: "TCP/IP, MQTT, peer-to-peer, ns-3 simulation, distributed systems" },
  { title: "Cloud", detail: "AWS infrastructure, APIs, and data pipelines" },
  { title: "Software Development", detail: "React, React Native, Node.js, Express, REST APIs, MySQL, PostgreSQL, TimescaleDB" },
  { title: "Signal & Control", detail: "Signals and systems, frequency-domain analysis, MATLAB/Simulink, control systems" },
   
  
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
      "Actuator control",
      "Relay systems",
      "Circuit design",
      "Battery management systems",
      "Embedded power systems",
      "Oscilloscopes",
      "Signal generators",
      "SolidWorks",
      "Embedded debugging",
    ],
  },
  {
    title: "Signal Processing & Data Analysis",
    items: [
      "Signals and systems",
      "Fourier and frequency-domain analysis",
      "Time-series analysis",
      "MATLAB / Simulink",
    ],
  },
  {
    title: "Software Development",
    items: ["React", "React Native", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Networking & Distributed Systems",
    items: [
      "TCP/IP",
      "UDP",
      "MQTT",
      "Peer-to-peer systems",
      "REST APIs",
      "ns-3 network simulation",
      "Linux",
    ],
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
      "Developed a full-stack customer loyalty and rewards platform using React, Node.js, MySQL, and AWS, supporting 100+ users and enabling digital tracking of vehicle service history.",
      "Designed REST APIs and relational database schemas to manage customer accounts, reward points, and service transactions.",
      "Implemented QR-code authentication using physical membership cards, enabling fast user identification and reducing manual login processes.",
      "Architected a multi-user supply-chain platform connecting shrimp producers and packers in Ecuador, supporting price comparison, transaction management, and logistics workflows.",
      "Built role-based dashboards and workflow systems enabling multiple stakeholders to manage transactions, logistics, and operational data across the platform.",
    ],
  },
  {
    role: "Systems & Software Engineer (Freelance)",
    company: "ElContadorEC",
    dates: "Apr 2025 - Oct 2025",
    achievements: [
      "Designed and deployed a full-stack e-commerce platform using React, Node.js, and MySQL to support online accounting services and customer account management.",
      "Implemented secure authentication and encrypted password storage, and integrated the Nuvei payment gateway to support secure online transactions.",
      "Deployed and maintained cloud infrastructure on AWS (EC2, S3, Route53) to support application hosting, storage, and domain management.",
    ],
  },
  {
    role: "Software Developer (Freelance Work)",
    company: "FJ CIM",
    dates: "April 2025 - Oct 2025",
    achievements: [
      "Developed a web interface using React and Node.js to integrate with the company's vehicle maintenance database, enabling customers to access their service records online.",
      "Implemented data filtering and API-based data retrieval features, allowing users to query and view vehicle service history efficiently.",
      "Provided technical consulting to management on software systems, database architecture, and technology infrastructure to support the company's digital platform.",
    ],
  },
  {
    role: "Mobile Application Developer (Co-op Work)",
    company: "FJ Star Aqua",
    dates: "Sept 2024 - Jan 2025",
    achievements: [
      "Developed a cross-platform e-commerce mobile application using React Native, Node.js, and MySQL to support product ordering and user account management.",
      "Designed and implemented backend REST APIs and an administrative dashboard for inventory management, order tracking, and user administration.",
      "Integrated the platform with AWS cloud infrastructure for application deployment, data storage, and system hosting.",
      "Designed mobile interfaces and application prototypes in Figma to support development of the user-facing system.",
    ],
  },
  {
    role: "Database Developer (Co-op Work)",
    company: "Parwood Door Products Ltd.",
    dates: "May 2024 - Sept 2024",
    achievements: [
      "Designed and implemented a MySQL engineering database (~25 relational tables) to manage door system components and manufacturing data.",
      "Developed a JavaScript-based interface for engineering data management, reducing manual data entry and improving workflow efficiency.",
      "Implemented schema normalization, indexing, triggers, and stored procedures to ensure reliable and efficient data processing.",
      "Deployed and maintained the system on AWS infrastructure (EC2, S3, IAM) and Linux servers, supporting application hosting and data storage.",
    ],
  },
];

export const education: EducationItem = {
  school: "Simon Fraser University",
  degree: "Bachelor of Applied Science in Systems Engineering",
  certificate: "Certificate in Computing Studies",
  graduation: "Expected Graduation: May 2026",
  coursework: [
    "Feedback Control Systems (ENSC383)",
    "Electro-Mechanical Sensors and Actuators (ENSC387)",
    "Communication Networks (ENSC427)",
    "Linear Systems (ENSC380)",
    "Communication Systems (ENSC327)",
  ],
};

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
    categories: ["Full Stack Web Application"],
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
    imagesSectionTitle: "Example Screens",
    imagesSectionDescription: "Representative UI pages from the producer and packer dashboards.",
    demoUrl: "https://shrimp-platform.fernando-arias-navia.cv/login",
    githubUrl: "https://github.com/FerDav23/Shrimp-Trading-Platform-Demo",
    images: [
      {
        src: "/projects-images/Shrimp-project/producer-offer-preview.PNG",
        alt: "Producer offer preview screen",
        title: "Producer Offers Dashboard",
        description: "Example of the producer workflow: producers can review, accept, or reject offers from packers."
      },
      {
        src: "/projects-images/Shrimp-project/packers-offers.PNG",
        alt: "Packers offers view",
        title: "Packers Offer Management",
        description: "Packer workflow: create and customize offers for multiple products, or upload an offer instead of creating it manually."
      },
      {
        src: "/projects-images/Shrimp-project/packers-purchases-console.PNG",
        alt: "Packers purchases console",
        title: "Purchases Workflow Console",
        description: "Workflow for packers to purchase shrimp from a producer."
      },
    ],
  },
  
  {
    id: "iot-smart-plug",
    title: "IoT Smart Plug Energy Monitoring System",
    shortDescription:
      "ESP32-based smart plug with real-time telemetry, mobile control, and automatic shutdown logic.",
    fullDescription:
      "Designed and built a WiFi-enabled smart plug that combines embedded control, cloud telemetry, and mobile UX. The system collects energy data, stores time-series metrics, and gives users remote appliance control",
    techStack: [
      "ESP32",
      "Raspberry Pi",
      "MQTT",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "TimescaleDB",
      "QR provisioning",
    ],
    categories: ["Embedded", "Mobile App"],
    architecture: [
      "ESP32 firmware streams telemetry and listens for relay commands over MQTT.",
      "Backend services process device events and persist time-series power data in TimescaleDB.",
      "Mobile app provides onboarding, device control, and energy analytics visualization.",
    ],
    highlights: [
      "Real-time energy monitoring graphs",
      "Relay-based remote on/off control",
      "Device registration using QR codes",
    ],
    demoUrl: "https://pointsapp--mhr57quimr.expo.app",
    isMobileDemo: true,
    demoQrImage: "/projects-images/IoT/demo-qr-code.png",
    githubUrl: "https://github.com/FerDav23/SmartPlug-MobileApp-Demo",
    youtubeUrl: "https://www.youtube.com/watch?v=UHodB0tB_2k",
    youtubeTitle: "Smart Plug system demonstration",
    imagesSectionTitle: "System Diagrams & App Screens",
    imagesSectionDescription:
      "From hardware and backend architecture to mobile UX, these views show how the smart plug system is engineered end-to-end.",
    images: [
            {
        src: "/projects-images/IoT/Mqtt-smp-relatinship .PNG",
        alt: "MQTT topic and smart plug relationship diagram",
        title: "MQTT & Smart Plug Relationship",
        description:
          "Diagram showing how MQTT topics map to individual smart plugs for command, telemetry, and provisioning flows."
      },
      {
        src: "/projects-images/IoT/Smart Plug Monitoring Circuit.png",
        alt: "Smart plug monitoring diagram",
        title: "Smart Plug Monitoring Circuit",
        description:
          "High-level circuit showing current sensing, relay control, power measurement, and ESP32 interfacing for the smart plug."
      },
      {
        src: "/projects-images/IoT/2D Smart Plug Enclosure Schematic.png",
        alt: "2D smart plug enclosure schematic",
        title: "2D Enclosure Schematic",
        description:
          "Mechanical 2D drawing of custom Smart Plug enclosure (SolidWorks)."
      },
      {
        src: "/projects-images/IoT/Back End internal structure.PNG",
        alt: "Backend internal structure diagram",
        title: "Backend Internal Structure",
        description:
          "Logical view of the backend services that ingest MQTT telemetry, persist time-series data, and expose APIs to the mobile app."
      },
      {
        src: "/projects-images/IoT/Room page example, Figma design.png",
        alt: "Room page example in Figma design",
        title: "Room & Device Control Screen",
        description:
          "Example of the room page used to control smart plugs and visualize energy metrics from the app."
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
    techStack: ["React", "Node.js", "MySQL", "AWS (EC2, S3, CloudFront, RDS, Aurora)", "REST APIs", "QR authentication"],
    categories: ["Full Stack Web Application"],
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
    imagesSectionTitle: "Example Screens",
    imagesSectionDescription: "Representative UI pages from the customer rewards and manager admin panel.",
    githubUrl: "https://github.com/FerDav23/AUTOVIP-Rewards-System-Demo",
    demoUrl: "https://autovip-rewards.fernando-arias-navia.cv/",
    images: [
      {
        src: "/projects-images/AUTOVIP-Rewards/Costumer-Rewards.PNG",
        alt: "Customer rewards screen",
        title: "Customer Rewards Dashboard",
        description: "Customer view where users can see their rewards and points balance."
      },
      {
        src: "/projects-images/AUTOVIP-Rewards/Mobile-Costumer-Rewards.PNG",
        alt: "Mobile customer rewards screen",
        title: "Mobile Customer Rewards Dashboard",
        description: "Customer rewards dashboard in mobile view.",
        phoneFrame: true,
      },
      {
        src: "/projects-images/AUTOVIP-Rewards/Manager-Admin-Panel.PNG",
        alt: "Manager admin panel",
        title: "Manager Admin Panel",
        description: "Manager admin panel for managing users, user vehicles, and points transactions."
      },
    ],
  },
  {
    id: "vehicle-maintenance-web",
    title: "Vehicle Maintenance Database Web Interface",
    shortDescription:
      "Web interface integrating a vehicle maintenance database with filtering and online service history for customers (FJ CIM).",
    fullDescription:
      "Developed a web interface integrating the company's vehicle maintenance database using React and Node.js. Implemented filtering and data access features, allowing customers to view their service history online.",
    techStack: ["React", "Node.js", "Database integration", "AWS (EC2, S3, CloudFront, RDS, Aurora)"],
    categories: ["Full Stack Web Application"],
    architecture: [
      "React frontend provides filtering and data access for maintenance records.",
      "Node.js backend integrates with the existing vehicle maintenance database.",
      "Customers can view their service history online through the web interface.",
    ],
    highlights: [
      "Web interface for vehicle maintenance database",
      "Filtering and data access features",
      "Customer-facing service history view",
    ],
    imagesSectionTitle: "Example Screens",
    imagesSectionDescription: "Representative UI pages from the customer service history view.",
    demoUrl: "https://car-hist.fernando-arias-navia.cv/",
    githubUrl: "https://github.com/FerDav23/Vehicle-Maintenance-History-System-Demo",
    images: [
      {
        src: "/projects-images/Car-Maint-Hist/History-Filters.PNG",
        alt: "History filters screen",
        title: "History Filters",
        description: "Filters available for the customer service history view."
      },
      {
        src: "/projects-images/Car-Maint-Hist/History-Report-PC.PNG",
        alt: "Service history report on desktop",
        title: "Customer Service History View",
        description: "Customer service history view on desktop."
      },
      {
        src: "/projects-images/Car-Maint-Hist/History-Report-Mobile.PNG",
        alt: "Service history report on mobile",
        title: "Customer Service History View",
        description: "Customer service history view on mobile.",
        phoneFrame: true,
      },
    ],
  },

  {
    id: "transcription-glasses",
    title: "Real-Time Transcription Glasses",
    shortDescription:
      "Wearable embedded system focused on battery management, safe power distribution, and mechanical enclosure design.",
    fullDescription:
      "Contributed to the embedded hardware design of a wearable transcription system by engineering the battery and power subsystem. The project prioritized safety, reliability, and compact integration of electronics inside a custom frame.",
    techStack: ["Battery management systems", "Embedded hardware", "Power electronics", "SolidWorks"],
    categories: ["Embedded"],
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
    categories: ["Software", "Mobile App"],
    architecture: [
      "React Native mobile clients provide product browsing and order flow.",
      "Admin dashboard supports operational management tasks and user oversight.",
      "Node.js APIs and MySQL backend manage transactions and inventory state.",
    ],
    highlights: ["Cross-platform mobile delivery", "Admin workflows", "AWS-backed deployment"],
  },
  {
    id: "p2p-ddos-ns3",
    title: "Peer-to-Peer Network DDoS Resilience Simulation",
    shortDescription:
      "Simulated distributed peer-to-peer networks under DDoS attacks using ns-3; analyzed congestion, node load, and power efficiency; evaluated mitigation strategies.",
    fullDescription:
      "Simulated distributed peer-to-peer networks under DDoS attacks using the ns-3 network simulator. Analyzed network congestion, node processing load, and power efficiency under attack conditions. Evaluated mitigation strategies to improve network performance and energy efficiency.",
    techStack: ["ns-3", "C++", "Network simulation", "DDoS", "Linux"],
    categories: ["Software"],
    architecture: [
      "ns-3 simulation models distributed P2P topology and attack traffic.",
      "Metrics collected for congestion, per-node processing load, and power consumption.",
      "Mitigation strategies implemented and compared for resilience and efficiency.",
    ],
    highlights: [
      "P2P network simulation under DDoS",
      "Congestion and node load analysis",
      "Power efficiency evaluation",
      "Mitigation strategy comparison",
    ],
  },
];

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Software",
  "Embedded",
  "Full Stack Web Application",
  "Mobile App",
];

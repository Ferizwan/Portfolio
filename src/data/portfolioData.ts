import { Profile, Education, Experience, Project, SkillCategory, Publication } from '../types';

export const profileData: Profile = {
  name: "Ferizwan Malik Wichaksana",
  firstName: "FERIZWAN",
  lastName: "MALIK",
  title: "Software Engineer & Data Analyst",
  tagline: "Building intuitive web, mobile, and intelligent data systems that create real impact.",
  bio: "I'm a Software Engineering Technology student at IPB University with a strong passion for software engineering, artificial intelligence, and data science. I enjoy designing and developing scalable web applications, intelligent systems, and data-driven solutions that solve real-world problems. Through academic projects, professional internships, and international exchange programs, I have gained hands-on experience in full-stack development, UI/UX design, machine learning, computer vision, augmented reality, big data analytics, and network infrastructure. I am committed to continuous learning, exploring emerging technologies, and building innovative, reliable, and impactful digital solutions that create meaningful value for users and organizations.",
  location: "Bogor, West Java, Indonesia",
  phone: "+62 87784889511",
  email: "ferizmalik12@gmail.com",
  gpa: "3.7 / 4.0",
  university: "IPB University",
  major: "Software Engineering",
  socials: {
    github: "https://github.com/Ferizwan",
    linkedin: "https://www.linkedin.com/in/ferizwan-m/",
    email: "mailto:ferizmalik12@gmail.com",
    whatsapp: "https://wa.me/6287784889511"
  },
  stats: [
    { label: "Cumulative GPA", value: "3.7 / 4.0" },
    { label: "Completed Projects", value: "12+" },
    { label: "ML Accuracy Score", value: "99.78%" },
    { label: "Datasets Processed", value: "150K+" }
  ]
};

export const educationData: Education[] = [
  {
    id: "edu-1",
    institution: "IPB University",
    location: "Bogor, West Java",
    faculty: "Faculty of Vocational",
    degree: "Majoring in Software Engineering",
    period: "2023 – Expected 2027",
    gpa: "3.7 / 4.0",
    details: [
      "Focused on advanced software engineering, database design, web/mobile development, and computer networks.",]
  },
  {
    id: "edu-2",
    institution: "Vocational High School 3 Bogor",
    location: "Bogor, West Java",
    degree: "Majoring in Computer and Network Engineering",
    period: "2020 – 2023",
    details: [
      "Gained strong foundations in computer network protocols, server administration, hardware diagnostics, and Linux infrastructure."
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "System Analyst Intern",
    company: "Directorate General of Population and Civil Registration (Ditjen Dukcapil), Ministry of Home Affairs",
    location: "Jakarta, Indonesia",
    period: "Jul 2026 – Now",
    type: "Internship",
    description: [
      "Analyzed business requirements and government regulations, including Permendagri No. 6 of 2026, to support the enhancement of the Population Administration Information System (SIAK).",
      "Collaborated with system developers, government officials, and stakeholders to define functional requirements and translate regulatory policies into system specifications.",
      "Evaluated existing business processes and proposed system improvements to enhance public administration services and operational efficiency.",
      "Prepared technical documentation, feature requirement analyses, and development recommendations for future SIAK enhancements."
    ],
    skills: [
      "System Analysis",
      "Business Analysis",
      "SQL",
      "SIAK",
      "Technical Documentation",
      "Government Information Systems"
    ]
  },
  {
    id: "exp-2",
    role: "Student Exchange Program",
    company: "Guangdong Construction Polytechnic",
    location: "Guangzhou, China",
    period: "Oct 2025 – Nov 2025",
    type: "Exchange",
    description: [
      "Completed 5 multidisciplinary courses covering Data Analysis and Visualization, Motion Graphic Design, 3D Modeling, Drone Technology, and Chinese Culture & Language.",
      "Applied analytical techniques and data visualization principles to transform complex datasets into meaningful business insights.",
      "Developed digital creative assets through motion graphics and 3D modeling projects using professional design software.",
      "Gained hands-on exposure to drone operations, flight maneuvers, and industrial payload applications.",
      "Collaborated effectively with international lecturers and students during an intensive 1-month program."
    ],
    skills: ["Data Visualization", "Motion Graphics", "3D Modeling", "Drone Tech", "Cross-Cultural Collaboration"]
  },
  {
    id: "exp-3",
    role: "Network Infrastructure Intern",
    company: "PT Bonet Utama",
    location: "Bogor, Indonesia",
    period: "Jan 2022 – Jul 2022",
    type: "Internship",
    description: [
      "Configured and deployed 10+ network devices, including enterprise routers, managed switches, CCTV security systems, and wireless access points.",
      "Supported network infrastructure across 3 high-profile client sites: SMAN 5 Bogor, Panasonic, and Kecamatan Bogor Tengah.",
      "Assisted in maintaining and monitoring production servers to guarantee high system uptime and availability.",
      "Implemented DNS configurations, IP addressing schemes, VLAN segmentation, and network connectivity troubleshooting."
    ],
    skills: ["Network Routing & Switching", "Server Administration", "DNS Setup", "CCTV Deployment", "VLAN Configuration"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "SACAR",
    subtitle: "Smart Agriculture Augmented Reality APP for Smart Farming",
    category: ["Mobile Applications"],
    role: "AR Developer & UI/UX Designer",
    date: "Jun 2026",
    featured: true,
    description: [
      "SACAR is an educational mobile application designed to introduce smart farming technologies through immersive augmented reality experiences. The application enables users to explore modern agricultural equipment and precision farming concepts using interactive 3D content, making agricultural education more engaging and accessible."
    ],
    technologies: ["Unity", "Vuforia Engine", "C#", "Blender", "Figma", "Android"],
    highlights: [
      "Interactive 3D farming equipment visualization",
      "Gamified learning paths for modern agriculture",
      "Optimized 3D render performance on mobile devices"
    ],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-2",
    title: "Subway Surfers Pose Detection",
    subtitle: "Computer Vision & Gesture Control ML Game Engine",
    category: ["AI & ML"],
    role: "Machine Learning & Computer Vision Developer",
    date: "May 2026",
    featured: true,
    description: [
      "Subway Surfers Pose Detection is a computer vision application that enables players to control the game using body movements instead of traditional input devices. The project combines pose estimation and deep learning to recognize user gestures in real time and translate them into in-game actions."
    ],
    technologies: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Flask", "LSTM"],
    highlights: [
      "99.78% test classification accuracy",
      "Real-time webcam pose landmark detection",
      "Low-latency Flask bridge for browser game inputs"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-3",
    title: "Data Science Salary Prediction System",
    subtitle: "Predictive Analytics Model on 151k+ Job Records",
    category: ["Data Science & Analytics"],
    role: "Data Scientist",
    date: "May 2026",
    featured: true,
    description: [
      "Data Science Salary Prediction is a predictive analytics project that estimates salaries for data science professionals based on experience, employment type, company characteristics, and geographical factors. The project provides valuable insights into salary trends to support career planning and recruitment decisions."
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    highlights: [
      "Analyzed 151,445 industry employment datasets",
      "Feature engineering for experience, remote work, & location",
      "Random Forest Regressor with tuned hyper-parameters"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-4",
    title: "Airbnb Price Prediction",
    subtitle: "Big Data Exploratory Analytics using Apache Spark",
    category: ["Data Science & Analytics"],
    role: "Data Scientist",
    date: "Apr 2026",
    featured: true,
    description: [
      "Airbnb Price Prediction is a machine learning project designed to estimate property rental prices based on listing characteristics, host information, and geographical attributes. The solution helps identify pricing factors and supports data-driven pricing strategies in the hospitality industry."
    ],
    technologies: ["Apache Spark", "Python", "Scikit-Learn", "Pandas", "Power BI", "CRISP-DM"],
    highlights: [
      "CRISP-DM standard analytics methodology",
      "Large-scale distributed data processing via Spark",
      "Power BI executive dashboard reporting"
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-5",
    title: "Flight Delay Prediction",
    subtitle: "Big Data Analytics For Flight Delay Prediction",
    category: ["Data Science & Analytics"],
    role: "Data Scientist",
    date: "May 2026",
    description: [
      "Flight Delay Prediction is a big data analytics project developed to forecast flight delays using historical aviation data. The system analyzes large-scale flight records to identify operational patterns and generate predictive insights that support more informed decision-making in the aviation industry."
    ],
    technologies: ["Apache Spark", "PySpark", "Python", "Scikit-learn", "Pandas"],
    highlights: [
      "Large-scale flight data processing",
      "Machine learning-based delay prediction",
      "Distributed data processing with Apache Spark"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-6",
    title: "Abon Murnisaji",
    subtitle: "E-commerce Website Platform Developed To Help Local Businesses",
    category: ["Web Platforms"],
    role: "Frontend Developer & UI/UX Designer",
    date: "May 2026",
    description: [
      "Abon Murnisaji is an e-commerce platform developed to help local businesses expand their online presence and streamline digital sales. The platform enables customers to browse products, complete secure purchases, and manage orders through a modern shopping experience while providing administrators with efficient product and transaction management tools."
    ],
    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Figma"],
    highlights: [
      "Seamless payment gateway integration",
      "Full admin order & inventory management dashboard",
      "Integrated payment and order management"
    ],
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-7",
    title: "Puncak Tennis Club",
    subtitle: "Online Tennis Coaching Reservation Portal",
    category: ["Web Platforms"],
    role: "Frontend Developer & UI/UX Designer",
    date: "Dec 2025",
    description: [
      "Puncak Tennis Club is an online reservation platform designed to simplify tennis coaching bookings and schedule management. The system enables users to browse available coaches, reserve training sessions, and manage bookings through a responsive and intuitive web application."
    ],
    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Figma"],
    highlights: [
      "Online coaching reservation management",
      "Real-time schedule availability",
      "Automated booking confirmation and receipts"
    ],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-8",
    title: "Image Processing",
    subtitle: "Web-Based Image Contrast Enhancement for Low-Light CCTV Images Using CLAHE",
    category: ["Web Platforms", "AI & ML"],
    role: "Frontend Developer & UI/UX Designer",
    date: "Nov 2025",
    description: [
      "CCTV Image Enhancement Using CLAHE is a web-based image processing application developed to improve the visual quality of low-light CCTV images. The application implements the Contrast Limited Adaptive Histogram Equalization (CLAHE) algorithm to enhance image contrast while preserving important object details, making surveillance footage clearer and more suitable for visual inspection and forensic analysis."
    ],
    technologies: ["Next.js", "React", "HTML5 Canvas API", "CLAHE Algorithm", "YCbCr Color Space"],
    highlights: [
      "Adaptive contrast enhancement using the CLAHE algorithm",
      "Manual CLAHE implementation without external computer vision libraries",
      "Real-time browser-based image processing with Canvas API"
    ],
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-9",
    title: "Nasi Kebuli Mutiara",
    subtitle: "Online Food Ordering Platform  ",
    category: ["Web Platforms"],
    role: "Frontend Developer & UI/UX Designer",
    date: "May 2025",
    description: [
      "Nasi Kebuli Mutiara is an online food ordering platform developed to improve customer convenience while supporting digital restaurant operations. The application provides a seamless ordering experience from menu exploration to order placement and transaction management."
    ],
    technologies: ["React.js", "JavaScript", "MySQL", "QGIS", "Figma", "Tailwind CSS"],
    highlights: [
      "Digital food ordering experience",
      "Shopping cart and order management",
      "Optimized purchasing workflow"
    ],
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-10",
    title: "Bettabeal",
    subtitle: "Cross-Platform Betta Fish Marketplace & Edu-Hub",
    category: ["Web Platforms", "Mobile Applications"],
    role: "Frontend Developer & UI/UX Designer",
    date: "Nov 2024",
    description: [
      "Bettabeal is a web and mobile marketplace designed for buying and selling betta fish while providing educational resources for hobbyists and breeders. The platform combines commercial transactions with informative content to create a comprehensive digital ecosystem for the ornamental fish community."
    ],
    technologies: ["Next.js", "Kotlin", "Java", "JavaScript", "MySQL", "Figma", "Android Studio"],
    highlights: [
      "Cross-platform Web & Android support",
      "Digital marketplace for betta fish",
      "Educational content management"
    ],
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-11",
    title: "Sate Umami",
    subtitle: "Company Profile Website & Digital Branding Platform",
    category: ["Web Platforms"],
    role: "Full Stack Developer",
    date: "May 2024",
    description: ["Sate Umami is a corporate website developed to strengthen the company's digital identity and showcase its products and services to a wider audience. The platform serves as an online branding channel while delivering a responsive and accessible browsing experience across multiple devices."],
    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    highlights: [
      "Modern corporate branding website",
      "Responsive multi-device experience",
      "Website performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "prog",
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: "Code" },
      { name: "PHP", level: 85, icon: "Server" },
      { name: "Python", level: 88, icon: "Terminal" },
      { name: "R", level: 80, icon: "BarChart2" },
      { name: "SQL", level: 85, icon: "Database" }
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 92, icon: "Layers" },
      { name: "Next.js", level: 88, icon: "Globe" },
      { name: "Laravel", level: 86, icon: "Box" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "Bootstrap", level: 82, icon: "Layout" }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    skills: [
      { name: "MySQL", level: 88, icon: "Database" },
      { name: "MongoDB", level: 80, icon: "HardDrive" }
    ]
  },
  {
    id: "tools",
    name: "Developer & AI Tools",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "VS Code", level: 95, icon: "Code2" },
      { name: "Android Studio", level: 80, icon: "Smartphone" },
      { name: "Figma", level: 92, icon: "Figma" },
      { name: "Google Colab", level: 88, icon: "Cpu" },
      { name: "RStudio", level: 82, icon: "Activity" },
      { name: "Postman", level: 85, icon: "Send" },
      { name: "QGIS", level: 75, icon: "MapPin" }
    ]
  },
  {
    id: "design",
    name: "Design & Media Production",
    skills: [
      { name: "Adobe Premiere Pro", level: 85, icon: "Video" },
      { name: "Adobe After Effects", level: 82, icon: "Film" },
      { name: "Adobe Illustrator", level: 80, icon: "PenTool" },
      { name: "Power BI", level: 88, icon: "PieChart" }
    ]
  }
];

export const publicationData: Publication[] = [
  {
    id: "pub-1",
    title: "Analisis Fungsional Website Komunitani Menggunakan Pengujian Black-Box Dengan Teknik Decision Table",
    journal: "Jurnal Aplikasi Teknologi Informasi dan Manajemen (JATIM)",
    vol: "Vol. 7, No. 1",
    date: "2025",
    abstract: "Scientific study analyzing the functional robustness and edge-case behavior of the Komunitani website platform using systematic Black-Box Decision Table testing strategies to evaluate UI reliability and input validation accuracy."
  }
];

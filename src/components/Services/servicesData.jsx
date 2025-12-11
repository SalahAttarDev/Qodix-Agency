import { 
    Stethoscope,
    Laptop,
    Smartphone,
    ShoppingCart,
    Cpu,
    Lightbulb,
    Sparkles,
    Rocket,
    Users,
    Lock,
    Zap,
    Globe,
    Video,
    ShoppingBag,
    MessageSquare,
    Edit,
    Shield,
    Database,
    Cloud,
    Code,
    Palette,
    BarChart,
    Bell,
    TrendingUp
} from 'lucide-react';

export const services = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    subtitle: "Professional web solutions",
    icon: Laptop,
    description: "Modern, fast, and scalable websites tailored for business growth.",
    shortDescription: "Modern websites and digital platforms for business growth",
    features: [
      "Corporate sites, e-commerce & landing pages",
      "Custom dashboards & business systems",
      "Responsive, SEO-ready & multi-language"
    ],
    detailedFeatures: [
      {
        title: "Custom Website Development",
        description: "Tailored websites built from scratch to match your brand identity",
        icon: Globe,
        details: ["Corporate websites", "Brand integration", "Performance optimized"]
      },
      {
        title: "E-commerce Solutions",
        description: "Complete online store setups with secure payment integration",
        icon: ShoppingBag,
        details: ["Product management", "Payment gateway", "Order tracking"]
      },
      {
        title: "Business Systems",
        description: "Custom dashboards and management systems",
        icon: BarChart,
        details: ["User-friendly interface", "Role-based access", "Real-time analytics"]
      }
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    benefits: [
      "Increased online presence",
      "Improved customer engagement",
      "Higher conversion rates",
      "24/7 business availability"
    ],
    process: [
      "Discovery & Planning",
      "Design & Prototyping",
      "Development",
      "Testing & Quality Assurance",
      "Launch & Maintenance"
    ],
    faqs: [
      {
        question: "How long does web development take?",
        answer: "Typically 4-8 weeks depending on complexity and requirements."
      },
      {
        question: "Do you provide maintenance after launch?",
        answer: "Yes, we offer various maintenance packages to keep your site updated and secure."
      }
    ],
    accentColor: "#43e97b",
    isPremium: false,
    startingPrice: "$2,000",
    priceRange: "$2,000 - $15,000+",
    deliveryTime: "4-8 weeks"
  },
  {
    id: 2,
    slug: "medical-digital-solutions",
    title: "Medical Digital Solutions",
    subtitle: "Premium specialized service",
    icon: Stethoscope,
    description: "Digital tools designed specifically for clinics, hospitals, and healthcare providers.",
    shortDescription: "Digital solutions for healthcare providers and clinics",
    features: [
      "Appointment, patient & clinic management systems",
      "Medical websites & booking platforms",
      "Secure, privacy-focused architecture"
    ],
    detailedFeatures: [
      {
        title: "Patient Management System",
        description: "Comprehensive system for managing patient records and appointments",
        icon: Users,
        details: ["Appointment scheduling", "Medical records", "Billing integration"]
      },
      {
        title: "Telemedicine Platform",
        description: "Secure video consultation and remote patient monitoring",
        icon: Video,
        details: ["HIPAA compliant", "Secure video calls", "Prescription management"]
      },
      {
        title: "Medical Website Development",
        description: "Professional websites designed specifically for medical practices",
        icon: Stethoscope,
        details: ["Patient education content", "Online booking", "Doctor profiles"]
      }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA Compliance"],
    benefits: [
      "Improved patient experience",
      "Streamlined operations",
      "Enhanced data security",
      "24/7 patient access"
    ],
    process: [
      "Requirements Analysis",
      "Compliance Planning",
      "Development & Testing",
      "Staff Training",
      "Launch & Support"
    ],
    faqs: [
      {
        question: "Are your medical solutions HIPAA compliant?",
        answer: "Yes, we build all medical solutions with HIPAA compliance as a top priority."
      },
      {
        question: "Can you integrate with existing medical software?",
        answer: "Yes, we can integrate with most popular medical software systems."
      }
    ],
    accentColor: "#667eea",
    isPremium: true,
    startingPrice: "$10,000",
    priceRange: "$10,000 - $50,000+",
    deliveryTime: "8-16 weeks"
  },
  {
    id: 3,
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    subtitle: "Sell smarter online",
    icon: ShoppingCart,
    description: "Custom online stores built for performance, conversion, and scalability.",
    shortDescription: "Custom online stores for optimal sales performance",
    features: [
      "Storefronts with React, Next.js & Shopify",
      "Payment gateway integrations",
      "Inventory, orders & customer management"
    ],
    detailedFeatures: [
      {
        title: "E-commerce Store Development",
        description: "Custom online stores built from the ground up",
        icon: ShoppingBag,
        details: ["Custom design", "Product management", "Shopping cart"]
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing with multiple gateway options",
        icon: Lock,
        details: ["Stripe/PayPal integration", "Secure transactions", "Multiple currencies"]
      },
      {
        title: "Inventory Management",
        description: "Comprehensive inventory and order tracking system",
        icon: Database,
        details: ["Stock management", "Order tracking", "Customer database"]
      }
    ],
    technologies: ["React", "Next.js", "Shopify", "Stripe", "Node.js"],
    benefits: [
      "Increased sales conversion",
      "24/7 global store access",
      "Automated order processing",
      "Scalable infrastructure"
    ],
    process: [
      "Market Analysis",
      "Store Design",
      "Development & Integration",
      "Testing & Optimization",
      "Launch & Marketing"
    ],
    faqs: [
      {
        question: "Which e-commerce platforms do you work with?",
        answer: "We work with custom solutions using React/Next.js as well as Shopify store setups."
      },
      {
        question: "Do you handle payment gateway setup?",
        answer: "Yes, we handle full payment gateway integration and configuration."
      }
    ],
    accentColor: "#f59e0b",
    isPremium: false,
    startingPrice: "$3,000",
    priceRange: "$3,000 - $25,000+",
    deliveryTime: "6-10 weeks"
  },
  {
    id: 4,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Cross-platform mobile apps",
    icon: Smartphone,
    description: "High-quality mobile applications for iOS and Android, built for engagement.",
    shortDescription: "Cross-platform mobile apps for iOS and Android",
    features: [
      "Cross-platform mobile app development",
      "Real-time features & API-driven systems",
      "App store deployment & maintenance"
    ],
    detailedFeatures: [
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications",
        icon: Smartphone,
        details: ["iOS & Android", "User-friendly design", "Push notifications"]
      },
      {
        title: "Real-time Features",
        description: "Live updates and real-time functionality",
        icon: Zap,
        details: ["Live chat", "Real-time updates", "Notifications"]
      },
      {
        title: "App Store Deployment",
        description: "Full app store submission and management",
        icon: Cloud,
        details: ["App store submission", "Update management", "Store optimization"]
      }
    ],
    technologies: ["React Native", "Flutter", "Firebase", "iOS SDK", "Android SDK"],
    benefits: [
      "Reach mobile users",
      "Enhanced customer engagement",
      "Offline functionality",
      "Push notification capabilities"
    ],
    process: [
      "App Concept & Planning",
      "UI/UX Design",
      "Development",
      "Testing & QA",
      "App Store Deployment"
    ],
    faqs: [
      {
        question: "Do you develop native or cross-platform apps?",
        answer: "We primarily use React Native for cross-platform development, which works on both iOS and Android."
      },
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we handle the complete app store submission process for both Apple App Store and Google Play."
      }
    ],
    accentColor: "#0ea5e9",
    isPremium: false,
    startingPrice: "$5,000",
    priceRange: "$5,000 - $40,000+",
    deliveryTime: "8-14 weeks"
  },
  {
    id: 5,
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Smart business automation",
    icon: Cpu,
    description: "AI-powered tools and automation workflows that streamline daily operations.",
    shortDescription: "AI solutions and automation for business efficiency",
    features: [
      "AI chatbots & assistants",
      "Automated data processing & reporting",
      "Workflow automation for CRM & operations"
    ],
    detailedFeatures: [
      {
        title: "AI Chatbot Development",
        description: "Intelligent chatbots for customer service and support",
        icon: MessageSquare,
        details: ["Natural language processing", "Multi-platform", "24/7 support"]
      },
      {
        title: "Business Process Automation",
        description: "Custom automation systems to streamline your workflows",
        icon: Zap,
        details: ["Workflow automation", "API integration", "Real-time analytics"]
      },
      {
        title: "Data Processing Automation",
        description: "AI-powered data analysis and reporting systems",
        icon: Database,
        details: ["Data extraction", "Analysis automation", "Report generation"]
      }
    ],
    technologies: ["Python", "TensorFlow", "OpenAI API", "Node.js", "Docker"],
    benefits: [
      "Increased efficiency",
      "Reduced operational costs",
      "24/7 automated support",
      "Data-driven insights"
    ],
    process: [
      "AI Strategy Development",
      "Prototype & MVP",
      "Development & Training",
      "Integration & Deployment",
      "Monitoring & Optimization"
    ],
    faqs: [
      {
        question: "Can AI solutions work with my existing systems?",
        answer: "Yes, we design AI solutions to integrate seamlessly with your current infrastructure."
      },
      {
        question: "Do you provide ongoing AI model training?",
        answer: "Yes, we offer maintenance packages that include regular model updates and training."
      }
    ],
    accentColor: "#8b5cf6",
    isPremium: false,
    startingPrice: "$5,000",
    priceRange: "$5,000 - $30,000+",
    deliveryTime: "6-12 weeks"
  },
  {
    id: 6,
    slug: "it-consulting",
    title: "IT Consulting",
    subtitle: "Strategic technical guidance",
    icon: Lightbulb,
    description: "Expert advisory to help you make the right technical and digital decisions.",
    shortDescription: "Expert technical guidance and strategy",
    features: [
      "Architecture & system planning",
      "Technology stack recommendations",
      "Digital transformation strategy"
    ],
    detailedFeatures: [
      {
        title: "Technical Architecture",
        description: "System design and infrastructure planning",
        icon: Code,
        details: ["System architecture", "Scalability planning", "Security design"]
      },
      {
        title: "Technology Strategy",
        description: "Guidance on technology stack and tools",
        icon: TrendingUp,
        details: ["Stack recommendations", "Tool evaluation", "Cost optimization"]
      },
      {
        title: "Digital Transformation",
        description: "Strategic planning for digital modernization",
        icon: Rocket,
        details: ["Process analysis", "Implementation roadmap", "Change management"]
      }
    ],
    technologies: ["Architecture Design", "Cloud Solutions", "DevOps", "Security", "Analytics"],
    benefits: [
      "Informed technology decisions",
      "Cost optimization",
      "Future-proof solutions",
      "Reduced implementation risks"
    ],
    process: [
      "Needs Assessment",
      "Current State Analysis",
      "Strategy Development",
      "Implementation Planning",
      "Ongoing Advisory"
    ],
    faqs: [
      {
        question: "What types of businesses do you consult for?",
        answer: "We work with businesses of all sizes, from startups to established enterprises."
      },
      {
        question: "Do you provide ongoing consulting support?",
        answer: "Yes, we offer retainer-based consulting for continuous strategic guidance."
      }
    ],
    accentColor: "#ef4444",
    isPremium: false,
    startingPrice: "$150/hr",
    priceRange: "Project-based or hourly",
    deliveryTime: "Flexible"
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return services.map(service => ({ params: { slug: service.slug } }));
};
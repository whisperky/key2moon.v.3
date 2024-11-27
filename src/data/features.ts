export interface SlideProps {
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    p?: string;
  };
  isActive?: boolean;
}

export interface StudyProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export interface CustomerProps {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export interface SolutionProps {
  title: string;
  description: string;
  image: string;
  evaluation: {
    name: string;
    role: string;
    avatar: string;
    description: string;
    comment: string;
  };
  icons: {
    yellow: {
      size: string;
      top?: string;
      left?: string;
      right?: string;
      bottom?: string;
    };
    pink: {
      size: string;
      bottom?: string;
      right?: string;
      top?: string;
      left?: string;
    };
  };
}

export interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: string;
  highlight: string;
  color1: string;
  color2: string;
}

export interface ProcessStepProps {
  id: string;
  title: string;
  description: string;
}

export interface ResourceProps {
  title: string;
  description: string;
  image: string;
}

export const slides: SlideProps[] = [
  {
    title: "Smart Contract Development",
    description:
      "We specialize in developing secure and efficient smart contracts for DeFi protocols, NFT marketplaces, and decentralized applications. Our expertise ensures your blockchain solutions are reliable and scalable.",
    icon: {
      src: "/img/icons/code.png",
      alt: "Smart Contract Development",
      p: "12px",
    },
    isActive: true,
  },
  {
    title: "DeFi Protocol Development",
    description:
      "We design and implement secure DeFi protocols, from AMMs to lending platforms. Our comprehensive solutions prioritize security, efficiency, and user experience while ensuring robust tokenomics and market stability.",
    icon: {
      src: "/img/icons/dashboard.png",
      alt: "DeFi Protocol Development",
      p: "13px",
    },
  },
  {
    title: "NFT Platform Development",
    description:
      "We deliver end-to-end NFT marketplace solutions with advanced features like lazy minting, royalty management, and multi-chain support. Our platforms ensure secure trading and optimal user experience.",
    icon: {
      src: "/img/icons/code.png",
      alt: "NFT Platform Development",
      p: "12px",
    },
  },
  {
    title: "Web3 Integration Services",
    description:
      "We seamlessly integrate Web3 capabilities into existing systems, enabling businesses to leverage blockchain technology. Our solutions ensure smooth transitions while maintaining security and performance.",
    icon: {
      src: "/img/icons/code.png",
      alt: "Web3 Integration Services",
      p: "12px",
    },
  },
  {
    title: "dApp Development",
    description:
      "We create sophisticated decentralized applications that harness blockchain's full potential. Our dApps feature intuitive interfaces, robust smart contracts, and seamless Web3 wallet integration.",
    icon: {
      src: "/img/icons/mobile.png",
      alt: "dApp Development",
      p: "8px",
    },
  },
];

export const customers: CustomerProps[] = [
  {
    name: "Alex Thompson",
    role: "CTO, DeFiTrade Protocol",
    avatar: "/img/avatars/avatar-1.png",
    description:
      "Key2Moon Solutions delivered exceptional smart contract development for our DeFi protocol. Their expertise in blockchain security and optimization was crucial to our successful launch. They're truly leaders in the Web3 space.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, NFT Marketplace",
    avatar: "/img/avatars/avatar-2.png",
    description:
      "Working with Key2Moon Solutions transformed our NFT platform vision into reality. Their deep understanding of blockchain technology and NFT standards helped us create a seamless marketplace that our users love.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, BlockFin Solutions",
    avatar: "/img/avatars/avatar-3.png",
    description:
      "Key2Moon Solutions expertly guided our transition from traditional finance to Web3. Their team's technical expertise and professional approach made the integration process smooth and efficient.",
  },
  {
    name: "Lisa Wang",
    role: "Lead Developer, GameFi Project",
    avatar: "/img/avatars/avatar-4.png",
    description:
      "The team at Key2Moon Solutions demonstrated exceptional skill in developing our GameFi smart contracts. Their attention to security and performance optimization exceeded our expectations.",
  },
  {
    name: "David Park",
    role: "CTO, Blockchain Enterprise",
    avatar: "/img/avatars/avatar-5.png",
    description:
      "Key2Moon Solutions provided outstanding blockchain consulting and development services. Their expertise in cross-chain solutions and enterprise integration made them the perfect partner for our project.",
  },
];

export const studies: StudyProps[] = [
  {
    title: "DeFi Protocol Development for TokenSwap",
    description:
      "Developed a cutting-edge decentralized exchange protocol featuring automated market making (AMM) and yield farming capabilities. The protocol processes over $10M in daily trading volume and has attracted more than 50,000 unique users. Our implementation included innovative features like flash loans, multi-token pools, and advanced security measures to protect user funds.",
    image: "/img/studies/study-1.jpg",
    color: "#E7DAED",
  },
  {
    title: "NFT Marketplace for Digital Artists",
    description:
      "Created a specialized NFT marketplace that enables artists to mint, showcase, and trade their digital artworks. The platform features lazy minting, royalty distribution, and cross-chain compatibility. Since launch, the marketplace has facilitated over 100,000 NFT transactions and helped artists earn more than $5M in primary and secondary sales.",
    image: "/img/studies/study-2.jpg",
    color: "#F1F2FF",
  },
  {
    title: "Web3 Integration for Enterprise",
    description:
      "Helped a traditional finance company transition to Web3 by implementing blockchain-based identity verification and asset tokenization. The solution reduced KYC processing time by 80% and enabled secure, transparent tracking of digital assets. The platform now handles over 1 million tokenized assets and serves 200,000+ users globally.",
    image: "/img/studies/study-3.jpg",
    color: "#F0FFF7",
  },
];

export const solutions: SolutionProps[] = [
  {
    title: "Expert Blockchain Development Team",
    description:
      "Access our specialized team of blockchain developers, smart contract auditors, and Web3 architects. We bring years of DeFi and NFT development experience to ensure your project's success in the decentralized ecosystem.",
    image: "/img/solutions/solution-1.png",
    evaluation: {
      name: "Alex Chen",
      role: "CTO, DeFiTrade",
      avatar: "/img/avatars/avatar-sm-1.png",
      description:
        "Their blockchain expertise helped us launch our DeFi protocol ahead of schedule.",
      comment:
        "Key2Moon's smart contract development team delivered exceptional quality. Their security-first approach and deep understanding of DeFi mechanics were crucial to our success.",
    },
    icons: {
      yellow: {
        size: "64px",
        top: "-32px",
        left: "-32px",
      },
      pink: {
        size: "32px",
        bottom: "-16px",
        left: "50%",
      },
    },
  },
  {
    title: "Comprehensive Web3 Solutions",
    description:
      "From smart contract development to full-stack dApp implementation, we provide end-to-end Web3 solutions. Our expertise spans multiple blockchain networks, ensuring your project leverages the best technology stack.",
    image: "/img/solutions/solution-2.png",
    evaluation: {
      name: "Sarah Johnson",
      role: "Founder, NFTArtSpace",
      avatar: "/img/avatars/avatar-sm-2.png",
      description: "They transformed our NFT marketplace vision into reality.",
      comment:
        "Key2Moon delivered a robust NFT platform that exceeded our expectations. Their technical expertise in smart contracts and frontend development created a seamless user experience.",
    },
    icons: {
      yellow: {
        size: "64px",
        bottom: "-32px",
        left: "20%",
      },
      pink: {
        size: "32px",
        top: "-12px",
        right: "-12px",
      },
    },
  },
  {
    title: "Enterprise Blockchain Integration",
    description:
      "We help traditional businesses transition to Web3 with minimal disruption. Our team specializes in integrating blockchain solutions with existing systems while ensuring security and scalability.",
    image: "/img/solutions/solution-3.png",
    evaluation: {
      name: "Michael Rodriguez",
      role: "CEO, FinTech Solutions",
      avatar: "/img/avatars/avatar-sm-3.png",
      description:
        "Seamless integration of blockchain technology into our existing infrastructure.",
      comment:
        "Key2Moon's expertise in both traditional and blockchain technologies made our transition to Web3 smooth and efficient. Their team's guidance was invaluable throughout the process.",
    },
    icons: {
      yellow: {
        size: "39px",
        bottom: "-16px",
        left: "-16px",
      },
      pink: {
        size: "39px",
        top: "-16px",
        left: "50%",
      },
    },
  },
];

export const serviceFeatures: ServiceFeatureProps[] = [
  {
    title: "Web3 First Development",
    description:
      "As blockchain specialists, we prioritize Web3 integration from day one. Our projects are driven by experienced blockchain developers who ensure seamless integration with modern Web3 technologies.",
    icon: "/img/icons/rocket.png",
    highlight: "Web3 first",
    color1: "#29272E",
    color2: "#27272E",
  },
  {
    title: "Smart Contract Development",
    description:
      "Our team specializes in writing secure, efficient smart contracts. We follow best practices and conduct thorough audits to ensure your blockchain applications are reliable and scalable.",
    icon: "/img/icons/code.png",
    highlight: "Security first",
    color1: "#68DBF2",
    color2: "#509CF5",
  },
  {
    title: "DeFi & NFT Expertise",
    description:
      "With deep experience in DeFi protocols and NFT marketplaces, we help you navigate the complexities of decentralized finance and digital asset management.",
    icon: "/img/icons/chart.png",
    highlight: "DeFi experts",
    color1: "#FF92AE",
    color2: "#FF3D9A",
  },
  {
    title: "Blockchain Security",
    description:
      "Security is paramount in blockchain development. Our comprehensive security measures include smart contract audits, penetration testing, and secure key management protocols.",
    icon: "/img/icons/shield.png",
    highlight: "Security",
    color1: "#67E9F1",
    color2: "#24E795",
  },
  {
    title: "Cross-chain Solutions",
    description:
      "We build bridges between different blockchain networks, enabling seamless interoperability and expanding your project's reach across multiple chains.",
    icon: "/img/icons/check.png",
    highlight: "Multi-chain",
    color1: "#FFEF5E",
    color2: "#F7936F",
  },
  {
    title: "Web3 Integration Services",
    description:
      "We help traditional businesses transition to Web3, integrating blockchain technology with existing systems while ensuring optimal performance and user experience.",
    icon: "/img/icons/cube.png",
    highlight: "Integration",
    color1: "#F76680",
    color2: "#57007B",
  },
];

export const processSteps: ProcessStepProps[] = [
  {
    id: "#1",
    title: "Requirements Analysis",
    description:
      "We thoroughly analyze your blockchain needs, token economics, and technical requirements to create a comprehensive development strategy.",
  },
  {
    id: "#2",
    title: "Architecture Design",
    description:
      "We design the optimal blockchain architecture by selecting appropriate protocols and frameworks to ensure scalability and security.",
  },
  {
    id: "#3",
    title: "Smart Contract",
    description:
      "Our team develops secure and efficient smart contracts using industry best practices and proven design patterns for robust solutions.",
  },
  {
    id: "#4",
    title: "Testing & Auditing",
    description:
      "We conduct comprehensive testing and third-party security audits to ensure your smart contracts are secure and ready for deployment.",
  },
  {
    id: "#5",
    title: "Frontend Integration",
    description:
      "Our developers create user-friendly Web3 interfaces that connect seamlessly with your blockchain infrastructure and smart contracts.",
  },
  {
    id: "#6",
    title: "Deployment & Support",
    description:
      "We manage the mainnet deployment process and provide ongoing technical support to ensure your blockchain solution runs smoothly.",
  },
];

export const resources: ResourceProps[] = [
  {
    title: "DeFi Development",
    description:
      "Building Secure and Scalable DeFi Protocols: A Comprehensive Guide",
    image: "/img/resources/resource-1.jpg",
  },
  {
    title: "Smart Contracts",
    description:
      "Best Practices for Smart Contract Development and Security Auditing",
    image: "/img/resources/resource-2.jpg",
  },
  {
    title: "NFT Platforms",
    description:
      "How to Create a Successful NFT Marketplace: From Concept to Launch",
    image: "/img/resources/resource-3.jpg",
  },
  {
    title: "Web3 Integration",
    description:
      "Enterprise Guide to Integrating Web3 Technologies with Legacy Systems",
    image: "/img/resources/resource-4.jpg",
  },
  {
    title: "Blockchain Scaling",
    description:
      "Advanced Techniques for Building High-Performance Blockchain Applications",
    image: "/img/resources/resource-5.jpg",
  },
];

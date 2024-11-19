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

export const slides: SlideProps[] = [
  {
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: {
      src: "/img/icons/code.png",
      alt: "Web Design & Development",
      p: "12px",
    },
    isActive: true,
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: {
      src: "/img/icons/dashboard.png",
      alt: "Software Testing Service",
      p: "13px",
    },
  },
  {
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: {
      src: "/img/icons/code.png",
      alt: "Web Design & Development",
      p: "12px",
    },
  },
  { 
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: {
      src: "/img/icons/code.png",
      alt: "Web Design & Development",
      p: "12px",
    },
  },
  {
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: {
      src: "/img/icons/mobile.png",
      alt: "Mobile App Development",
      p: "8px",
    },
  },
];
export const customers: CustomerProps[] = [
  {
    name: "Romeena De Silva",
    role: "Jonet Cosmetics",
    avatar: "/img/avatars/avatar-1.png",
    description:
      "Without any doubt I recommend KeY2Moon Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO, The Tech Hub",
    avatar: "/img/avatars/avatar-2.png",
    description:
      "Without any doubt I recommend KeY2Moon Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far.",
  },
  {
    name: "Maria Smith",
    role: "CEO, The Health Hub",
    avatar: "/img/avatars/avatar-3.png",
    description:
      "Without any doubt I recommend KeY2Moon Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    avatar: "/img/avatars/avatar-4.png",
    description:
      "Without any doubt I recommend KeY2Moon Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    avatar: "/img/avatars/avatar-5.png",
    description:
      "Without any doubt I recommend KeY2Moon Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
];


export const studies: StudyProps[] = [
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/img/studies/study-1.jpg",
    color: "#E7DAED",
  },
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/img/studies/study-2.jpg",
    color: "#F1F2FF",
  },
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/img/studies/study-3.jpg",
    color: "#F0FFF7",
  },
];

export const solutions: SolutionProps[] = [
  {
    title: "Build the right team to scale",
    description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers",
    image: "/img/solutions/solution-1.png",
    evaluation: {
      name: "Romeena De Silva",
      role: "Jonet Cosmetics",
      avatar: "/img/avatars/avatar-sm-1.png",
      description: "Our delivery model helps you cut costs and deliver within budget.",
      comment: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
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
    title: "Build the right team to scale",
    description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers",
    image: "/img/solutions/solution-2.png",
    evaluation: {
      name: "Romeena De Silva",
      role: "Jonet Cosmetics",
      avatar: "/img/avatars/avatar-sm-2.png",
      description: "Our delivery model helps you cut costs and deliver within budget.",
      comment: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
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
    title: "Build the right team to scale",
    description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers",
    image: "/img/solutions/solution-3.png",
    evaluation: {
      name: "Romeena De Silva",
      role: "Jonet Cosmetics",
      avatar: "/img/avatars/avatar-sm-3.png",
      description: "Our delivery model helps you cut costs and deliver within budget.",
      comment: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
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
    title: "UX Driven Engineering",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/img/icons/rocket.png",
    highlight: "UX first",
    color1: "#29272E",
    color2: "#27272E"
  },
  {
    title: "Developing Shared Understanding",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/img/icons/code.png",
    highlight: "UX first",
    color1: "#68DBF2",
    color2: "#509CF5"
  },
  {
    title: "Proven Experience and Expertise",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/img/icons/chart.png",
    highlight: "UX first",
    color1: "#FF92AE",
    color2: "#FF3D9A"
  },
  {
    title: "Security & Intellectual Property (IP)",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/img/icons/shield.png",
    highlight: "UX first",
    color1: "#67E9F1",
    color2: "#24E795"
  },
  {
    title: "Code Reviews",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/img/icons/check.png",
    highlight: "UX first",
    color1: "#FFEF5E",
    color2: "#F7936F"
  },
  {
    title: "Quality Assurance & Testing",
    description: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/img/icons/cube.png",
    highlight: "UX first",
    color1: "#F76680",
    color2: "#57007B"
  }
];

export const processSteps: ProcessStepProps[] = [
  {
    id: "#1",
    title: "Assemble the right team",
    description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: "#2",
    title: "Sprint planning",
    description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: "#3",
    title: "Tech architecture",
    description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
  },
  {
    id: "#4",
    title: "Standups & weekly demos",
    description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: "#5",
    title: "Code reviews",
    description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
  },
  {
    id: "#6",
    title: "Iterative delivery",
    description: "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

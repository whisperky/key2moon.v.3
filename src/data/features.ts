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

export interface CustomerProps {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

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

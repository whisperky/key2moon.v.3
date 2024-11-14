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
];

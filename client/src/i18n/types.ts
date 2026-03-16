export type Locale = "en" | "zh";

export type BiText = { en: string; zh: string };

export interface Translations {
  nav: {
    about: string;
    resume: string;
    linkedin: string;
    comingSoon: string;
    copyright: string;
  };
  hero: {
    tagline: string;
    tagline2: string;
    subtitle: string;
  };
  projectDetail: {
    backToProjects: string;
    projectNotFound: string;
    backToHome: string;
    year: string;
    role: string;
    tools: string;
    processAndVisuals: string;
    inProgress: string;
  };
  about: {
    sectionLabel: string;
    bio: string[];
    toolsLabel: string;
  };
  contact: {
    sectionLabel: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successToast: string;
    resumeHandle: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    goHome: string;
  };
}

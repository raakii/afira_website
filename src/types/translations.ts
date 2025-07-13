export type ServiceStep = {
  id: number | string;
  title: string;
  desc: string;
};

export type BlogDataItem = {
  id: number | string;
  image: string;
  tag: string;
  title: string;
  desc: string;
};

export type EducationArticle = {
  title: string;
  date: string;
  intro: string;
  tips: string[];
};

export type ClientTestimonial = {
  image: string;
  name: string;
  title: string;
  desc: string;
};

export type EducationTranslations = {
  header: {
    small: string;
    title: string;
    breadcrumb: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  articles: EducationArticle[];
  blogData: BlogDataItem[];
};

export type ServicesTranslations = {
  breadcrumb: string;
  subtitle: string;
  title: string;
  steps: ServiceStep[];
};

export type ClientsTranslations = {
  title: string;
  subtitle: string;
  testimonials: ClientTestimonial[];
};

export type RootTranslations = {
  nav: Record<string, string>;
  home: Record<string, string>;
  cta: Record<string, string>;
  hero: Record<string, unknown>;
  blog: Record<string, unknown>;
  about: Record<string, unknown>;
  services: ServicesTranslations;
  education: EducationTranslations;
  clients: ClientsTranslations;
  // ...add other sections as needed
}; 
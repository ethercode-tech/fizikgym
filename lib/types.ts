export type ScheduleItem = {
  weekday: string;
  ranges: string[];
  note?: string;
  isClosed?: boolean;
};

export type PlanItem = {
  id: string;
  name: string;
  description: string;
  priceLabel?: string;
  ctaLabel: string;
};

export type TestimonialItem = {
  author: string;
  quote: string;
  source: string;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LandingPayload = {
  gym: {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    whatsappNumber: string;
    address: {
      line1: string;
      neighborhood: string;
      city: string;
      province: string;
      country: string;
    };
    mapsUrl: string;
    social: {
      instagram: string;
      facebook: string;
    };
  };
  schedules: ScheduleItem[];
  plans: PlanItem[];
  testimonials: TestimonialItem[];
  images: GalleryImage[];
  faq: FaqItem[];
  seo: {
    title: string;
    description: string;
  };
  updatedAt: string;
};

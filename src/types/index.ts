export interface PracticeArea {
  title: string;
  slug: string;
  description: string;
  icon: JSX.Element;
  detailedDescription: string[];
  cases: {
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
} 
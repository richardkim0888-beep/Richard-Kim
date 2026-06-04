export interface ChannelInfo {
  name: string;
  category: string;
  iconName: string;
  colorClass: string;
  bgClass: string;
  link: string;
}

export interface CourseInfo {
  title: string;
  description: string;
  badge?: string;
  iconName: string;
  colorClass: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export interface Achievement {
  value: string;
  label: string;
}

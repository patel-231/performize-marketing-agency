export type PageView = 'home' | 'work' | 'services' | 'insights' | 'about' | 'contact' | 'case-studies';

export interface ReportMetricTrend {
  period: string;
  results: number;
  reach: number;
  spent: number;
  cpr: number;
}

export interface CaseStudyReport {
  id: string;
  companyName: string;
  clientCode?: string;
  tagline: string;
  logo: string;
  darkLogo?: boolean;
  websiteLink?: string;
  totalCampaigns?: string;
  category: 'E-commerce' | 'D2C' | 'Lead Generation' | 'Brand Awareness';
  industry: string;
  reportingPeriod: string;
  campaignObjective: string;
  performanceOverview: string;
  highlightStat: string;
  metrics: {
    totalResults: string;
    totalResultsLabel: string;
    totalReach: string;
    averageFrequency: string;
    averageCostPerResult: string;
    totalBudget: string;
    totalAmountSpent: string;
    budgetUtilization?: string;
    remainingBudget?: string;
  };
  charts: {
    trends: ReportMetricTrend[];
  };
  screenshot?: {
    image?: string;
    caption: string;
    dimensions?: string;
    anonymizedAdSets: {
      label: string;
      results: string;
      cpr: string;
      spend: string;
      reach: string;
    }[];
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  aspectRatio: string;
  services: string[];
  results: {
    label: string;
    value: string;
    context: string;
  }[];
  challenge: string;
  solution: string;
  featured: boolean;
  websiteUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  coreTech: string[];
  impactMetric: string;
  impactLabel: string;
  whatsappMessage?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  servicesNeeded: string[];
  budgetRange: string;
  projectOverview: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
  color: string;
}

export interface ClientBrand {
  name: string;
  category?: string;
  logo: string;
  darkBg?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

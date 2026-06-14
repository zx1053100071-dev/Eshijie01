/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'brand' | 'good-fields' | 'big-boss';
  tags: string[];
  description: string;
  details: {
    role: string;
    team: string;
    software: string;
    date: string;
  };
  imageType: 'vector' | 'geometry' | 'abstract' | 'chinese-ink' | 'merchant-comic';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  aspectRatio: 'landscape' | 'portrait' | 'square';
  image?: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  expandDetails: string[];
}

export interface CompanyInfo {
  name: string;
  englishName: string;
  founded: string;
  slogan: string;
  quote: string;
  quoteAuthor: string;
  introParagraphs: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  wechat: string;
  mapEmbed?: string;
}

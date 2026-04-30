import type { ComponentType } from 'react';
import type { LucideIcon } from 'lucide-react';

export type Locale = 'es' | 'en';
export type ThemeMode = 'light' | 'dark';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface ProgressItem {
  label: string;
  value: number;
}

export interface KnowledgeCardData {
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export interface EducationCardData {
  institution: string;
  dates: string;
  degree: LocalizedText;
  description: LocalizedText;
}

export interface ProjectData {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  github?: string;
  demo?: string;
  stack: string[];
  impact: LocalizedText;
  challenge: LocalizedText;
}

export interface SocialLinkData {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}
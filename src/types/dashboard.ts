import type { LucideIcon } from 'lucide-react';

export interface AmbassadorProfile {
  name: string;
  email: string;
  phone: string;
  university: string;
  department: string;
  academicLevel: string;
  state: string;
  motivation: string;
  socialMediaLinks: string;
}

export interface ReferralProgress {
  current: number;
  goal: number;
}

export interface DashboardStat {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'link';
  url: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'past';
}

export interface Badge {
  id: string;
  title: string;
  icon: LucideIcon;
  earned: boolean;
}

export interface RewardItem {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
}
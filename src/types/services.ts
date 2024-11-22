import { LucideIcon } from 'lucide-react';

export interface Solution {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface ServiceDetails {
  intro: string;
  solutions: Solution[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: ServiceDetails;
}
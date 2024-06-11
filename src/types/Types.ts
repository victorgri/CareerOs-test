export interface Quests {
  quests: Quest[];
}

export interface Quest {
  id: string;
  user_id: string;
  type: string;
  status: string;
  experience_points: number;
  due_date: string;
  company: Company;
  contact: Contact;
  job: Job;
  created_at: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  logo_url: string;
}

export interface Contact {}

export interface Job {}

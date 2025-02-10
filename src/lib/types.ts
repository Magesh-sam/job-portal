export type Job = {
  id: string;
  jobTitle: string;
  company: string;
  locations: string[];
  description: string;
  shortDescription: string;
  skills: string[];
  salaryRangeMin: number;
  salaryRangeMax: number;
  experienceMin: number;
  experienceMax: number;

};

export interface ProvidersProps {
  children: React.ReactNode;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  focus: string;
  status: string;
  priority: "Flagship" | "Algorithmic" | "Support";
  folder: string;
  problem: string;
  outcome: string;
  highlights: string[];
  nextSteps: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  icon?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type Exploration = {
  title: string;
  description: string;
  tags: string[];
};

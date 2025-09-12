export interface Theme {
  current: 'light' | 'dark';
}

export interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
}

export interface ContactProps {
  theme: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
  technologies: string[];
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
}
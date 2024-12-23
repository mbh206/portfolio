export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BiteOff - Web App',
    description:
      'BiteOff is a platform designed to help users explore, share, and experience unique culinary offerings. Whether it’s discovering a hidden gem of a local restaurant or connecting with fellow food enthusiasts, BiteOff brings people together over their love of great food and saving money. Users can browse local special meal offers, rate and review special offers, and connect with others who want to share a bite.',
    image: '',
    link: 'https://biteoff.net',
    tech: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'HTML',
      'SCSS(Bootstrap)',
      'PostgreSQL',
      'Heroku',
    ],
  },
  {
    id: 2,
    title: 'Boardgame Mania - Web App',
    description:
      'BoardGame Mania is a marketplace web application that allows board game enthusiasts to rent out their personal game collections to others. This platform connects game owners with those looking to try new board games without making a full purchase, fostering a community of shared fun and discovery.',
    image: '',
    link: 'https://biteoff.net',
    tech: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'HTML',
      'SCSS(Bootstrap)',
      'PostgreSQL',
      'Heroku',
    ],
  },
];

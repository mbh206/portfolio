// data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tech: string[];
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cafe Ordering System',
    description:
      'This mock cafe order system is a quick build to showcase my React and TypeScript skills with a clean user-friendly UI.',
    image:
      'https://www.markh.design/wp-content/uploads/2025/07/cafeorderingapp-scaled.png',
    link: 'https://cafe-system.netlify.app/',
    github: 'https://github.com/mbh206/mf-cafe-ordering-system',
    tech: ['React', 'TypeScript', 'Tailwind', 'Netlify'],
    skills: [
      'Component Architecture',
      'Form Handling & Validation',
      'State Management (Context + Reducer)',
      'Responsive Design',
      'Accessibility (aria-labels)',
    ],
  },
  {
    id: 2,
    title: 'Portfolio',
    description:
      'This portfolio is a project in itself highlighting my ability to dive into a new framework and build something interesting and functional.',
    image:
      'https://www.markh.design/wp-content/uploads/2025/04/portfolio-scaled.png',
    link: 'https://markharris.me/',
    github: 'https://github.com/mbh206/portfolio',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Netlify'],
    skills: [
      'Static & Dynamic Rendering (getStaticProps)',
      'SEO Optimization (meta tags, sitemap)',
      'Dark Mode Toggle',
      'Modal & Keyboard Accessibility',
      'Performance Optimization (Image & Code-splitting)',
    ],
  },
  {
    id: 3,
    title: 'Betabases',
    description:
      'Betabases is a modern web-based project and task management platform built with React and Firebase. It offers intuitive Kanban and list views, allowing teams to easily organize, track, and reorder tasks through a drag-and-drop interface. The application supports real-time collaboration with features such as friend requests, connections, and notifications, ensuring that all team members stay in sync. With a focus on responsive design, Betabases adapts seamlessly to both desktop and mobile devices, providing a user-friendly experience. Its robust integration with Firebase ensures secure authentication and data storage, making it an ideal tool for managing projects and boosting team productivity.',
    image: 'https://www.markh.design/wp-content/uploads/2025/02/betabses.png',
    link: 'https://betabases.com/',
    github: 'https://github.com/mbh206/betabase-react',
    tech: ['React', 'JavaScript', 'HTML', 'Tailwind', 'Firebase'],
    skills: [
      'Real-Time Data Sync (Firestore)',
      'Drag-and-Drop UI (react-dnd)',
      'Authentication & Authorization',
      'Responsive Layout (Grid & Flex)',
      'Notifications (Cloud Functions)',
    ],
  },
  {
    id: 4,
    title: 'Shipping Dashboard',
    description:
      "The Shipping Dashboard is a React application created as a personal learning project to learn more about React Router and demonstrate my ability to use it in real-world applications. This dashboard simulates a comprehensive shipping management system, encompassing various modules. Each module is seamlessly accessible through distinct routes, leveraging React Router's powerful routing capabilities to facilitate intuitive navigation and enhance user experience.",
    image:
      'https://www.markh.design/wp-content/uploads/2025/01/shippingdash.png',
    link: 'https://shippingdashboard.netlify.app/',
    github: 'https://github.com/mbh206/shipping-dashboard',
    tech: ['React', 'JavaScript', 'HTML', 'Tailwind', 'Netlify'],
    skills: [
      'Client-Side Routing (React Router)',
      'Modular Component Design',
      'Responsive Tables & Cards',
      'State Management (useState + useEffect)',
      'Lazy Loading & Code Splitting',
    ],
  },
  {
    id: 5,
    title: 'BiteOff',
    description:
      'BiteOff is a platform designed to help users explore, share, and experience unique culinary offerings. Whether it’s discovering a hidden gem of a local restaurant or connecting with fellow food enthusiasts, BiteOff brings people together over their love of great food and saving money. Users can browse local special meal offers, rate and review special offers, and connect with others who want to share a bite.',
    image: 'https://www.markh.design/wp-content/uploads/2024/12/biteoff.png',
    link: 'https://www.biteoff.net',
    github: 'https://github.com/mbh206/biteoff',
    tech: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'PostgreSQL',
      'Heroku',
    ],
    skills: [
      'CRUD Operations',
      'REST API Integration',
      'Database Modeling (ActiveRecord)',
      'UI/UX Design',
      'Authentication (Devise)',
    ],
  },
  {
    id: 6,
    title: 'Boardgame Mania',
    description:
      'BoardGame Mania is a marketplace web application that allows board game enthusiasts to rent out their personal game collections to others. This platform connects game owners with those looking to try new board games without making a full purchase, fostering a community of shared fun and discovery.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/12/boardgamemania.png',
    link: 'https://boardgame-mania.onrender.com/',
    github: 'https://github.com/mbh206/boardgame-mania-app',
    tech: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'HTML',
      'Bootstrap',
      'PostgreSQL',
    ],
    skills: [
      'Marketplace Flow & UX',
      'CRUD Operations',
      'Database Modeling (ActiveRecord)',
      'Responsive Design',
      'Authentication & Authorization',
    ],
  },
  {
    id: 7,
    title: 'Reaction Dash - Timed Reaction Game',
    description:
      "Reaction Dash is a timed reaction training game that allows users to test their reaction 6 times per day. That's it.",
    image:
      'https://www.markh.design/wp-content/uploads/2025/05/reaction-dash.png',
    link: 'https://reaction-dash.vercel.app/',
    github: 'https://github.com/mbh206/reaction-dash',
    tech: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Next.js', 'Vercel'],
    skills: [
      'Game Logic Implementation',
      'State Management (useState)',
      'Local Storage Persistence',
    ],
  },
  {
    id: 8,
    title: 'Tenzies - Dice Rolling Game',
    description:
      'Tenzies is a simple React game where users try to get all dice to be the same in the fewest tries possible.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.16.21-AM.png',
    link: 'https://deluxe-crumble-bf97d1.netlify.app/',
    github: 'https://github.com/mbh206/tenzies-react-project',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Netlify'],
    skills: [
      'Game Logic Implementation',
      'State Management (useState)',
      'CSS Animations & Transitions',
      'Randomness & Algorithm',
      'Unit Testing (Jest)',
    ],
  },
  {
    id: 9,
    title: 'Simple Shopping List',
    description:
      'A simple shopping list using React to set items and delete them.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.17.11-AM.png',
    link: 'https://simple-shopping-list-markharris.netlify.app/',
    github: 'https://www.github.com/mbh206/',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Netlify'],
    skills: [
      'Local Storage Persistence',
      'State Management',
      'Form Handling',
      'CRUD Operations',
      'Responsive Design',
    ],
  },
  {
    id: 10,
    title: 'Online Delivery Order Form',
    description:
      'A test ordering page built in JavaScript, HTML, and CSS that allows users to add items to their cart and checkout.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.21.06-AM.png',
    link: 'https://glittery-mochi-2d3b20.netlify.app/',
    github: 'https://github.com/mbh206/restaurant-ordering-app',
    tech: ['JavaScript', 'HTML', 'CSS', 'Netlify'],
    skills: [
      'Cart State Management',
      'Form Validation',
      'DOM Manipulation',
      'UI/UX Design',
      'Responsive Layout',
    ],
  },
  {
    id: 11,
    title: 'Custom Chrome Homescreen',
    description:
      'A custom Chrome homescreen built with JavaScript, HTML, and CSS with personalized options based on location and an ever changing API background image.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.23.36-AM.png',
    link: 'https://candid-cannoli-a9b28a.netlify.app/',
    github: 'https://github.com/mbh206/chill-dash',
    tech: ['JavaScript', 'API', 'HTML', 'CSS', 'Netlify'],
    skills: [
      'Browser API Integration',
      'Dynamic Theming',
      'API Data Fetching',
      'PWA Support',
      'Responsive Design',
    ],
  },
  {
    id: 12,
    title: 'Unit Converter App',
    description:
      'Simple metric to imperial unit conversion app using JavaScript, HTML, and CSS.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.37.30-AM.png',
    link: 'https://mbh206.github.io/Unit-Converter/',
    github: 'https://github.com/mbh206/Unit-Converter',
    tech: ['JavaScript', 'API', 'HTML', 'CSS'],
    skills: [
      'Conversion Logic & Algorithms',
      'Controlled Inputs',
      'Error Handling & Validation',
      'Responsive Design',
      'DOM Manipulation',
    ],
  },
  {
    id: 13,
    title: 'Brand Color Generator',
    description:
      'Brand color generator returns a color pallette based on the chosen color and color scheme',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.51.30-AM.png',
    link: 'https://mbh206.github.io/color-scheme-gen/',
    github: 'https://github.com/mbh206/color-picker',
    tech: ['JavaScript', 'API', 'HTML', 'CSS'],
    skills: [
      'Color Theory Algorithm',
      'API Integration',
      'UI/UX Design',
      'Responsive Design',
      'Clipboard Copy Feature',
    ],
  },
  {
    id: 14,
    title: 'TinDog App',
    description: 'A Tinder clone for lonely pups.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.53.34-AM.png',
    link: 'https://mbh206.github.io/TinDog-App/',
    github: 'https://github.com/mbh206/TinDog-App',
    tech: ['JavaScript', 'HTML', 'CSS'],
    skills: [
      'Flexbox Layout',
      'CSS Transitions & Hover Effects',
      'Responsive Design',
      'UI/UX Design',
    ],
  },
  {
    id: 15,
    title: 'Twitter Clone',
    description: 'A Twitter clone, made back when it was still Twitter...',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.57.17-AM.png',
    link: 'https://mbh206.github.io/twitter-clone/',
    github: 'https://github.com/mbh206/twitter-clone',
    tech: ['JavaScript', 'HTML', 'CSS'],
    skills: [
      'DOM Manipulation',
      'Responsive Layout',
      'Event Handling',
      'CSS Flex/Grid',
    ],
  },
  {
    id: 16,
    title: 'Home Renovation Showcase',
    description:
      'This site was built a few years ago as a demo for my akiya home renovation.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-13-at-2.39.40-PM.png',
    link: 'https://homedemo.markh.design/',
    github: 'https://github.com/mbh206/renove-japan',
    tech: ['JavaScript', 'HTML', 'CSS'],
    skills: [
      'Static Site Design',
      'CSS Animations',
      'Performance Optimization',
      'Responsive Design',
    ],
  },
];

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
    title: 'Betabases - Web App',
    description:
      'Betabases is a modern web-based project and task management platform built with React and Firebase. It offers intuitive Kanban and list views, allowing teams to easily organize, track, and reorder tasks through a drag-and-drop interface. The application supports real-time collaboration with features such as friend requests, connections, and notifications, ensuring that all team members stay in sync. With a focus on responsive design, Betabases adapts seamlessly to both desktop and mobile devices, providing a user-friendly experience. Its robust integration with Firebase ensures secure authentication and data storage, making it an ideal tool for managing projects and boosting team productivity.',
    image: 'https://www.markh.design/wp-content/uploads/2025/02/betabses.png',
    link: 'https://betabases.com/',
    tech: [
      'React',
      'React Router',
      'JavaScript',
      'HTML',
      'CSS/Tailwind',
      'Firebase',
    ],
  },
  {
    id: 2,
    title: 'Shipping Dashboard - Web App',
    description:
      "The Shipping Dashboard is a React application created as a personal learning project to learn more about React Router and demonstrate my ability to use it in real-world applications. This dashboard simulates a comprehensive shipping management system, encompassing various modules. Each module is seamlessly accessible through distinct routes, leveraging React Router's powerful routing capabilities to facilitate intuitive navigation and enhance user experience.",
    image:
      'https://www.markh.design/wp-content/uploads/2025/01/shippingdash.png',
    link: 'https://shippingdashboard.netlify.app/',
    tech: ['React', 'React Router', 'JavaScript', 'HTML', 'CSS/Tailwind'],
  },
  {
    id: 3,
    title: 'BiteOff - Web App',
    description:
      'BiteOff is a platform designed to help users explore, share, and experience unique culinary offerings. Whether it’s discovering a hidden gem of a local restaurant or connecting with fellow food enthusiasts, BiteOff brings people together over their love of great food and saving money. Users can browse local special meal offers, rate and review special offers, and connect with others who want to share a bite.',
    image: 'https://www.markh.design/wp-content/uploads/2024/12/biteoff.png',
    link: 'https://www.biteoff.net',
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
    id: 4,
    title: 'Boardgame Mania - Web App',
    description:
      'BoardGame Mania is a marketplace web application that allows board game enthusiasts to rent out their personal game collections to others. This platform connects game owners with those looking to try new board games without making a full purchase, fostering a community of shared fun and discovery.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/12/boardgamemania.png',
    link: 'https://boardgame-mania.onrender.com/',
    tech: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'HTML',
      'SCSS(Bootstrap)',
      'PostgreSQL',
      'Render',
    ],
  },
  {
    id: 5,
    title: 'Tenzies - Dice Rolling Game',
    description:
      'Tenzies is a simple React game where users try to get all dice to be the same in the fewest tries possible.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.16.21-AM.png',
    link: 'https://deluxe-crumble-bf97d1.netlify.app/',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Netlify'],
  },
  {
    id: 6,
    title: 'Simple Shopping List',
    description:
      'A simple shopping list using React to set items and delete them.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.17.11-AM.png',
    link: 'https://simple-shopping-list-markharris.netlify.app/',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Netlify'],
  },
  {
    id: 7,
    title: 'Online Delivery Order Form',
    description:
      'A test ordering page built in JavaScript, HTML, and CSS that allows users to add items to their cart and checkout.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.21.06-AM.png',
    link: 'https://glittery-mochi-2d3b20.netlify.app/',
    tech: ['JavaScript', 'HTML', 'CSS', 'Netlify'],
  },
  {
    id: 8,
    title: 'Custom Chrome Homescreen',
    description:
      'A custom Chrome homescreen built with JavaScript, HTML, and CSS with personalized options based on location and an ever changing API background image.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.23.36-AM.png',
    link: 'https://candid-cannoli-a9b28a.netlify.app/',
    tech: ['JavaScript', 'API', 'HTML', 'CSS', 'Netlify'],
  },
  {
    id: 9,
    title: 'Unit Converter App',
    description:
      'Simple metric to imperial unit conversion app using JavaScript, HTML, and CSS.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.37.30-AM.png',
    link: 'https://mbh206.github.io/Unit-Converter/',
    tech: ['JavaScript', 'API', 'HTML', 'CSS'],
  },
  {
    id: 10,
    title: 'Brand Color Generator',
    description:
      'Brand color generator returns a color pallette based on the chosen color and color scheme',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.51.30-AM.png',
    link: 'https://mbh206.github.io/color-scheme-gen/',
    tech: ['JavaScript', 'API', 'HTML', 'CSS'],
  },
  {
    id: 11,
    title: 'TinDog App',
    description: 'A Tinder clone for lonely pups.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.53.34-AM.png',
    link: 'https://mbh206.github.io/TinDog-App/',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 12,
    title: 'Twitter Clone',
    description: 'A Twitter clone, made back when it was still Twitter...',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-15-at-9.57.17-AM.png',
    link: 'https://mbh206.github.io/twitter-clone/',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 13,
    title: 'Home Renovation Showcase',
    description:
      'This site was built a few years ago as a demo for my akiya home renovation.',
    image:
      'https://www.markh.design/wp-content/uploads/2024/05/Screenshot-2024-05-13-at-2.39.40-PM.png',
    link: 'https://homedemo.markh.design/',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
];

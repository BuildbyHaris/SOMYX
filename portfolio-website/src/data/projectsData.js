
import project1 from '../assets/project1.PNG';
import project2 from '../assets/project2.PNG';
import project3 from '../assets/project3.PNG';
import wordpress1 from '../assets/wordpress1.png';
import wordpress2 from '../assets/wordpress2.png';
import wordpress3 from '../assets/wordpress3.png';
import book3 from '../assets/book3.png';
import book2 from '../assets/book2.jpeg';
import book1 from '../assets/book1.jpeg';

export const projectsData = [
  {
    id: 1,
    category: 'BRANDING',
    title: 'AI & Business Automation Brand Identity',
    date: 'June 2026',
    description: 'A modern brand identity for an AI and business automation company featuring a custom logotype, clean typography, and a bold blue visual system. Designed to communicate innovation, reliability, and scalability across digital and print applications.',
    tags: ['ILLUSTRATOR', 'CREATIVE MIND', 'BRAND DESIGN', 'VECTOR ART'],
    image: project1 
  },
  {
    id: 2,
    category: 'WORDPRESS', // Fixed category to match filtering categories perfectly
    title: 'Premium Sauna Company Website',
    date: 'December 2025',
    description: 'Organized complex service offerings into a clear and intuitive navigation structure.Built credibility through project showcases, client testimonials, and commercial partnerships.',
    tags: ['WORDPRESS', 'ELEMENTOR PRO', 'PREMIUM THEMES', 'RESPONSIVE DESIGN'],
    image: wordpress3,
    liveUrl: 'https://saunabuilder.ca/',
  },
  {
    id: 3,
    category: 'BRANDING',
    title: 'Luxury Real Estate Brand Identity',
    date: 'May 2026',
    description: 'A luxury real estate brand identity featuring a custom monogram, refined typography, and a premium green and gold color palette. The branding was designed to communicate trust, sophistication, and professionalism across both print and digital applications.',
    tags: ['PHOTOSHOP', 'CANVA', 'PACKAGING', 'BRANDING'],
    image: project2 // Local imported file
  },
  {
    id: 4,
    category: 'BOOK DESIGN',
    title: 'World Country Explorer',
    date: 'Feb 2026',
    description: 'A Summer Tale of Christmas Joy is a heartwarming childrens storybook featuring custom illustrations, engaging page layouts, and vibrant visuals designed to create a magical reading experience for young audiences.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    image: book2,
    liveUrl: '/book2.pdf',
  },
  {
    id: 5,
    category: 'BRANDING',
    title: 'Premium Event Brand Identity',
    date: 'April 2026',
    description: 'A premium brand identity for a luxury event planning company featuring an elegant monogram, sophisticated typography, and a timeless black-and-gold visual system. Designed to reflect exclusivity, professionalism, and exceptional event experiences across all brand touchpoints.',
    tags: ['PHOTOSHOP', 'CLAUDE', 'PACKAGING', 'BRANDING'],
    image: project3 // Local imported file
  },
  {
    id: 6,
    category: 'WORDPRESS', // Fixed category to match filtering categories perfectly
    title: 'Corporate Real Estate Website',
    date: 'December 2025',
    description: 'Lifestyle International Realty – Corporate Real Estate Website Problem Solving Simplified complex business offerings into clear sections tailored for agents, brokers, and franchise opportunities.',
    tags: ['WORDPRESS', 'ELEMENTOR PRO', 'PREMIUM THEMES', 'PREMIUM PLUGINS'],
    image: wordpress2,
    liveUrl: 'https://jointhelifestylefamily.com/',
  },
  {
    id: 7,
    category: 'WORDPRESS', // Fixed category to match filtering categories perfectly
    title: 'volve Tech 360 – Growth Marketing Agency Website ',
    date: 'December 2025',
    description: 'volve Tech 360 – Growth Marketing Agency Website  Problem SolvingSimplified a wide range of marketing services into a clear, easy-to-navigate structure, helping visitors quickly find the right solution.',
    tags: ['WORDPRESS', 'ELEMENTOR PRO', 'RESPONSIVE DESIGN', 'PREMIUM THEMES'],
    image: wordpress1,
    liveUrl: 'https://evolvetech360.com/',
  },
  {
    id: 8,
    category: 'BOOK DESIGN',
    title: 'My Featured E-Book',
    date: 'July 2026',
    description: 'A professionally designed childrens storybook featuring custom illustrations, engaging layouts, and vibrant visuals that create an enjoyable reading experience for young readers.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    image: book1,
    liveUrl: '/book1.pdf' 
  },
  {
    id: 9,
    category: 'BOOK DESIGN',
    title: 'Captain Cool vs. The Itch Monster',
    date: 'July 2026',
    description: 'Captain Cool vs. The Itch Monster is a colorful childrens storybook designed for a client, featuring engaging storytelling and vibrant illustrations. I transformed the clients concept into a visually appealing book with consistent character designs, creative page layouts, and expressive artwork.',
    tags: ['Character Design', 'Layout Design', 'Custom Character Illustrations'],
    image: book3,
    liveUrl: '/book3.pdf' 
  }
];
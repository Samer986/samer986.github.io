import avatar from '../assets/images/samer.jpeg';
import post2 from '../assets/images/post-2.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Samer Yousef',
    subtitle: 'Bienvenidos a mi blog personal 👨‍💻',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: 'file:///Users/sameryousef/Desktop/WhatsApp%20Image%202025-12-01%20at%204.25.02%20PM.jpeg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/Samer986'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    
    ],
    socialLinks: [
   
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/samer.youseff/?next=%2F'
        }
    ],
    hero: {
        title: 'Hola a todos y bienvenidos a mi portafolio',
        text: "Hola, mi nombre es Samer, soy un desarrollador web especializado en FrontEnd, BackEnd, Bases de datos y Appian. Soy músico, lo cual se ha trasladado a mi manera de trabajar buscando siempre vias creativas para llegar a resultados funcionales y estéticos si lo amerita. Me encanta trabajar en equipo, disfruto intercambiar ideas y ayudar a materializarlas",
        image: {
            src: post2,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

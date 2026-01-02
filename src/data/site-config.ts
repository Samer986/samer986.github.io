import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
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
        src: 'blob:https://web.whatsapp.com/ca7e80bd-c02f-4265-8b6d-6a5d91e7911e',
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
        text: "Hola, mi nombre es Samer, soy un desarrollador web especializado en FrontEnd, BackEnd, Bases de datos y Appian. Soy musico, lo cual se ha trasladado a mi manera de trabajr buscando siempre vias creativas para llegar a resultados funcionales y esteticos si lo amerita. Me encanta trabajar en equipo, disfruto intercambiar ideas y ayudar a materializarlas",
        image: {
            src: hero,
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

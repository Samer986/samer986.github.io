import avatar from '../assets/images/samer.jpeg';
import post2 from '../assets/images/post-2.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Samer Yousef'
    },
    title: 'Samer Yousef',
    subtitle: 'Desarrollador Full Stack 👨‍💻',
    description: 'Desarrollador Full Stack especializado en FrontEnd, BackEnd, Bases de datos y Appian',
    image: {
        src: post2,
        alt: 'Samer Yousef - Portafolio'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Experiencia',
            href: '/about'
        },
        {
            text: 'Certificados',
            href: '/certificates'
        },
        {
            text: 'Github',
            href: 'https://github.com/Samer986'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Experiencia',
            href: '/about'
        },
        {
            text: 'Full Stack Certificate',
            href: 'https://certificate.4geeks.com/e327309f06c6a2693d027856f1412f8c530e8f1c'
        },
        {
            text: 'English Certificate (C1)',
            href: 'https://cert.efset.org/en/sZB9be'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/samer.youseff/?next=%2F'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Samer986'
        }
    ],
    hero: {
        title: 'Hola, soy Samer Yousef',
        text: "Desarrollador Full Stack certificado con inglés nivel C1. Especializado en FrontEnd, BackEnd, Bases de datos y Appian. Mi experiencia en música me ha dado una perspectiva única para abordar problemas técnicos de manera creativa y estructurada.",
        image: {
            src: post2,
            alt: 'Samer Yousef'
        },
        actions: [
            {
                text: 'Ver Experiencia',
                href: '/about'
            },
            {
                text: 'Certificados',
                href: '/certificates'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: '',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
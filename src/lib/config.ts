
import type { NavItem, SocialLink } from "$lib/types/nav";

import {
    Boxes,
    Paintbrush,
    Workflow,
    Zap
} from 'lucide-svelte';
import type { Feature, PromoConfig, SiteConfig } from "./types/config";


export const siteConfig: SiteConfig = {
    version: '0.0.1',
    title: 'FeatherKit for SwiftUI',
    description:
        'Lightweight SwiftUI Design Toolkit & UI Theme Utilities. Built for SwiftUI framework and native iOS components. By a developer, for developers.',
    github: 'https://github.com/racheljoss/FeatherKit',
    npm: '',

    quickLinks: [
        { title: 'Customize', href: '/docs/customize' },
        { title: 'Examples', href: '/docs/examples' }
    ],
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
};


export let navItems: NavItem[] = [
    {
        title: 'Docs',
        href: '/docs'
    },

];

export let socialLinks: SocialLink[] = [

    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/giovanirodriguez26/',
        icon: 'linkedin'
    },
    {
        title: 'GitHub',
        href: 'https://github.com/racheljoss',
        icon: 'github'
    },

];


export const features: Feature[] = [
    {
        icon: Boxes,
        title: 'Component Library',
        description: 'Built on top of shadcn/ui, offering comprehensive accessible components with complete documentation'
    },
    {
        icon: Workflow,
        title: 'Type Safe',
        description: 'Fully typed with TypeScript, providing excellent IDE support and reliable development experience'
    },
    {
        icon: Paintbrush,
        title: 'Fully Customizable',
        description: 'Easily customize themes, layouts, and components to match your brand identity and requirements'
    },
    {
        icon: Zap,
        title: 'Fast & Modern',
        description: 'Powered by Svelte 5, MDSvex, and TailwindCSS for optimal performance and developer experience'
    }
];

export let promoConfig: PromoConfig = {
    title: 'Need help with your project?',
    description:
        'I offer custom development services, consulting, and technical guidance for your web applications.',
    ctaText: "Let's work together",
    ctaLink: 'mailto:info@codegio.com',
    lightImage: '/images/dev-services-light.jpg',
    darkImage: '/images/dev-services-dark.jpg'
};
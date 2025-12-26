// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'ScaleNinja',
            plugins: [
                starlightThemeNova({
                    nav: [
                        { label: 'Guides', href: '/guides/cloudstack' },
                        { label: 'External link', href: 'https://example.com' },
                    ],
                }),
            ],
            logo: {
              light: './public/logo.svg',
              dark: './public/logo-white.svg',
              replacesTitle: true,
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/scaleninja' },
            ],
            sidebar: [
                {
                    label: 'Guides',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
            customCss: ['./src/styles/custom.css'],
            components: {
                Footer: './src/components/starlight/Footer.astro',
            },
        }),
    ],
});

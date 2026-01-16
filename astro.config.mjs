// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
    site: 'https://scaleninja.com',
    integrations: [
        starlight({
            title: 'ScaleNinja',
            plugins: [
                starlightBlog({
                  navigation: 'none',
                  authors: {
                    rohit: {
                      name: 'Rohit Yadav',
                      title: 'Founder & CEO',
                      url: 'https://yadv.in',
                      picture: './src/assets/rohit.png'
                    },
                  },
                  metrics: {
                    readingTime: true,
                    words: 'total',
                  },
                }),
                starlightThemeNova({
                    nav: [
                        { label: 'Products', href: '/products/' },
                        { label: 'Solutions', href: '/solutions/' },
                        { label: 'Guides', href: '/guides/cloudstack/' },
                        { label: 'Blog', href: '/blog' },
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
/*
                {
                    label: 'Products',
                    items: [
                        { label: 'Overview', slug: 'products' },
                        { label: 'nVisor', slug: 'products/nvisor' },
                        { label: 'nStore', slug: 'products/nstore' },
                        { label: 'nCloud', slug: 'products/ncloud' },
                        { label: 'nNet', slug: 'products/nnet' },
                        { label: 'MacVisor', slug: 'products/macvisor' },
                    ],
                },
                {
                    label: 'Solutions',
                    items: [
                        { label: 'Overview', slug: 'solutions' },
                        { label: 'Private Cloud', slug: 'solutions/private-cloud' },
                        { label: 'Cloud Repatriation', slug: 'solutions/cloud-repatriation' },
                        { label: 'Disaster Recovery', slug: 'solutions/disaster-recovery' },
                        { label: 'Dev/Test Environments', slug: 'solutions/devtest' },
                    ],
                },
*/
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
                Header: './src/components/starlight/Header.astro',
            },
        }),
    ],
    redirects: {
        "/guides/cloudstack": "/blog/cloudstack",
        "/guides/ceph": "/blog/ceph",
        "/guides/wireguard": "/blog/wireguard",
    }
});

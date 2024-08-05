import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            // padding: "2rem",
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'var(--border)',
                input: 'var(--input-placeholder)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                card: {
                    DEFAULT: 'var(--card)',
                },
                txt: {
                    DEFAULT: 'var(--txt)',
                    foreground: 'var(--txt-foreground)',
                },
            },
            fontFamily: {
                notoSansKr: ['var(--notoSansKr)'],
            },
            fontSize: {
                '10': '10px',
            },
            width: {
                default: '335px',
                lg: '293px',
                sm: '101px',
                select: '95px',
                screen: '375px',
            },
            height: {
                default: '60px',
            },
            borderRadius: {
                default: '44px',
                full: '54px',
                m: '30px',
                select: '40px',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

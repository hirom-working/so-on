/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'retro-bg': '#F2D8B3',
                'retro-accent1': '#FBD266', // Mustard
                'retro-accent2': '#8FB0A9', // Sage Green
                'retro-accent3': '#D76735', // Terracotta
                'retro-black': '#2C2C2C',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

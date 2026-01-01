/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                retro: {
                    bg: '#F4E4BC',       // Warm cream/beige background
                    primary: '#D97D54',  // Terracotta/Burnt Orange (Accent)
                    secondary: '#87A8A4',// Sage/Teal Green (Accent)
                    dark: '#35312C',     // Dark Brown/Black (Text, Casing)
                    metal: '#C0B9B1',    // Brushed Metal
                    yellow: '#EBCB8B',   // Muted Gold/Mustard
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                handwriting: ['"Comic Sans MS"', '"Chalkboard SE"', 'sans-serif'],
            },
            boxShadow: {
                'soft-pressed': 'inset 3px 3px 6px rgba(0,0,0,0.2), inset -3px -3px 6px rgba(255,255,255,0.7)',
                'soft-raised': '4px 4px 8px rgba(0,0,0,0.2), -4px -4px 8px rgba(255,255,255,0.7)',
                'deep-inset': 'inset 2px 2px 5px rgba(0,0,0,0.4), inset -1px -1px 2px rgba(255,255,255,0.1)',
            },
            backgroundImage: {
                'metal-gradient': 'linear-gradient(145deg, #dcd5cd, #f2ece6)',
                'plastic-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
            }
        },
    },
    plugins: [],
}

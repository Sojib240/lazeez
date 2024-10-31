/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                greenShade: {
                    300: "#215f3e",
                },
                orangeShade: {
                    300: "#f18134",
                },
            },
            fontFamily: {
                sofia: ["--sofia", "sans-serif"],
                Hidayatullah: ["Hidayatullah", "sans-serif"],
                JosefinSans_Regular: ["JosefinSans_Regular", "sans-serif"],
                JosefinSans_semibold: ["JosefinSans_semibold", "sans-serif"],
                JosefinSans_bold: ["JosefinSans_bold", "sans-serif"],
                Love_Craft: ["Love_Craft", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
            },
        },
    },
    plugins: [],
};

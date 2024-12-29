/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2A4B4B",
          dark: "#1A2E2E",
          light: "#3A6868"
        },
        secondary: "#D6A65D",
        "off-white": "#F5F5F5",
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)']
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "5.625rem", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "4.5rem", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em" }],
        "display-sm": ["1.875rem", { lineHeight: "2.375rem" }],
        "display-xs": ["1.5rem", { lineHeight: "2rem" }]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

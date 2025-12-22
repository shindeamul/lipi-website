import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
        fantasy: ["Cinzel", "serif"],
        elegant: ["Cormorant Garamond", "serif"],
        
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        mist: "hsl(var(--mist))",
        "mountain-blue": "hsl(var(--mountain-blue))",
        "deep-navy": "hsl(var(--deep-navy))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        blog: {
          cream: "#E8CFB2",
          brown: "#4A3728",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(5%) translateY(-3%)" },
        },
        "drift-medium": {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-3%) translateY(-2%)" },
        },
        "bird-glide": {
          "0%, 100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) translateX(5px) rotate(1deg)" },
          "50%": { transform: "translateY(-5px) translateX(-3px) rotate(-1deg)" },
          "75%": { transform: "translateY(-15px) translateX(8px) rotate(2deg)" },
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.2" },
          "50%": { transform: "translateY(-30px) translateX(20px)", opacity: "0.4" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(38 70% 50% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(38 70% 50% / 0.5), 0 0 60px hsl(43 80% 55% / 0.3)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-scale": "fade-in-scale 2s ease-out forwards",
        "drift-slow": "drift-slow 25s ease-in-out infinite",
        "drift-medium": "drift-medium 18s ease-in-out infinite",
        "bird-glide": "bird-glide 12s ease-in-out infinite",
        "particle-float": "particle-float 20s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        layout: {
          background: "var(--aa-background)",
          normal: {
            foreground: "var(--aa-normal-foreground)",
          },
          muted: {
            background: "var(--aa-muted-background)",
          },
          card: {
            background: "var(--aa-card-background)",
          },
          primary: {
            DEFAULT: "var(--aa-primary-background)",
            foreground: "var(--aa-primary-foreground)",
          },
          standout: {
            DEFAULT: "var(--aa-standout-background)",
          },
          disabled: {
            DEFAULT: "var(--aa-disabled-background)",
            foreground: "var(--aa-disabled-foreground)",
          },
          secondary: {
            DEFAULT: "var(--aa-secondary-background)",
          },
          line: {
            DEFAULT: "var(--aa-line-background)"
          }
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "var(--foreground)",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        standout: {
          DEFAULT: "var(--standout)",
          foreground: "var(--standout-foreground)",
          border: "var(--standout-border)",
        },
        ghost: {
          DEFAULT: "var(--ghost)",
          foreground: "var(--ghost-foreground)",
          border: "var(--ghost-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

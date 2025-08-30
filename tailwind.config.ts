import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        // 科技主题自定义颜色
        tech: {
          blue: "hsl(var(--tech-blue))",
          cyan: "hsl(var(--tech-cyan))",
          green: "hsl(var(--tech-green))",
          purple: "hsl(var(--tech-purple))",
          orange: "hsl(var(--tech-orange))",
          red: "hsl(var(--tech-red))",
          glow: "hsl(var(--tech-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "bounce-in": "bounceIn 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "tech-scan": "techScan 3s linear infinite",
        matrix: "matrix 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px hsl(var(--tech-glow)), 0 0 10px hsl(var(--tech-glow)), 0 0 15px hsl(var(--tech-glow))",
          },
          "100%": {
            boxShadow:
              "0 0 10px hsl(var(--tech-glow)), 0 0 20px hsl(var(--tech-glow)), 0 0 30px hsl(var(--tech-glow))",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 5px hsl(var(--tech-glow))",
          },
          "50%": {
            opacity: "0.8",
            boxShadow:
              "0 0 20px hsl(var(--tech-glow)), 0 0 30px hsl(var(--tech-glow))",
          },
        },
        techScan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        matrix: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        strong:
          "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)",
        // 科技主题阴影
        "tech-glow":
          "0 0 10px hsl(var(--tech-glow)), 0 0 20px hsl(var(--tech-glow)), 0 0 30px hsl(var(--tech-glow))",
        "tech-blue":
          "0 0 10px hsl(var(--tech-blue)), 0 0 20px hsl(var(--tech-blue))",
        "tech-cyan":
          "0 0 10px hsl(var(--tech-cyan)), 0 0 20px hsl(var(--tech-cyan))",
        "tech-purple":
          "0 0 10px hsl(var(--tech-purple)), 0 0 20px hsl(var(--tech-purple))",
        "tech-inner":
          "inset 0 0 10px rgba(0, 0, 0, 0.3), 0 0 5px hsl(var(--tech-glow))",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;

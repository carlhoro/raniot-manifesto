import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.{tsx,ts}",
    "./components/**/*.{tsx}",
    "./pages/**/*.{tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1f2933",

        muted: {
          DEFAULT: "#6b7280",
          foreground: "#9ca3af",
        },

        accent: {
          DEFAULT: "#3f6f8f",
          subtle: "#e6edf2",
        },

        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
} satisfies Config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"], // You can replace 'Playfair Display' with your preferred serif font
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#1a1a1a",
          800: "#2a2a2a",
          700: "#3a3a3a",
          600: "#4a4a4a",
          400: "#9a9a9a",
          200: "#cacaca",
        },
        "neon-blue": "#00ffff",
        "neon-pink": "#ff00ff",
        "blue-gradient": {
          start: "#3490dc",
          end: "#6574cd",
        },
        "purple-gradient": {
          start: "#9561e2",
          end: "#d6bcfa",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "fade-in-delay": "fadeIn 1s ease-out 0.5s",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradientAnimation 15s ease infinite",
        "border-pulse": "border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-run": "border-run 3s linear infinite",
        "border-glow": "border-glow 3s linear infinite",
        tilt: "tilt 10s infinite linear",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "border-pulse": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "border-run": {
          "0%, 100%": {
            "offset-distance": "0%",
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            "offset-distance": "100%",
            opacity: 1,
          },
        },
        "border-glow": {
          "0%, 100%": {
            opacity: 1,
            transform: "translateX(-100%) translateY(-100%)",
          },
          "50%": {
            opacity: 0.6,
            transform: "translateX(0%) translateY(0%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(100%) translateY(100%)",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "200%": "200%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animate-border-run": {
          position: "absolute",
          content: '""',
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "rotate(0deg)",
          "offset-path": 'path("M0,0 L100,0 L100,100 L0,100 Z")',
          "offset-rotate": "0deg",
          "mix-blend-mode": "difference",
        },
        ".animate-border-glow": {
          position: "absolute",
          content: '""',
          top: "0",
          left: "0",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0) 70%)",
          "mix-blend-mode": "screen",
          "pointer-events": "none",
        },
        ".animate-shimmer": {
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

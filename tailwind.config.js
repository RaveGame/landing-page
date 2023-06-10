module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1440px",

        "3xl": "1500px",

        "4xl": "1600px",

        "4xlplus": "1700px",

        "5xl": "2000px",
      },

      animation: {
        aniscale: "aniscale 2s ease 0s infinite",
        runindex: "runindex 3s ease 0s forwards",
      },

      keyframes: {
        aniscale: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.25)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
        runindex: {
          "0%": { width: "0%" },
          "100%": { transform: "100%" },
        },
      },

      backgroundSize: {
        fillSize: "100% 100%",
      },

      backgroundImage: {
        pattern01rfm: "url('/images/pattern01-rfm.png')",
        pattern02rfm: "url('/images/pattern02-rfm.png')",
        pattern05rfm: "url('/images/pattern05-rfm.png')",
        pattern06rfm: "url('/images/pattern06-rfm.png')",
        pattern07rfm: "url('/images/pattern07-rfm.png')",
        pattern08rfm: "url('/images/pattern08-rfm.png')",
        calltoaction: "url('/images/bg-calltoaction.png')",
        intropage: "url('/images/bg-intro.jpg')",
        overlayintro: "url('/images/overlay-intro.png')",
        overlaymobile: "url('/images/overlay-intro-moblie.png')",
        customization: "url('/images/bg-customization.png')",
        activelight: "url('/images/active-light.png')",
      },
      colors: {
        colorcs: {
          124070: "#124070",
          "0D0A1A": "#0D0A1A",
          FFC107: "#FFC107",
          E3E5E7: "#E3E5E7",
          fdf600: "#fdf600",
          "03102A": "#03102A",
          "11264E": "#11264E",
          "0D1A36": "#0D1A36",
          "43c8ce": "#43c8ce",
          "37A3A8": "#37A3A8",
          212121: "#212121",
          "0a1222": "#0a1222",
          "080E1E": "#080E1E",
          "071632": "#071632",
          "272D3C": "#272D3C",
          FFB400: "#FFB400",
          "070D1D": "#070D1D",
          headerBg: "rgba(17, 153, 112, 0.1)",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};

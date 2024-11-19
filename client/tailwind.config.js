/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extends: {
      colors: {
        primary: "#656565",
        secondary: "darkblue",
        brand: "#F3F3F3",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          backgroundImage: {
            "nation-background": "url('/usa-background.jpg')",
          },
          colors: {
            primary: "red",
            secondary: "white",
          },
        },
      },
      themes: [
        {
          name: "great-britain",
          extend: {
            backgroundImage: {
              "nation-background": "url('/great-britain-background.jpg')",
            },
            colors: {
              primary: "pink",
              secondary: "#000000",
            },
          },
        },
        {
          name: "usa",
          extend: {
            backgroundImage: {
              "nation-background": "url('/usa-background.jpg')",
            },
            colors: {
              primary: "blue",
            },
          },
        },
        {
          name: "france",
          extend: {
            backgroundImage: {
              "nation-background": "url('/france-background.jpg')",
            },
            colors: {
              primary: "blue",
              
            },
          },
        },
        {
          name: "anzac",
          extend: {
            backgroundImage: {
              "nation-background": "url('/anzac-background.jpg')",
            },
            colors: {
              primary: "pink",
            },
          },
        },
        {
          name: "russia",
          extend: {
            backgroundImage: {
              "nation-background": "url('/russia-background.jpg')",
            },
            colors: {
              primary: "red",
            },
          },
        },
        {
          name: "china",
          extend: {
            backgroundImage: {
              "nation-background": "url('/china-background.jpg')",
            },
            colors: {
              primary: "blue",
            },
          },
        },
        {
          name: "germany",
          extend: {
            backgroundImage: {
              "nation-background": "url('/germany-background.jpg')",
            },
            colors: {
              primary: "#000000",
              secondary: "#AA0000",
            },
          },
        },
        {
          name: "japan",
          extend: {
            backgroundImage: {
              "nation-background": "url('/japan-background.jpg')",
            },
            colors: {
              primary: "red",
              secondary: "white",
            },
          },
        },
        {
          name: "italy",
          extend: {
            backgroundImage: {
              "nation-background": "url('/italy-background.jpg')",
            },
            colors: {
              primary: "green",
            },
          },
        },
      ],
    }),
  ],
};

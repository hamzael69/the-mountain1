/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        neutral:{
          'off-white': 'hsl(36, 100%, 99%)',
      },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        'bg-header': "url('../images/bg_header.jpg')",
        'nuage-img': "url('../images/bg_nuage.jpg')",
        'photo-img' :  "url('../images/bg_appareil_photo.jpg')",
        'new-img' :  "url('../images/bg_newsletter.jpg')",
      },
    },
  },
  plugins: [],
};
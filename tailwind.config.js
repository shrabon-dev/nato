/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'sm_md': '550px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
           'nav_bg':'#4E4E4E',
           'bg_op_5':'#4E4E4E70',
           'hover_clr':'#219ebc',
          //  'hover_bg':'#219ebc',
           'main_clr':'#4A8780',
           'btn_clr':'#519D94',
           'bold_clr':'#528D86',
           'secound_clr':'#6D776C',
      },
      fontFamily:{
        'pt-serif':'PT Serif, serif',
        'work-sans':'Work Sans, sans-serif',
      },
    },
  },
  plugins: [],
}

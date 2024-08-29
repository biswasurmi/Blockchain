/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./public/index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  darkMode :"class",
  theme: {
    extend: {
      colors :{
        primary:"#54c409",
        secondary:"#cbefb3",
        color1:"#b4e394",
        btn_clr: " #44a205",
         'secondary-color': '#5ccd7c'
      },
      container :{
        center: true,
        padding :{
          DEFAULT :"1rem",
          sm :"3rem",
          btn1:'bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition',
          btn_secondary:'bg-white text-green-600 py-2 px-4 rounded-lg shadow-md border-2 hover:bg-green-600 transition',
          green1:'#65c228'
          
        }
      },
      backgroundImage: {
        custom_gradient: 'linear-gradient(to right, #0f7404, #5cb917)',
        
          custom_bg: "url(./images/hero/hero.jpg)" ,
          detail: "url(./images/hero/cover2.jpg)" ,
          cart_bg:"url(./images/hero/cart-bg.jpg)",
          order_img:"url(./images/hero/searchA.png)"
          
        
      },
    },
  },
  plugins: [],
}


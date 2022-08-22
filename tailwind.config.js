module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: { // theme , add to object colors similary to tailwind-default.config
    extend: {
      colors:{
        primary:'#FF6363',
        secondary:{
          100:'#E2E2D5',
          200:'#888883'
        },
        fontFamily:{
          body:['Nunito']
        }
      }
    },
  },
  variants: {},
  plugins: [],
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'], 
  theme: {
    fill: {
      current: 'currentColor',
    },
    extend: {
      width: {
        '26px'     : '1.625rem',
        '44px'     : '2.75rem',
        '46px'     : '2.875rem',
        '70px'     : '4.375rem',
        '188.74px' : '11.796rem',
        '227px'    : '14.188rem',
        '242px'    : '15.125rem',
        '15.25'    : '15.25rem',
        '18.5'     : '18.5rem',
        '30'       : '30rem',
        '663px'    : '41.438rem',
        '42.5'     : '42.5rem',
        '858px'    : '53.625rem',
        '55'       : '56rem'
      },
      spacing: {
        '0.625': '0.625rem',
        '0.938': '0.938rem',
        '1.25' : '1.25rem',
        '1.375': '1.375rem',
        '1.563': '1.563rem',
        '1.875': '1.875rem',
        '44px' : '2.75rem',
        '46px': '2.875rem',
        '3.125': '3.125rem',
        '3.313': '3.313rem',
        '4.125': '4.125rem',
        '6.25' : '6.25rem',
        '7.125': '7.125rem',
        '8.125': '8.125rem',
        '14.625': '14.625rem',
      },
      maxWidth: {
        '25'  : '25rem',
        '18.5': '18.5rem',
        '25'  : '25rem',
        '42'  : '42rem'
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        '3px'   : '3px',
        'circle': '50%',
      },
      height: {
        '1px'  : '0.063rem',
        '15'   : '3.75rem',
        '26px' : '1.625rem',
        '46px' : '2.875rem',
      },
      colors: {
        'instagram-dark-purple': '#8F2762',
        'instagram-purple'     : '#C13584',
        'twitter-dark-blue'    : '#177FBF',
        'twitter-blue'         : '#1DA1F2',
        'youtube-dark-red'     : '#CC0000',
        'youtube-red'          : '#FF0000',
        'fb-dark-blue'         : '#2F4A80',
        'fb-blue'              : '#4267B2',
        'dark-blue'            : '#233759',
        'blue'                 : '#4066A5',
        'dark'                 : '#131821',
        'grey'                 : '#6A707B',
        'cream'                : '#E3E3E4',
        'glass'                : '#F2F5FA',
      },
      fontFamily: {
        georgia    : ['Georgia'],
        arial      : ['Arial'],
        fredokaOne : ['Fredoka One']
      },
      fontSize:{
        2 :['2rem', '2.75rem'],
        1 :['1rem', '1.75rem'],
        44:['2.25rem', '2.75rem'],
        30:['1.875rem', '2.25rem']
      },
      backgroundImage: {
        'background-image' : 'url(@img/Page.svg)',
      },
      boxShadow: {
        'bottom': '0px 30px 40px rgba(19, 24, 33, 0.06)',
        'round' : '0px 20px 40px rgba(19, 24, 33, 0.3)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor : ['active', 'hover'],
      backgroundImage : ['active', 'hover'],
      boxShadow       : ['active', 'hover'],
      scale           : ['focus-within'],
      textColor       : ['active'],
    },
  },
  plugins: [],
}

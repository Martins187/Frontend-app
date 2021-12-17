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
        '156.75px': '9.797rem',
        '159.63px': '9.977rem',
        '171px' : '10.688rem',
        '174.15px' : '10.884rem',
        '188.74px' : '11.796rem',
        '227px'    : '14.188rem',
        '242px'    : '15.125rem',
        '15.25'    : '15.25rem',
        '18.5'     : '18.5rem',
        '342.95px' : '21.434rem',
        '345px'    : '21.563rem',
        '25'       : '25rem',
        '30'       : '30rem',
        '562.45px' : '35.153rem',
        '663px'    : '41.438rem',
        '42.5'     : '42.5rem',
        '858px'    : '53.625rem',
        '55'       : '56rem'
      },
      height: {
        '1px'  : '0.063rem',
        '15'   : '3.75rem',
        '26px' : '1.625rem',
        '46px' : '2.875rem',
        '75px' : '4.688rem',
        '90px' : '5.625rem',
        '159.63px': '9.977rem',
        '174.15px' : '10.884rem'
      },
      spacing: {
        '15.58pxNeg' : '-0.974rem',
        '17pxNeg': '-1.063rem',
        '8.25px':'0.516rem',
        '9px': '0.563rem',
        '12.97px': '0.811rem',
        '0.625': '0.625rem',
        '12.97px': '0.811rem',
        '14.15px': '0.884rem',
        '0.938': '0.938rem',
        '1.25' : '1.25rem',
        '21px' : '1.313rem',
        '1.375': '1.375rem',
        '1.563': '1.563rem',
        '28.13px': '1.758rem',
        '1.875': '1.875rem',
        '34.7px': '2.169rem',
        '9'    : '2.25rem',
        '44px' : '2.75rem',
        '46px': '2.875rem',
        '3.125': '3.125rem',
        '3.313': '3.313rem',
        '4.125': '4.125rem',
        '17' : '4.25rem',
        '78.67px': '4.917rem',
        '95.68px': '5.98rem',
        '6.25' : '6.25rem',
        '7.125': '7.125rem',
        '7.25' : '7.35rem',
        '8.125': '8.125rem',
        '174.15px' : '10.884rem',
        '14.625': '14.625rem'
      },
      maxWidth: {
        '25'  : '25rem',
        '18.5': '18.5rem',
        '372px'    : '23.25rem',
        '25'  : '25rem',
        '43'  : '43rem',
        '342.95px' : '21.434rem',
        '458px'    : '28.625rem',
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        '3px'   : '3px',
        'circle': '50%',
        '10px'  : '10px'
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
        'dark-grey'            : '#4D4D4D',
        'bluish'               : '#C1C8F0',
        'bluish-grey'          : '#EAEDFA',
        'yellow'               : '#FFD900',
        'dark-yellow'          : '#FFBB00',
        'light-blue'           : '#C7EDED',
        'darker-green'         : '#25A72E',
        'light-green'          : '#79C523',
        'victory-green-darker'  : '#1EC229',
        'victory-green-light' : '#85E31A',
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
        30:['1.875rem', '2.25rem'],
        18:['1.125rem', '1.375rem'],
        16:['1rem', '1.25rem'],
        15:['0.939rem', '1.25rem'],
        25:['1.6rem', '1.938rem']
      },
      backgroundImage: {
        'background-image' : 'url(@img/background-image.jpg)',
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

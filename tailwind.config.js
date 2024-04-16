module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          '50': '#ebe6f0',
          '100': '#cdc0da',
          '200': '#ac96c1',
          '300': '#8b6ba8',
          '400': '#724c95',
          '500': '#592c82',
          '600': '#51277a',
          '700': '#48216f',
          '800': '#3e1b65',
          '900': '#2e1052',
        },
        success: '#28A745',
        error: '#DC3545',
        info: '#009FFF',
        warning: '#FFC107'
      },
      boxShadow: {
        '1': '0px 0px 12px 0px rgba(0, 0, 0, 0.05)',
        '2': '0px 0px 12px 0px rgba(0, 0, 0, 0.10)',
        '3': '0px 0px 12px 0px rgba(0, 0, 0, 0.15)',
        '4': '0px 0px 12px 0px rgba(0, 0, 0, 0.20)',
      },
      fontSize: {
        h1: ['6rem', {lineHeight: '7rem', letterSpacing: '-0.094rem', fontWeight: '300'}],
        h2: ['3.75rem', {lineHeight: '4.5rem', letterSpacing: '-0.031rem', fontWeight: '300'}],
        h3: ['3rem', {lineHeight: '3.5rem', letterSpacing: '0rem', fontWeight: '400'}],
        h4: ['2.125rem', {lineHeight: '2.25rem', letterSpacing: '0rem', fontWeight: '400'}],
        h5: ['1.5rem', {lineHeight: '1.5rem', letterSpacing: '0.011rem', fontWeight: '400'}],
        h6: ['1.25rem', {lineHeight: '1.5rem', letterSpacing: '0.009rem', fontWeight: '500'}],
        subtitle1: ['1rem', {lineHeight: '1.5rem', letterSpacing: '0.009rem', fontWeight: '400'}],
        subtitle2: ['0.875rem', {lineHeight: '1.5rem', letterSpacing: '0.006rem', fontWeight: '500'}],
        body1: ['1rem', {lineHeight: '1.5rem', letterSpacing: '0.031rem', fontWeight: '400'}],
        body2: ['0.875rem', {lineHeight: '1.25rem', letterSpacing: '0.016rem', fontWeight: '400'}],
        button: ['0.875rem', {lineHeight: '1rem', letterSpacing: '0.078rem', fontWeight: '500'}],
        caption: ['0.75rem', {lineHeight: '1rem', letterSpacing: '0.025rem', fontWeight: '400'}],
        overline: ['0.625rem', {lineHeight: '1rem', letterSpacing: '0.094rem', fontWeight: '500'}],
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

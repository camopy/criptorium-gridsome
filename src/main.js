// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined'
  })
  //opts includes, vuetify themes, icons, etc.
  const opts = {
    theme: {
      themes: {
        light: {
          primary: '#63A8C7',
          secondary: '#3ecf8e',
          accent: '#8c9eff',
          error: '#b71c1c',
          text: '#637381'
        },
        dark: {
          primary: colors.blue.lighten3,
        }
      },
      options: {
        customProperties: true,
      }
    }
  };
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify(opts);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

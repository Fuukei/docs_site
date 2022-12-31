import Theme from 'vitepress/theme'
import './style/var.css'
import FreeStyle from './components/FreeStyle.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('FreeStyle', FreeStyle)
  }
}
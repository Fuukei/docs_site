import DefaultTheme from 'vitepress/theme'
import './style/var.css'
import DemoShowcase from './components/DemoShowcase.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('DemoShowcase', DemoShowcase)
  }
}

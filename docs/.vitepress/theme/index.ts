import Theme from 'vitepress/theme'
import { onMounted, onBeforeUnmount, watch } from "vue";
import './style/var.css'
import './components/FreeStyle.vue'
import cursorInit from './components/cursor-2.js'

export default {
  ...Theme,
  mounted() {
    
  },
  onMounted(){
    cursorInit()
  }
}

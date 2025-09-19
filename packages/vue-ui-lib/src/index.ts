import type { App } from 'vue'
import Button from './components/Button/Button.vue'

const components = {
  Button
}

const install = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default {
  install
}

export {
  Button
}
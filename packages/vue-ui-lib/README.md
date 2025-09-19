# 🐋 BlueWhale UI Library

A modern and elegant Vue 3 component library built with TypeScript and Vite by the BlueWhale Team.

## ✨ Features

- 🚀 Built for Vue 3 with full TypeScript support
- 📦 Tree-shakable components
- 🎨 Elegant and modern design
- 🔧 Easy customization
- 💪 Production ready

## 📦 Installation

```bash
npm install @bluewhale/vue-ui-lib
# or
pnpm add @bluewhale/vue-ui-lib
# or
yarn add @bluewhale/vue-ui-lib
```

## 🚀 Usage

### Global Installation

```ts
import { createApp } from 'vue'
import BlueWhaleUI from '@bluewhale/vue-ui-lib'
import '@bluewhale/vue-ui-lib/style.css'

const app = createApp(App)
app.use(BlueWhaleUI)
```

### Individual Component Import

```vue
<template>
  <Button variant="primary" @click="handleClick">
    Click me
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@bluewhale/vue-ui-lib'
import '@bluewhale/vue-ui-lib/style.css'

const handleClick = () => {
  console.log('BlueWhale button clicked!')
}
</script>
```

## Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `disabled`: boolean (default: false)

**Events:**
- `click`: Emitted when the button is clicked

## 🛠️ Development

This component library is built using:
- Vue 3 with Composition API
- TypeScript for type safety
- Vite for blazing fast builds
- pnpm workspace for monorepo management

### Local Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build:lib

# Start demo application
pnpm run dev:demo
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details.

---

Made with ❤️ by the BlueWhale Team 🐋
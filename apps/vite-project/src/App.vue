<script setup lang="ts">
import { Button } from '@bluewhale/vue-ui-lib'

const handleClick = (variant: string) => {
  alert(`${variant} button clicked!`)
}
</script>

<template>
  <div class="app">
    <h1>🐋 BlueWhale UI Library Demo</h1>

    <section class="demo-section">
      <h2>Button Variants</h2>
      <div class="button-group">
        <Button variant="primary" @click="() => handleClick('Primary')">
          Primary Button
        </Button>
        <Button variant="secondary" @click="() => handleClick('Secondary')">
          Secondary Button
        </Button>
        <Button variant="danger" @click="() => handleClick('Danger')">
          Danger Button
        </Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>Button Sizes</h2>
      <div class="button-group">
        <Button size="small" @click="() => handleClick('Small')">
          Small Button
        </Button>
        <Button size="medium" @click="() => handleClick('Medium')">
          Medium Button
        </Button>
        <Button size="large" @click="() => handleClick('Large')">
          Large Button
        </Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>Disabled State</h2>
      <div class="button-group">
        <Button disabled>
          Disabled Button
        </Button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  background: #f8f9fa;
}

.demo-section h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #495057;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

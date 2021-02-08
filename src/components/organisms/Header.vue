<template>
<header>
  <Button >
    ストックする
  </Button>
</header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../atoms/Button.vue'
export default defineComponent({
  name: 'Header',
  components: {
    Button
  }
})
</script>

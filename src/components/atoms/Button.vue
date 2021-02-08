<template>
<button class='button'>
  <slot/>
</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Modal用と保存用のemit書く必要あり？
export default defineComponent({
  name: 'Button'
})
</script>

<style scoped>
.button{
  @apply bg-green-primary text-white py-2.5 px-7 rounded-md
}
</style>

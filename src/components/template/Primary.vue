<template>
  <div class="Primary">
    <Header />
    <router-view />
    <div class="sideber">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import Header from '../organisms/Header.vue'

export default defineComponent({
  name: 'Primary',
  components: {
    Header
  },
setup (props) {
  const store = useStore()
  const state = reactive<{eventList: Array<any>}>({
      eventList: store.state.eventList
    });
  const data = ref([])
  const getEventData = async () => {
    await store.dispatch('fetchAsyncEvents')
  }

  onMounted(getEventData) // on `mounted` call `getUserRepositories`

  return {
    state,
    getEventData
  }
}
})
</script>

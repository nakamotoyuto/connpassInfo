<template>
  <ul>
    <li v-for="(todo, index) in state.todoList" :key="todo.todo">
        {{ todo.todo }}
      <router-link :to="{name: 'detail', params: {id: todo.id}}">詳細</router-link>
      <complete-button :index="index" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive} from 'vue'
import { useStore } from 'vuex' //追加
import CompleteButton from '../components/CompleteButton.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    CompleteButton
  },

  setup() {
    const store = useStore() //追加
    const state = reactive<{todoList: Array<{todo: string}>}>({
      todoList: store.state.todoList //追加
    });
    return { state };
  }
});
</script>

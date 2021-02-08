<template>
  <div>
    <input v-model="todoRef" type="text">
    <button @click="add">登録</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from 'vue'
import { useStore } from 'vuex' //追加


export default defineComponent({
  name: 'TodoInput',
  setup(props, context: SetupContext) {
    const store = useStore()
    const todoRef = ref<string>('')

     //追加 storeの中の一番最後のidを取得し、 + 1
      const lastId = () => {
      if(store.state.todoList.length === 0){
        return 1
      } else {
        const lastItem = store.state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    }

    const add = (e) =>{
      const id = lastId() //追加
      const value = todoRef.value //追加
      store.commit('increment', {id, value}) //追加
      todoRef.value = ''
    };

    return { add, todoRef};
  }
});
</script>
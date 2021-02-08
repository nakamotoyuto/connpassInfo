import { createStore } from "vuex";

export interface State {
  eventList: Array<number | string>
}
export const store = createStore<State>({
  state: {
    eventList
      : []
  },
  mutations: {
    increment(state) {
      const res = fetch('https://connpass.com/api/v1/event/?keyword=React&keyword=Vue')
      console.log(res.json())
    },

  },
  actions: {
    async fetchAsyncEvents() {
      const res = await fetch('https://connpass.com/api/v1/event/?keyword=React', {
        mode: 'cors',
        method: 'GET',
        credentials: 'include'
    })
      console.log(res.json())
    }
  },
  modules: {}
});

export default store

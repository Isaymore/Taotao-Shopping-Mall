import { createStore } from 'vuex'
import user from './modules/user'
// 创建一个新的 store 实例，并导出
export default createStore({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id:number) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    INCREMENT1(state) {
      state.count++
    },
    INCREMENT2(state, count) {
      state.count += count
    }
  },
  actions: {
    increment1({ commit }) {
      setTimeout(() => {
        commit('INCREMENT1')
      }, 1000);
    },
    increment2({ commit }) {
      commit('INCREMENT2', 666)
    }
  },
  // 取值时，state后面需要加上模块名
  // 使用dispatch或commit触发调用方法时，方法名为“模块名/方法名”
  modules: {
    user
  }
})

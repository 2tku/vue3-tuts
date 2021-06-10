import { createStore } from 'vuex'

const storeData = {
  state: {
    items: [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false
      }
    ],
    authen: {
      isAuthenticated: false
    }
  },
  actions: {
    setupItems(context, items) {
      context.commit('SETUP_ITEMS', items)
    }
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.authen.isAuthenticated = !state.authen.isAuthenticated
    },
    SETUP_ITEMS(state, items) {
      state.items = items
    }
  }
}

const store = createStore(storeData)

export default store

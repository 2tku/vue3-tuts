import { createStore } from 'vuex'

const storeData = {
  state: {
    items: [],
    authen: {
      isAuthenticated: true
    }
  },
  actions: {
    setupItems(context, items) {
      context.commit('SETUP_ITEMS', items)
    },
    markComplete({ commit }, itemId) {
      commit('MARK_COMPLETE', itemId)
    },
    deleteItems({ commit }, itemId) {
      commit('DELETE_ITEMS', itemId)
    },
    addItem({ commit }, item) {
      commit('ADD_ITEM', item)
    }
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.authen.isAuthenticated = !state.authen.isAuthenticated
    },
    SETUP_ITEMS(state, items) {
      state.items = items
    },
    MARK_COMPLETE(state, itemId) {
      state.items.map(item => {
        if (item.id === itemId) item.isCompleted = !item.isCompleted
        // return todo
      })
    },
    DELETE_ITEMS(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId)
    },
    ADD_ITEM(state, item) {
      state.items.unshift(item)
    }
  }
}

const store = createStore(storeData)

export default store

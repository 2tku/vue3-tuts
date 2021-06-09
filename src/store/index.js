import { createStore } from 'vuex'

const storeData = {
  state() {
    return {
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
    }
  }
}

const store = createStore(storeData)

export default store

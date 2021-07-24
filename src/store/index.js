import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)
const BASEURL='https://swapi.dev/api/starships'
export default new Vuex.Store({
  state: {
    cardList:null,
    next:null,
    previous:null,
  },
  mutations: {
    SET_Items(state, items) {
      state.cardList = items
  },

 SET_Next(state, item) {
  state.next = item
},
SET_Previous(state, item) {
  state.previous = item
}
  },
  actions: {
    loadItems ({ commit },search="",page="") {
      axios
          .get(`${BASEURL}?page=${page}&search=${search}`)
          .then(response => response.data)
          .then(items => {
          commit('SET_Items', items.results)
          commit('SET_Next', items.next)
          commit('SET_Previous', items.previous)
      })
    },
    loadNextItems ({ commit,state }) {
      axios
          .get(state.next)
          .then(response => response.data)
          .then(items => {
          commit('SET_Items', items.results)
          commit('SET_Next', items.next)
          commit('SET_Previous', items.previous)
      })
    },
    loadPreviousItems ({ commit,state }) {
      axios
          .get(state.previous)
          .then(response => response.data)
          .then(items => {
          commit('SET_Items', items.results)
          commit('SET_Next', items.next)
          commit('SET_Previous', items.previous)
      })
    },
  },
  getters: {
    cardList: state => {
        return state.cardList;
    },

  next:state=>{
    return state.next;
  },
  previous:state=>{
    return state.previous;
  }
  }, 
  modules: {
  }
})

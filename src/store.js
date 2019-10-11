import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: true,
    users: []
  },
  getters: {
    auth: state => {
      return state.login;
    },
    getUser: state => {
      return state.users;
    }
  },
  mutations: {
    userLogged: (state, link) => {
      state.login = link;
    },
    addUser: (state, link) => {
      state.users.push(link);
    }
  },
  actions: {
    // authEnable: (context, link) => {
    //   context.commit("userLogged", link)
    // }
  }
});

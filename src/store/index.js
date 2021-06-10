import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fResultScreenValue: null,
    fResultScreenLeftValue: null,
    fResultScreenRghtValue: null,
    sResultScreenSign: null
  },
  getters: {
    getRsltScrnVal: state => {
      return state.fResultScreenValue;
    },
    getRsltScrnLeftVal: state => {
      return state.fResultScreenLeftValue;
    },
    getRsltScrnRghtVal: state => {
      return state.fResultScreenRghtValue;
    },
    getRsltScrnSign: state => {
      return state.sResultScreenSign;
    }
  },
  mutations: {
    mutSetLeftValue() {
      return 0;
    }
  },
  actions: {
    actNumBtnClicked( {commit}, iValue) {
      commit('mutTest');
      return iValue;
    },
    actClrBtnClicked() {
      return;
    },
    actSgnBtnClicked() {
      return;
    }
  },
  modules: {
  }
})

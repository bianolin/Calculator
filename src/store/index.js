import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fResultScreenValue: null,
    fResultScreenLeftValue: null,
    fResultScreenRghtValue: null,
    sResultScreenOperator: null,
    fDecimalValue: 0
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
    getRsltScrnOperator: state => {
      return state.sResultScreenOperator;
    }
  },
  mutations: {
    mutSetLeftValue(state, iValue) {
      if (state.fDecimalValue === 0) {
        if (iValue === '.') {
          state.fDecimalValue = 1 / 10;
        } else {
          if (state.fResultScreenLeftValue === null) {
            state.fResultScreenLeftValue = iValue;
          } else {
            state.fResultScreenLeftValue = state.fResultScreenLeftValue * 10 + iValue;
          }
        }
      } else {
        state.fResultScreenLeftValue = state.fResultScreenLeftValue + state.fDecimalValue * iValue;
        state.fDecimalValue = state.fDecimalValue / 10;
      }
      state.fResultScreenValue = state.fResultScreenLeftValue;
      return;
    },
    mutSetRghtValue(state, iValue) {
      if (state.fDecimalValue === 0) {
        if (iValue === '.') {
          state.fDecimalValue = 1 / 10;
        } else {
          if (state.fResultScreenRghtValue === null) {
            state.fResultScreenRghtValue = iValue;
          } else {
            state.fResultScreenRghtValue = state.fResultScreenRghtValue * 10 + iValue;
          }
        }
      } else {
        state.fResultScreenRghtValue = state.fResultScreenRghtValue + state.fDecimalValue * iValue;
        state.fDecimalValue = state.fDecimalValue / 10;
      }
      state.fResultScreenValue = state.fResultScreenRghtValue;
      return;
    },
    mutSetCalculationScreenOperator(state, sSign) {
      state.fDecimalValue = 0;
      state.sResultScreenOperator = sSign;
      return;
    },
    mutClearMainAndUpScreem(state) {
      state.fResultScreenValue = null,
      state.fResultScreenLeftValue = null,
      state.fResultScreenRghtValue = null,
      state.sResultScreenOperator = null,
      state.fDecimalValue = 0
      return;
    },
    mutSetMainResultScreen(state, fScreenValue) {
      state.fResultScreenValue = fScreenValue;
    } 
  },
  actions: {
    actNumBtnClicked( {state, commit}, iValue) {
      if (state.sResultScreenOperator === null) {
        commit('mutSetLeftValue', iValue);
      } else {
        commit('mutSetRghtValue', iValue)
      }
    },
    actClrBtnClicked({commit}) {
      // Clear all value
      commit('mutClearMainAndUpScreem');
      
    },
    actOperatorBtnClicked( {commit, state, dispatch}, sSign) {
      if (sSign === '=') {
        // Calculate
        let fResult = 0;
        if (state.sResultScreenOperator === '+') {
          fResult = state.fResultScreenLeftValue + state.fResultScreenRghtValue;
        } else if (state.sResultScreenOperator === '-') {
          fResult = state.fResultScreenLeftValue - state.fResultScreenRghtValue;
        } else if (state.sResultScreenOperator === '*') {
          fResult = state.fResultScreenLeftValue * state.fResultScreenRghtValue;
        } else if (state.sResultScreenOperator === '/') {
          fResult = state.fResultScreenLeftValue / state.fResultScreenRghtValue;
        } else if (state.sResultScreenOperator === '%') {
          fResult = state.fResultScreenLeftValue / state.fResultScreenRghtValue / 100;
        } else {
          dispatch('actClrBtnClicked');
        }
        commit('mutSetMainResultScreen', fResult);
      } else {
        commit('mutSetCalculationScreenOperator', sSign);
      }
    },
    actResolveMainScreenDisplay() {
      return;
    }
  },
  modules: {
  }
})

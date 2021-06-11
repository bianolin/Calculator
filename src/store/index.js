import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fResultScreenValue: 0,
    fResultScreenLeftValue: null,
    fResultScreenRghtValue: null,
    sResultScreenOperator: null,
    fDecimalValue: 0,
    aCalculationHistoryList: [],
    oTempCalculationHistory: {
      fLeftValue: null,
      fRghtValue: null,
      sOperator: '',
      fResultValue: null
    }
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
    },
    getCalculationHistoryList: state => {
      return state.aCalculationHistoryList;
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
      state.fResultScreenValue = 0,
      state.fResultScreenLeftValue = null;
      state.fResultScreenRghtValue = null;
      state.sResultScreenOperator = null;
      state.fDecimalValue = 0
      return;
    },
    mutClearLeftRightOperatorValue(state){
      state.fResultScreenLeftValue = null;
      state.fResultScreenRghtValue = null;
      return;
    },
    mutSetMainResultScreen(state, fScreenValue) {
      state.fResultScreenValue = fScreenValue;
      return;
    },
    mutSetCalculationToHistory(state) {
      state.oTempCalculationHistory.fLeftValue = state.fResultScreenLeftValue;
      state.oTempCalculationHistory.fRghtValue = state.fResultScreenRghtValue;
      state.oTempCalculationHistory.sOperator = state.sResultScreenOperator;
      state.oTempCalculationHistory.fResultValue = state.fResultScreenValue;
      state.aCalculationHistoryList.push(state.oTempCalculationHistory);
      debugger;
      return;
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
    actCalculateResult({commit, state, dispatch}) {
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
      // Commit to history list
      commit('mutSetCalculationToHistory');
    },
    actOperatorBtnClicked( {commit, state, dispatch}, sOperator) {
      if (sOperator === '=' && state.fResultScreenRghtValue != null) {
        dispatch('actCalculateResult');
      } else if (sOperator === '=' && state.sResultScreenOperator === null) {
        // do nothing
      } else if (sOperator != '=' && state.sResultScreenOperator != null && state.fResultScreenRghtValue != null) {
        // Calculate
        dispatch('actCalculateResult').then( () =>  {
          commit('mutClearLeftRightOperatorValue');
          commit('mutSetLeftValue', state.fResultScreenValue);
          commit('mutSetCalculationScreenOperator', sOperator);
        });
      } else {
        commit('mutSetCalculationScreenOperator', sOperator);
      }
    },
    actResolveMainScreenDisplay() {
      return;
    }
  },
  modules: {
  }
})

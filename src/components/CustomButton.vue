<template>
  <div class="CusBtnMain" v-bind:class="sClassIsEmptyBlock()">
    <button class="CustBtnMainBtn" 
      v-bind:class="btnType" 
      v-if="!isEmptySpace"
      v-on:click="onButtonClicked()"
    >
      {{btnText}}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CustomButton',
  components: {
  },
  props: {
    btnText: {},
    btnType: {},
    isEmptySpace: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    ...mapActions({
      actNumClick: 'actNumBtnClicked',
      actOperatorBtnClick: 'actOperatorBtnClicked',
      actClrBtnClick: 'actClrBtnClicked'
    }),
    sClassIsEmptyBlock: function() {
      if (this.isEmptySpace==="true") {
        return "CustBtnEmpty";
      }
      else{
        return "";
      }
    },
    onButtonClicked: function() {
      if (this.btnType === 'CusBtnMain_Num'){
        this.actNumClick(parseInt(this.btnText, 10));
      } else if (this.btnType === 'CusBtnMain_Sgn') {
        this.actOperatorBtnClick(this.btnText);
      } else {
        this.actClrBtnClick(this.btnText)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.CustBtnEmpty{
  flex: 1;
  min-width: 100%;
  background-color: transparent;
}
.CusBtnMain{
  flex: 1;
  display: inline-block;
  padding: 5px;
  max-height: 120px;
  max-width: 120px;
  min-width: 100px;
  width: 100%;
  height: 100%;
  .CusBtnMain_Num{
    background-color: #effafb;
  }
  .CusBtnMain_Clr{
    background-color: #c75050;
  }
  .CusBtnMain_Sgn{
    background-color: #257e86;
  }
  .CustBtnMainBtn{
    width: 100%;
    height: 100%;
    font-size: 32px;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    outline: none;
    color: rgb(61, 61, 61);
    // background-color: #effafb;
    border: none;
    border-radius: 20%;
  }

  .CustBtnMainBtn:hover {
    background-color: #aeb2c7;
  }

  .CustBtnMainBtn:active {
    background-color: #516088;
    transform: translateY(2px);
  }
}

.CusBtnMainWide{
  flex: 2 !important;
}
</style>
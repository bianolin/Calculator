<template>
  <div class="CusBtnMain" v-bind:class="sIsWideBtn()">
    <button class="CustBtnMainBtn" v-bind:class="btnType" >
      {{btnText}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'CustomButton',
  components: {
  },
  props: {
    btnText: String,
    btnType: String,
    isWide: {
      type: Boolean,
      default: false
    },
  },
  created() {
    return 0;
  },
  methods: {
    sIsWideBtn: function() {
      if (this.isWide==="true") {
        return "CusBtnMainWide";
      }
      else{
        return "";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.CusBtnMain{
  flex: 1;
  display: inline-block;
  padding: 5px;
  max-height: 120px;
  max-width: 120px;
  min-width: 100px;
  // min-width: 80px;
  // min-height: 80px;
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
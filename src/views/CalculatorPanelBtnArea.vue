<template>
  <div class="CalculatorPanelBtnAreaMain">
    <div class="CPBA_Left">
      <CustomButton btn-text=" " btn-type="CusBtnMain_Clr"/>
      <CustomButton btn-text="C" btn-type="CusBtnMain_Clr"/>
      <CustomButton btn-text="AC" btn-type="CusBtnMain_Clr"/>
      <CustomButton v-for="(value, index) in 9" v-bind:key="index"
        :btn-text="10-value" btn-type="CusBtnMain_Num"/>
      <CustomButton btn-text="." btn-type="CusBtnMain_Num"/>
      <CustomButton btn-text="0" btn-type="CusBtnMain_Num"/>
      <CustomButton btn-text=" " btn-type="CusBtnMain_Num"/>
    </div>
    <div class="CPBA_Rght">
      <CustomButton btn-text="+" btn-type="CusBtnMain_Sgn"/>
      <CustomButton btn-text="-" btn-type="CusBtnMain_Sgn"/>
      <CustomButton btn-text="*" btn-type="CusBtnMain_Sgn"/>
      <CustomButton btn-text="/" btn-type="CusBtnMain_Sgn"/>
      <CustomButton btn-text="=" btn-type="CusBtnMain_Sgn"/>
      <CustomButton btn-text=" " btn-type="CusBtnMain_Sgn"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'CalculatorPanelBtnArea',
  components: {
    CustomButton
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.CalculatorPanelBtnAreaMain{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .CPBA_Left{
    flex: 3;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }
  .CPBA_Rght{
    flex: 2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
}
</style>
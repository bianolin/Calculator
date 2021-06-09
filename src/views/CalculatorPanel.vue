<template>
  <div class="PanelMain">
    <div class="PanelMainTop">
    </div>
    <div class="PanelMainButtonArea">
      <CalculatorPanelBtnArea/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import CalculatorPanelBtnArea from '@/views/CalculatorPanelBtnArea.vue'

export default {
  name: 'CalculatorPanel',
  components: {
    CalculatorPanelBtnArea
  }
}
</script>

<style lang="scss" scoped>
.PanelMain{
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 3%;
  // background-color:darkorange;
  .PanelMainTop{
    height: 16%;
    margin-left: 2%;
    margin-right: 2%;
    background-image: linear-gradient(lightgray, lightblue);
    border-radius: 3px;
  }
  .PanelMainButtonArea{
    height: 84%;
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
    // background-color:lightcoral;
    padding-top: 2%;
  }
}
</style>
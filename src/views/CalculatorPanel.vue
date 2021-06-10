<template>
  <div class="PanelMain">
    <div class="PanelMainTopRcrd">
      <div class="PMTR_Screen">
        {{getRsltScrnLeftVal}} {{getRsltScrnOperator}} {{getRsltScrnRghtVal}}
      </div>
    </div>
    <div class="PanelMainTop">
      <div class="PanelMainTopText">
        {{getRsltScrnVal}}
      </div>
    </div>
    <div class="PanelMainButtonArea">
      <CalculatorPanelBtnArea/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import CalculatorPanelBtnArea from '@/views/CalculatorPanelBtnArea.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CalculatorPanel',
  components: {
    CalculatorPanelBtnArea
  },
  computed: {
    ...mapGetters([
      'getRsltScrnVal',
      'getRsltScrnLeftVal',
      'getRsltScrnRghtVal',
      'getRsltScrnOperator'
    ])
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
  .PanelMainTopRcrd{
    height: 8%;
    margin-left: 2%;
    margin-right: 2%;

    .PMTR_Screen{
      margin: 0;
      padding-top: 4%;
      padding-right: 5%;
      text-align: right;
      font-size: 28px;
    }
  }
  .PanelMainTop{
    height: 16%;
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    background-image: linear-gradient(lightgray, lightblue);
    border-radius: 3px;
    .PanelMainTopText{
      text-align: right;
      padding-right: 5%;
      padding-top: 7%;
      font-size: 48px;
    }
  }
  .PanelMainButtonArea{
    height: 66%;
    margin-left: 2%;
    margin-right: 2%;
    padding-top: 10%;
  }
}
</style>
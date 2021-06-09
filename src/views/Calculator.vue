<template>
  <div class="Main">
    <div class="CalArea">
      <div class="CalAreaHdr">
      </div>
      <div class="CalAreaPanel">
        <CalculatorPanel/>
      </div>
    </div>
    <div class="LogArea">
      <div class="LogAreaHdr">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CalculatorPanel from '@/views/CalculatorPanel.vue'

export default {
  name: 'Calculator',
  components: {
    CalculatorPanel
  }
}
</script>

<style lang="scss" scoped>
.Main{
  height: 100%;
  width: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  .CalArea{
    flex: 5;
    height: 100%;
    margin-right: 2px;
    .CalAreaHdr{
      height: 4%;
      background-color: gray;
    }
    .CalAreaPanel{
      height: 96%;
      background-color: darkgray;
    }
  }
  .LogArea{
    height: 100%;
    flex: 2;
    .LogAreaHdr{
      height: 4%;
      background-color: darkgray;
    }
  }
}
</style>
<template>
  <div class="Main">
    <div class="CalArea">

    </div>
    <div class="LogArea">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.Main{
  height: 100%;
  width: 100%;
  background-color: lightgray;
  display: flex;
  .CalArea{
    flex: 5;
    height: 100%;
    background-color:lightgreen
  }
  .LogArea{
    height: 100%;
    background-color:lightsalmon;
    flex: 2;
  }
}
</style>
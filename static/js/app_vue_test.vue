<template>
  <div id="text">
    <h3>
      {{text}}
    </h3>
  </div>
</template>

<script>
import * as Vue from 'vue';
console.log('Hey?')

const HelloVueApp = {
  el : '#testing',
  data() {
    return {
      message: 'НАКОНЕЦТО БЛЯТЬ'
    }
  }
}

export default Vue.createApp(HelloVueApp).mount('#testing')

</script>

<style scoped>
  #text{
    color : darkred;
    text-align: center;
    padding: 0 0 0 0;
  }
</style>
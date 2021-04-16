<template>
  <div id="text1">
    <h3>
      {{message}}
    </h3>
  </div>
</template>

<script>
import * as Vue from 'vue';
console.log('Hey?')

let c = 3

const HelloVueApp = {
  el : '#testing',
  mounted(){
    this.$nextTick(()=>{
      this.counter++
      console.log('x')
    })
  },
  data() {
    return {
      message: 'Hello',
      message2 : 'Vue',
      counter : c
    }
  }

}

export default Vue.createApp(HelloVueApp).mount('#testing')

</script>

<style>
  #text{
    color : darkred;
    text-align: center;
    padding: 0 0 0 0;
    text-decoration-line: overline;
  }
</style>
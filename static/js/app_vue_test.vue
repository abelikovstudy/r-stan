<template>
  <div id="text">
    <h3>
      {{text}}
    </h3>
  </div>
</template>

<script>
import { Vue } from 'vue/index';
const HelloVueApp = {
  data() {
    return {
      text: 'Hello Vue!!'
    }
  }
}

const app_vue_test = Vue.createApp(HelloVueApp).mount('#vue_app_test')

export default app_vue_test
</script>

<style scoped>
  #text{
    color : darkred;
    text-align: center;
    padding: 0 0 0 0;
  }
</style>
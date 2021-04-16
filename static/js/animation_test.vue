<template>
</template>

<script>
import * as Vue from "vue";

let rect = document.getElementById('demo')

let show = false
let fl = false

const Demo = {
  data() {
    return {
      show: true

    }
  },
  methods:{
    onloadtest(){
      if((fl === false) && (window.scrollY > rect.offsetTop)){
        this.show = false
        fl = true
      }
    }
  },
  mounted() {
    document.addEventListener('scroll',this.onloadtest)
  }
}

export default Vue.createApp(Demo).mount('#demo')

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  color: darkred;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
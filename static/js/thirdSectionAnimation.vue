<template>

</template>

<script>

import * as Vue from "vue"

let rect = document.getElementById('third_section')
let fl = false



const SecondAnimation = {
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      show: this.isShow()
    }
  },
  methods:{
    isShow(){
      if(fl === true){
        return  true
      }
      else {
        return  false
      }
    },
    handleScroll (event) {
      if(rect.offsetHeight < (window.scrollY)){
        this.show = true
      }
    }
  }
}

export default Vue.createApp(SecondAnimation).mount('#third_section')
</script>

<style>
.slide-fade-enter-active {
  transition: all 1.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
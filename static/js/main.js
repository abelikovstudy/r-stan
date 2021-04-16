import { Vue } from 'vue/index';
import app_vue_test from "./app_vue_test.vue";
import animation_test from "./animation_test.vue";
import secondSectionAnimation from "./secondSectionAnimation.vue";
import thirdSectionAnimation from "./thirdSectionAnimation.vue";

import {createApp} from "vue";
console.log('Hey1?')

let firstPic = document.getElementById('__firstPic')
firstPic.style.width = '64px'
firstPic.style.height = '64px'

let secondPic = document.getElementById('__secondPic')
secondPic.style.width = '64px'
secondPic.style.height = '64px'

let thirdPic = document.getElementById('__thirdPic')
thirdPic.style.width = '64px'
thirdPic.style.height = '64px'

const HelloVueApp = {
    el : '#testing',
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}

createApp(HelloVueApp).mount('#testing')




import { Vue } from 'vue/index';
import app_vue_test from "./app_vue_test.vue";
import {createApp} from "vue";
console.log('Hey?')


const HelloVueApp = {
    el : '#testing',
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}

createApp(HelloVueApp).mount('#testing')




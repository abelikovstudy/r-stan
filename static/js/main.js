import { Vue } from 'vue/index';
import app_vue_test from "./app_vue_test.vue";

const HelloVueApp = {
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}

Vue.createApp(HelloVueApp).mount('#vue_app_test')


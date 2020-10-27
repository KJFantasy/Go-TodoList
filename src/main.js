//创建根实例
import Vue from 'vue'
//import { component } from 'vue/types/umd'

import App from './App.vue'

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
import Vue from 'vue/dist/vue.esm'
import App from './App.vue'

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        render: h => h(App)
    })
});


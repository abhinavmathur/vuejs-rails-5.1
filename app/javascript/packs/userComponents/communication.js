import Vue from 'vue/dist/vue.esm'
import App from './Root.vue'

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        render: h => h(App)
    })
});


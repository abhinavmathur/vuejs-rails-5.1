import Vue from 'vue/dist/vue.esm'
import App from './App.vue'

export const serverBus = new Vue();

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#container',
        render: h => h(App)
    })
});


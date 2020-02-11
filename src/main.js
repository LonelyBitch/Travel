import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper,)


new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',

    render: h => h(App)
})

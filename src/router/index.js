import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/Home";
import City from "../pages/city/City";

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/city',
            name:'City',
            component:City
        }
    ]
})
<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from "@/pages/home/components/header";
    import HomeSwiper from "./components/Swiper";
    import HomeIcons from "./components/Icons";
    import HomeRecommend from "./components/Recommend";
    import HomeWeekend from "./components/Weekend";
    import axios from 'axios';

    export default {
        name: "Home",

        components: {
            HomeWeekend,
            HomeRecommend,
            HomeIcons,
            HomeSwiper,
            HomeHeader,
        },

        data() {
            return {
                city: '北京',
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList:[]
            }
        },

        methods: {
            getHomeInfo() {
                axios.get('index.json').then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            },
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style>

</style>
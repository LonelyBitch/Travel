<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
    import HomeHeader from "@/pages/home/components/header";
    import HomeSwiper from "./components/Swiper";

    export default {
        name: "Home",

        components: {
            HomeSwiper,
            HomeHeader,
        },

    }
</script>

<style>

</style>
<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-image" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",

        props:{
            swiperList: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },
            }
        }
    }
</script>

<style long="stylus" scoped>

    .wrapper >>> .swiper-pagination-bullet-active {
        background: brown;
    }

    .wrapper {
        width: 100%;
        heigth: 31.25%;
        background: #cacaca;
    }

    .swiper-image {
        width: 100%;
    }


</style>
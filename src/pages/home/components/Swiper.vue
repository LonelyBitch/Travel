<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img class="swiper-image" src="//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-image" src="//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-image" src="//imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg">
            </swiper-slide>


            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },

                swiperList: [{
                    id: '001',
                    imgurl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
                }, {
                    id: '002',
                    imgurl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
                }, {
                    id: '003',
                    imgurl: '//imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
                }]
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
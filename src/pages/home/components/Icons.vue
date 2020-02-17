<template>
    <div class="icons">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-image">
                        <img class="icon-image-content" :src="item.imgUrl">
                    </div>
                    <div class="icon-image-desc">{{item.desc}}</div>
                </div>
            </swiper-slide>
        </swiper>

    </div>

</template>

<script>
    export default {
        name: "HomeIcons",

        props:{
            list:Array
        },

        data(){
            return{

            swiperOption:{
                autoplay:false

            }
            }
        },
        // data() {
        //     return {
        //
        //
        //         iconList: [{
        //             id: '001',
        //             img: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        //             desc: '旅馆'
        //         },
        //             {
        //                 id: '002',
        //                 img: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        //                 desc: '订机票'
        //             },
        //             {
        //                 id: '003',
        //                 img: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        //                 desc: '订机票'
        //
        //             },
        //             {
        //                 id: '004',
        //                 img: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        //                 desc: '出去玩'
        //
        //             },
        //             {
        //                 id: '005',
        //                 img: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        //                 desc: '出国游'
        //             },
        //             {
        //                 id: '006',
        //                 img: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        //                 desc: '打折机票'
        //
        //             },
        //             {
        //                 id: '007',
        //                 img: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        //                 desc: '汽车'
        //
        //             },
        //             {
        //                 id: '008',
        //                 img: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        //                 desc: '自助游'
        //
        //             },
        //             {
        //                 id: '009',
        //                 img: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        //                 desc: '自助游'
        //
        //             }
        //         ]
        //
        //     }
        //
        // },

        computed: {
            pages() {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })

                return pages;
            }
        }

    }
</script>

<style long="stylus" scoped>
    .icons {
        margin-top: .1rem;
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
    }

    .icon {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        border: white;
        border-left: .1rem;
    }

    .icon-image {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: .8rem;
        padding: .1rem;
        box-sizing: border-box;
        text-align: center;
    }

    .icon-image-content {

        display: block;
        margin: 0 auto;
        height: 100%;
    }

    .icon-image-desc {
        position: absolute;

        left: 0;
        right: 0;
        bottom: 0;
        height: .8rem;
        text-align: center;
        line-height: .8rem;
    }

    .icon-image-desc {
        color: #333333;
    }


</style>
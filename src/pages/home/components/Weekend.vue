<template>
    <div class="weekend">
        <div class="title">周末游</div>
        <ul>
            <li class="item"  v-for="item of list" :key="item.id">
                <div class="item-img-warpper">
                    <img class="item-img"
                         :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}} </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",

        props:{
            list:Array,
        }
        // data(){
        //     return{
        //         recommendList:[{
        //             id:'001',
        //             img:'//imgs.qunarzz.com/sight/p0/1504/de/de67e39701f98515.water.jpg_256x160_1ccdec10.jpg',
        //             title:'九寨沟黄龙',
        //             desc:'飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0'
        //
        //         },
        //             {
        //                 id:'002',
        //                 img:'//imgs.qunarzz.com/sight/p0/1504/de/de67e39701f98515.water.jpg_256x160_1ccdec10.jpg',
        //                 title:'九寨沟黄龙',
        //                 desc:'飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0'
        //
        //             },{
        //                 id:'003',
        //                 img:'//imgs.qunarzz.com/sight/p0/1504/de/de67e39701f98515.water.jpg_256x160_1ccdec10.jpg',
        //                 title:'九寨沟黄龙',
        //                 desc:'飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0'
        //
        //             }
        //         ]
        //     }
        // }
    }
</script>

<style long="stylus" rel="stylesheet/stylus" scoped>
    .weekend{
        margin-top: .2rem ;
    }
    .title {
        margin-top: .1rem;
        line-height: .6rem;
        background: #cccc;
        text-indent: .2rem;
    }


    .item-img-warpper{
        overflow: hidden;
        height: 0;
        padding-bottom: 33%;
     }

    .item-img {
        height: 3rem;
        width: 100%;
    }

    .item-info {
        padding: .1rem;
        min-width:0;
    }

    .item-title {
        line-height: .54rem;
        font-size: .32rem;
        margin-bottom: .01rem;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .item-desc {
        line-height: 1;
        color: #cccccc;
        overflow: hidden;        /*内容会被修剪，并且其余内容是不可见的*/
        text-overflow:ellipsis;  /*显示省略符号来代表被修剪的文本。*/
        white-space: nowrap;     /*文本不换行*/

    }


</style>
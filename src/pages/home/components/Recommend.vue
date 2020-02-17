<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item"  v-for="item of list" :key="item.id">
                <div class="item-img-warpper">
                    <img class="item-img"
                         :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}} </p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",

        props:{
            list:Array,
        }
        // data(){
        //     return{
        //         recommendList:[{
        //             id:'001',
        //             img:'//imgs.qunarzz.com/vs_ceph_vs_tts/3cbe255c-539b-4958-b0bc-a2c2e2ba4444.jpg_r_390x260x90_5ab5ba96.jpg',
        //             title:'九寨沟黄龙',
        //             desc:'飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0'
        //
        //         },
        //             {
        //                 id:'002',
        //                 img:'//imgs.qunarzz.com/vs_ceph_vs_tts/3cbe255c-539b-4958-b0bc-a2c2e2ba4444.jpg_r_390x260x90_5ab5ba96.jpg',
        //                 title:'九寨沟黄龙',
        //                 desc:'飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0 飞机往返|早中班可选|超值特卖|0'
        //
        //             },{
        //                 id:'003',
        //                 img:'//imgs.qunarzz.com/vs_ceph_vs_tts/3cbe255c-539b-4958-b0bc-a2c2e2ba4444.jpg_r_390x260x90_5ab5ba96.jpg',
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
    .title {
        margin-top: .1rem;
        line-height: .6rem;
        background: #cccc;
        text-indent: .2rem;
    }

    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
    }

    .item-img {
        width: 2.7rem;
        height: 1.7rem;
        padding: .1rem;
    }

    .item-info {
        /*flex: 1;*/
        padding: .1rem;
        min-width:0;
    }

    .item-title {
        line-height: .54rem;
        font-size: .32rem;
        margin-bottom: .2rem;
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

    .item-button {
        border-radius: .1rem;
        line-height: .4rem;
        margin-top: .4rem;
        padding: 0 .2rem;
        background: #ff9300;
    }

</style>
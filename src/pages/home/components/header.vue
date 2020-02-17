<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe61c;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe627;</span>请输入城市/地点/酒店
        </div>
        <div class="header-right">
            {{city}}
            <span class="iconfont arrow-icon">&#xe681;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props: {
            city:String
        }
    }
</script>

<style lang="stylus" scoped>
    .header
        display: flex;
        line-height: .86rem;
        background :#25a4bb;
        color white;
    .header-left
        width: .64rem;
        float: left;
        .back-icon
         text-align center
         font-size .4rem
      .header-input
        flex: 1
        background #ffffff;
        line-height .64rem;
        margin-top .12rem
        margin-left .2rem
        border-radius .2rem
        color #ccc
        height .64rem
    .header-right
        width: 1.24rem;
        float: right;
        text-align:center;
        .arrow-icon
           margin-left -.05rem
           font-size .3rem

</style>
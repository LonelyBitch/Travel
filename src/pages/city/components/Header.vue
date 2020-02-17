<template>
    <div class="header">城市选择
        <router-link  to="/">
        <div class="iconfont header-back">&#xe61c;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>

    .header {
        position relative;
        overflow hidden;
        font-size .32rem;
        height .86rem;
        text-align center;
        line-height .86rem;
        background #25a4bb;
    }

    .header-back {
        position absolute;
        top 0;
        left 0;
        width .64rem;
        text-align center;
        font-size .5rem;
        color white
    }
</style>
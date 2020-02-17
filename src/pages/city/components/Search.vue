<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市">
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style lang="stylus" scoped>

    .search{
        background #25a4bb;
        overflow hidden;
        height .72rem;
        padding 0 .1rem;
    }
    .search-input{
        box-sizing border-box;
        padding 0 .1rem;
        height .6rem;
        text-align center;
        line-height .6rem;
        width 100%;
        border-radius .1rem;
        color #666;
    }
</style>
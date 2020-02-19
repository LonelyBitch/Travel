<template>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市">
        <div class="search-content" ref="search"  v-show="keyword">
            <ul >
                <li v-for="item of list" :key="item.id" class="search-item">
                    {{item.name}}
                </li>
                <li v-show="!list.length" class="search-item">没有内容匹配</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Search",
        data() {
            return {
                keyword: '',
                list: [],
                timer:null
            }
        },
        props: {
            cities: Object,
        },
        watch: {
            keyword() {
                if (this.timer){
                    clearTimeout(this.timer)
                }
                const result = []
                if(!this.keyword){
                    this.list = []
                    return
                }
                this.timer = setTimeout(()=>{
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword)>-1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
                },100)
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.search)
        }
    }
</script>

<style lang="stylus" scoped>

    .search {
        background #25a4bb;
        overflow hidden;
        height .72rem;
        padding 0 .1rem;
    }

    .search-input {
        box-sizing border-box;
        padding 0 .1rem;
        height .6rem;
        text-align center;
        line-height .6rem;
        width 100%;
        border-radius .1rem;
        color #666;
    }

    .search-content {
        z-index 1;
        overflow hidden;
        position absolute
        top 1.58rem;
        left 0rem
        right 0rem
        bottom 0rem
        background white

    }
    .search-item{
        line-height .62rem
        padding-left .2rem
        background #fff
    }

</style>
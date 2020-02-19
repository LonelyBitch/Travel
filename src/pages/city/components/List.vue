<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button"  >{{this.city}}</div>
                    </div>

                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item of hotCities"
                         :key="item.id"
                         @click="handleCityClick(item.name)">
                        <div class="button"  @click="handleCityClick">{{item.name}}</div>
                    </div>

                </div>
            </div>
            <div class="area" v-for="(items,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="itemList" v-for="item of items" :key="item.id">
                    <div class="item border-bottom" @click="handleCityClick(item.name )">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "List",
        props: {
            hotCities: Array,
            cities: Object,
            letter: String,
        },
        computed:{
            ...mapState(['city'])
        },
        methods: {
            handleCityClick(city){
                this.change(city)
                this.$router.push('/')
          },
            ...mapMutations(['change'])
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
        },
        watch: {
            letter() {
                if (this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .border-topbottom {
        &:before {
            border-color #ccc;
        }

        &:after {
            border-color #ccc;
        }
    }

    .border-bottom {
        &:before {
            border-color black;
        }
    }

    .list {
        overflow hidden;
        position absolute;
        top 1.6rem;
        left 0;
        right 0;
        bottom 0;

    }

    .title {
        line-height .5rem;
        padding-left .2rem;
        background #eee;
        color #666666;
        font-size .3rem;
    }

    .button-list {
        overflow hidden;
        padding .1rem .6rem .1rem .1rem;
    }

    .button-wrapper {
        float left;
        width 33.3%;
    }

    .button {
        padding .1rem;
        text-align center;
        border .02rem solid #333333;
        margin .1rem;
        border-radius .1rem;
    }


    .item {
        line-height .6rem;
        padding-left .2rem;

    }

</style>
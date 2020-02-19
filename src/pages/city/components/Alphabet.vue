<template>
    <ul class="list">
        <li class="item" v-for="(item) of letters" :key="item" :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props: {
            cities: Object
        },
        data() {
            return {
                touchstatus: false,
                startY: 0,
                timer: null
            }
        },
        computed: {
            letters() {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handleLetterClick(e) {
                this.$emit('change', e.target.innerText);
            },
            handleTouchStart() {
                this.touchstatus = true
            },
            handleTouchMove(e) {
                if (this.touchstatus) {

                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 79
                        const index = Math.floor((touchY - this.startY) / 23)
                        if (index >= 0 && index < this.letters.length)
                            this.$emit('change', this.letters[index])
                    }, 20)
                }

            },
            handleTouchEnd() {
                this.touchstatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .list {
        position absolute;
        top 2rem;
        right 0rem;
        bottom 2rem;
        width .4rem;
        display flex;
        flex-direction column;
        justify-content center;
        color blueviolet
    }

    .item {
        text-align center;
        line-height .45rem
    }
</style>
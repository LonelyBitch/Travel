<template>
    <div>
        <Header></Header>
        <Search :cities="cities"></Search>
        <list :hotCities="hotCities" :cities="cities"  :letter="letter"></list>
        <Alphabet :cities="cities" @change="handleLetterChange"></Alphabet>
    </div>
</template>
<script>
    import Header from "./components/Header";
    import Search from "./components/Search";
    import List from "./components/List";
    import Alphabet from "./components/Alphabet";
    import axios from "axios";

    export default {
        name: "City",
        components: {Alphabet, List, Search, Header},
        data(){
            return{
                hotCities:[],
                cities :{},
                letter:'',
            }
        },
        methods: {
            getCityInfo() {
                axios.get("city.json").then(this.getCityInfoSuccess)
            },
            getCityInfoSuccess(res){
                res = res.data
                 if (res.ret && res.data){
                    const data = res.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            },
            handleLetterChange(letter){
                this.letter = letter;
            }
        },
        mounted() {
            this.getCityInfo();
        }
    }
</script>

<style lang="stylus" scoped>

</style>
<template>
    <div>
        <Header></Header>
        <Search></Search>
        <list></list>
        <Alphabet></Alphabet>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Search from "./components/Search";
    import List from "./components/List";
    import Alphabet from "./components/Alphabet";

    export default {
        name: "City",
        components: {Alphabet, List, Search, Header}
    }
</script>

<style lang="stylus" scoped>

</style>
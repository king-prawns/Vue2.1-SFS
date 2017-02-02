<template>
    <header>
        <h1>{{ $t("message.TITLE") }}</h1>
    </header>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
    position: relative;
    height: 83px;
    background-color: #35495E;
    h1 {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        padding-top: 20px;
        text-align: center;
        color: white;
    }
}
</style>

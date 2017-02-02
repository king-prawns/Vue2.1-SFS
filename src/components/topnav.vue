<template>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">
                <img class="brand" src="../assets/brand.png">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <router-link to="/users" tag="li">
                    <a href="#">
                        {{ $t("message.USER_LIST") }}
                    </a>
                </router-link>
                <router-link to="/posts" tag="li">
                    <a href="#">
                        {{ $t("message.POST_LIST") }}
                    </a>
                </router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <select-lang></select-lang>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import SelectLang from './selectlang'

export default {
  components: {
    SelectLang
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
    background-color: #41B883;
    border-color: transparent !important;
    .navbar-brand {
        padding: 0 15px !important;
        .brand {
            height: 50px;
        }
    }
    a {
        color: black !important;
    }
    #changeLanguage {
        margin-top: 10px;
    }
}
</style>

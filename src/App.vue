<template>
  <div>
    <my-header></my-header>
    <topnav></topnav>
    <!-- main view -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <transition name="fade" mode="out-in">
                    <keep-alive>
                        <router-view>
                        </router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Topnav from './components/Topnav'
import MyHeader from './components/MyHeader'

export default {
  components: {
    Topnav,
    MyHeader
  }
}
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "~bootstrap/dist/css/bootstrap.css";

.top-right {
    position: absolute;
    top: 10px;
    right: 15px;
}
.router-link-active {
    font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>

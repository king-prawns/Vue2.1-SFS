<template>
<div id="changeLanguage">
    <button type="button"class="btn btn-secondary btn-sm" v-on:click="changeLanguage('it')">{{ $t("message.BUTTON_LANG_IT") }}</button>
    <button type="button" class="btn btn-secondary btn-sm" v-on:click="changeLanguage('en')">{{ $t("message.BUTTON_LANG_EN") }}</button>
    </div>
</template>
 

<script>
import Vue from 'vue'

export default {
  methods: {
    changeLanguage (lang) {
      Vue.config.lang = lang
    }
  }
}
</script>
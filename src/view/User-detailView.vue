<template>
    <div id="userDetails">
        <router-link :to="{name: 'userTodos', params: {id: userID}}" class="btn btn-success top-right" tag="button">
            {{ $t("message.SHOW_TODOS")}}
        </router-link>
        <h4>{{ $t("message.USER_DETAIL") }}</h4>
        <form>
            <div class="form-group">
                <label for="name">{{ $t("message.NAME") }}</label>
                <input id="name" type="text" class="form-control" v-model="user.name" name="name">
            </div>
            <div class="form-group">
                <label for="email">{{ $t("message.EMAIL") }}</label>
                <div class="input-group">
                    <span class="input-group-addon">@</span>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
            </div>
            <div class="form-group">
                <label for="username">{{ $t("message.USERNAME") }}</label>
                <input type="text" class="form-control" v-model="user.username">
            </div>
            <div class="form-group">
                <label for="phone">{{ $t("message.PHONE") }}</label>
                <input type="text" class="form-control" v-model="user.phone">
            </div>
            <button type="button" class="btn btn-primary" v-on:click="updateUser()">{{ $t("message.UPDATE_USER") }}</button>
            <button type="button" class="btn btn-info" v-on:click="sayName(user.name, user.username)">{{ $t("message.SAY_NAME") }}</button>
        </form>
    </div>
</template>


<script>
import services from '../service'
import CustomWidget from '../widget/customWidget'

export default {
  data () {
    return {
      user: {},
      userID: 0
    }
  },
  methods: {
    updateUser () {
      return services.updateUser(this.user.id, this.user)
    },
    sayName (firstName, lastName) {
      CustomWidget.fullName(firstName, lastName)
    },
    fetchData () {
      services.fetchUser(this.$route.params.id)
      .then((user) => {
        document.title = 'User Detail'
        this.user = user
        this.userID = this.$route.params.id
      })
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'userDetails') {
        this.fetchData()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#userDetails {
    padding-top: 10px;
}
</style>
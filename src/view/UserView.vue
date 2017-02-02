<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>{{ $t("message.ID") }}</th>
                    <th>{{ $t("message.NAME") }}</th>
                    <th>{{ $t("message.EMAIL") }}</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="user in users">
                    <router-link :to="{ name: 'userDetails', params: {id: user.id}}" tag="tr" class="userRow" v-bind:key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                    </router-link>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import services from '../service'

export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'userList') {
        this.fetchData()
      }
    }
  },
  methods: {
    fetchData () {
      services.fetchUsers()
      .then((users) => {
        document.title = 'User List'
        this.users = users
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.userRow {
    cursor: pointer;
}
</style>
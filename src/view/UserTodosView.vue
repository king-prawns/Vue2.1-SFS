<template>
<div id="todos">
    <router-link tag="button" class="btn btn-success top-right" :to="{ name: 'userDetails', params: { id: userID}}">
        {{ $t("message.BACK_TO_USER") }}
    </router-link>
    <h4>
        TODO:
        {{todos | nCompletedTodo}}
        /
        {{todos.length}}
    </h4>
    <div v-for="todo in todos" class="checkbox disabled">
        <label>
            <input type="checkbox" v-model="todo.completed" disabled>
            {{todo.title}}
        </label>
    </div> 
</div>
</template>

<script>
import services from '../service'

export default {
  data () {
    return {
      todos: [],
      userID: 0
    }
  },
  filters: {
    nCompletedTodo (todos) {
      var completed = 0
      for (var todo of todos) {
        if (todo.completed) {
          completed++
        }
      }
      return completed
    }
  },
  methods: {
    fetchData () {
      services.fetchUserTodos(this.$route.params.id)
      .then((todos) => {
        document.title = 'User Todos'
        this.todos = todos
        this.userID = this.$route.params.id
      })
    }
  },

  created () {
    this.fetchData()
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'userTodos') {
        this.fetchData()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#todos {
    padding-top: 10px;
}
</style>
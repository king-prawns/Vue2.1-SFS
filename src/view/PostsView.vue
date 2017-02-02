<template>
    <div id="posts">
        <div class="panel panel-default" v-for="post in posts">
            <div class="panel-heading">
                {{post.title}}
            </div>
            <div class="panel-body">
                <p>{{post.body}}</p>
                <router-link :to="{ name: 'userDetails', params: {id: post.userId}}" tag="button">
                    {{ $t("message.GO_TO_USER") }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import services from '../service'

export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      services.fetchPosts()
      .then((posts) => {
        document.title = 'Posts'
        this.posts = posts
      })
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
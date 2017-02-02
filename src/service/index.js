import Vue from 'vue'

const service = {}
const _urlBase = 'http://localhost:3000'

export default service

service.fetchUsers = () => {
  return Vue.http.get(_urlBase + '/users')
    .then((response) => {
      return response.data
    }, (response) => {
      console.log(response)
    })
}

/**
 * Fetch a user data with given id.
 *
 * @param {Number} id
 * @return {Http}
 */
service.fetchUser = (userID) => {
  return Vue.http.get(_urlBase + '/users/' + userID)
    .then((response) => {
      return response.data
    }, (response) => {
      console.log(response)
    })
}

service.updateUser = (userID, user) => {
  return Vue.http.put(_urlBase + '/users/' + userID, user)
    .then((response) => {
      console.log('user updated!')
    }, (response) => {
      console.log(response)
    })
}

service.fetchPosts = () => {
  return Vue.http.get(_urlBase + '/posts')
    .then((response) => {
      return response.data
    }, (response) => {
      console.log(response)
    })
}

service.fetchUserTodos = (userID) => {
  return Vue.http.get(_urlBase + '/todos?userId=' + userID)
    .then((response) => {
      return response.data
    }, (response) => {
      console.log(response)
    })
}

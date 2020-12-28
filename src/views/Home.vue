<template>
  <div class="home">
    <h1>HOME</h1>
    <div class="user">
      <router-link 
      v-for="user in users" 
      :to="{ name:'UserProfile', params: {userId: user.id} }"
      :key="user.id">
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from '../assets/users'
// @ is an alias to /src

export default {
  name: 'Home',
  setup() {
    return {users}
  }
}
</script>

<style lang="scss" scoped>

.home {
  padding: 50px 5%;

  .user {
    display: flex;
    flex-direction: column;
  }
}

</style>
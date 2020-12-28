<template>
  <div id="app">
    <nav>
      <router-link to='/'>
        <div class="logo">TWOTTER</div>
      </router-link>
      <div class="name" v-if="user">@{{ user.username }}</div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

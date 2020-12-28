<template>
    <h1>@{{ state.user.username }}</h1>
    <h2>{{ userId }}</h2>
    <div v-if="state.user.isadmin">Admin</div>
    <div>
        <strong>Followers: {{ state.followers }}</strong>
    </div>
    <button @click="followUser" >Follow</button>

    <CreateTwootPanel 
    @add-twoot="addTwoot"/>

    <TwootItem 
    v-for="twoot in state.user.twoots" 
    :key="twoot.id" 
    :username="state.user.username" 
    :twoot="twoot" 
    @fav="toggleFav"/>
</template>

<script>
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel";
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "../assets/users";

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    })

    function addTwoot(twoot) {
        state.user.twoots.unshift( {
          id: state.user.twoots.length + 1,
          content: twoot
      } );
    }

    function followUser() {
      state.followers++;
    }

    function toggleFav(id) {
        console.log('tweets favored ' + id)
    }

    return {
      state,
      addTwoot,
      followUser,
      toggleFav,
      userId,
    }
  },

  // watch: {
  //   followers(newFollowerCount, oldFollowerCount) {
  //     if (oldFollowerCount < newFollowerCount) {
  //       console.log(`${this.user.username} has gained a follower`);
  //     }
  //   }
  // },
  // mounted() {
  //   // Run when first load the component
  //   this.followUser();
  // }
}
</script>

<style lang="scss" scoped>

</style>

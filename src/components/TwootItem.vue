<template>
    <div class="twoots" @click="favTwoot(twoot.id)">
        @{{ username }} said: {{ twoot.content }}
    </div>
</template>

<script>
export default {
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    },
    methods: {
        favTwoot(id) {
            this.$emit('fav', id)
        }
    }
}
</script>

<style scoped lang='scss'>
    .twoots {
        background: lightgreen;
        padding: 1em;
        border-radius: 10px;
        margin-bottom: 1em;
    }
</style>
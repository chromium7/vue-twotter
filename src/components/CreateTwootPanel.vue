<template>
    <form 
    @submit.prevent="createNewTwoot" 
    :class="{ exceeded: newTwootCharCount >= 180 }">
        <label for="newTwoot"><strong>New twoot</strong> ({{ newTwootCharCount }}/180)</label>
        <div>
            <textarea name="" id="newTwoot" cols="30" rows="4" v-model="state.newTwootContent"></textarea>            
        </div>
        <div class="twoot-type">
            <label for="newTwootType"><strong>Type</strong></label>
            <select name="" id="newTwootType" v-model="state.selectedTwootType">
                <option 
                :value="option.value" 
                v-for="(option, index) in state.twootTypes" 
                :key="index">
                    {{ option.name }}
                </option>
            </select>
        </div>
        <button>
            Twwoooot
        </button>
    </form>    
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: "CreateTwootPanel",
    setup(props, ctx) {
        const state = reactive({
            newTwootContent: "",
            selectedTwootType: "instant",
            twootTypes: [
                { value: 'draft', name: "Draft" },
                { value: "instant", name: "Instant"},
            ],
        })
        
        const newTwootCharCount = computed(() => state.newTwootContent.length)

        function createNewTwoot() {
            if (state.newTwootContent && state.selectedTwootType != 'draft') {
                ctx.emit('add-twoot', state.newTwootContent);
                state.newTwootContent = "";
            }
        }

        return {
            state,
            newTwootCharCount,
            createNewTwoot
        }
    },
}
</script>

<style lang="scss" scoped>
  form {

    textarea {
      border-color: black;
      outline: none;
    }

    &.exceeded {
      textarea {
        color:red;
        border-color: red;
      }
      button {
        background: red;
        border-color: none;
        color: white;
      }
    }
  }
</style>
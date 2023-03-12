<template>
<div id="message_info_block" v-bind:class="getMessageInfo.class + ' message_info_block'" @click="close" class="message_info_block">
    <p class="message_info_block_content">{{ getMessageInfo.content }}</p>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: 'MessageInfo',
    computed: {
        ...mapGetters('utils', ['getMessageInfo']),
    },
    // lorsque le composant est appelé
    mounted() {

    },
    updated() {

    },
    watch() {

    },
    methods: {
        ...mapMutations('utils', ['setMessageInfo'],),

        close() {
            document.querySelector('#message_info_block').style.opacity = 0;
        }
    }
}
</script>
<template>
    <div class="application_body" id="application_body">
        <MessageInfo/>
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import MessageInfo from '@/components/MessageInfo.vue';

export default {
    name: 'AdminLayoutView',
    components: {
        MessageInfo,
    },
};
</script>


<template>
   <div class="loader_spinner_block">
        <Loader :loading="true" :color="'#006E90'" :height="'35px'" :width="'35px'"></Loader>
   </div> 
</template>

<script>
import Loader from 'vue-spinner/src/ClipLoader.vue';

export default {
    name: 'LoaderSpinner',
    components: {
        Loader,
    },
}
</script>

<style>
.loader_spinner_block {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
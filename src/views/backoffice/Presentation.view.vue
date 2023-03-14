<template>
    <div class="presentation_block">
        <h2 class="backoffice_presentation_title">Modifier la présentation</h2>
        <EditPresentationForm/>
    </div>
</template>

<script>
import EditPresentationForm from '@/components/forms/EditPresentation.vue';
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'PresentationView',
    components: {
        EditPresentationForm,
    },
    computed: {
        ...mapGetters('presentation', ['getPresentation'])
    },
    methods: {
        ...mapActions('presentation', ['actionGetPresentation']),
    },
    mounted() {
        // appel de la présentation en force
        this.actionGetPresentation({ force: true });
    },
};
</script>
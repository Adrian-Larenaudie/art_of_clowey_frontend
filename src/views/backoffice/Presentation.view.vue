<template>
    <div class="presentation_block">
        <h2 class="backoffice_presentation_title">Modifier la présentation</h2>
        <EditPresentationForm/>
    </div>
</template>

<script>
import EditPresentationForm from '@/components/forms/EditPresentation.vue';

export default {
    name: 'PresentationView',
    components: {
        EditPresentationForm,
    }
};
</script>
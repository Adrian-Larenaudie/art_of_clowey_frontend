<template>
    <div class="backoffice_faq_block">
        <h2 class="backoffice_faq_title">Gestion de la FAQ</h2>
        <AddFaqForm/>
        <EditFaqForm/>
    </div>
</template>

<script>
import AddFaqForm from '@/components/forms/AddFaq.vue';
import EditFaqForm from '@/components/forms/EditFaq.vue';

export default {
    name: 'AdminFaqView',
    components: {
        AddFaqForm,
        EditFaqForm
    }
};
</script>
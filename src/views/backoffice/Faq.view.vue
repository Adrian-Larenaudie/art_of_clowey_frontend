<template>
    <div class="backoffice_faq_block">
        <h2 class="backoffice_faq_title">Gestion de la FAQ</h2>
        <AddFaqForm/>
        <EditFaqForm v-for="faq in getAllFaqs.data" :key="faq.id" :faqId="faq.id"/>
    </div>
</template>

<script>
import AddFaqForm from '@/components/forms/AddFaq.vue';
import EditFaqForm from '@/components/forms/EditFaq.vue';
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'AdminFaqView',
    components: {
        AddFaqForm,
        EditFaqForm
    },
    computed: {
        ...mapGetters('faq', ['getAllFaqs'])
    },
    methods: {
        ...mapActions('faq', ['actionGetAllFaqs']),
    },
    mounted() {
        // appel des faq, on force l'appel en backoffice même si déjà présente dans le state
        this.actionGetAllFaqs({ force: true });
    },
};
</script>
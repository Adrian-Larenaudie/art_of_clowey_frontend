<template>
    <div class="work_block">
        <h2 class="work_title">Gestion des dessins</h2>
        <AddWorkForm/>
        <WorkAdminFilter/>
        <EditWorkForm/>
    </div>
</template>

<script>
import AddWorkForm from '@/components/forms/AddWork.vue';
import WorkAdminFilter from '@/components/WorkAdminFilter.vue';
import EditWorkForm from '@/components/forms/EditWork.vue';
import { mapActions } from "vuex";

export default {
    name: 'WorkView',
    components: {
        AddWorkForm,
        WorkAdminFilter,
        EditWorkForm,
    },
    created() {
        // on récupère toutes les catégories sauf si elles le sont déjà à l'aide de la valeur force à false
        this.actionGetAllCategories({ force: false });
    },
    methods: {
        ...mapActions('category', ['actionGetAllCategories']),
    },
};
</script>
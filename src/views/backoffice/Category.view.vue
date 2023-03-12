<template>
    <div class="category_block">
        <h2 class="category_title">Gestion des catégories</h2>
        <AddCategoryForm/>
        <EditCategoryForm v-for="category in getAllCategories.data" :key="category.id" :categoryId="category.id" />
    </div>
</template>

<script>
import AddCategoryForm from '@/components/forms/AddCategory.vue';
import EditCategoryForm from '@/components/forms/EditCategory.vue';
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'CategoryView',
    components: {
        AddCategoryForm,
        EditCategoryForm,
    },
    computed: {
        ...mapGetters('category', ['getAllCategories'])
    },
    methods: {
        ...mapActions('category', ['actionGetAllCategories']),
    },
    mounted() {
        // appel des catégories opn force l'appel en backoffice même si déjà présente dans le state
        this.actionGetAllCategories({ force: true });
    },
};
</script>
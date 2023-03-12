<template>
    <div class="category_block">
        <h2 class="category_title">Gestion des catégories</h2>
        <AddCategoryForm/>
        <EditCategoryForm/>
    </div>
</template>

<script>
import AddCategoryForm from '@/components/forms/AddCategory.vue';
import EditCategoryForm from '@/components/forms/EditCategory.vue';

export default {
    name: 'CategoryView',
    components: {
        AddCategoryForm,
        EditCategoryForm,
    }
};
</script>
<template>
    <div class="work_management_segment"></div>
    <div class="filter_work_block">
        <label for="category_filter_label">Filtrer par catégorie</label>
        <select class="filter_work_input" id="category_filter_select">
            <option value="">Toutes</option>
            <option value="">Digital</option>
            <option value="">Traditionel</option>
            <option value="">Aquarelle</option>
        </select>
    </div>    
</template>

<script>
export default {
    name: 'WorkAdminFilter',
}
</script>
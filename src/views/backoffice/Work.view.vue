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

export default {
    name: 'WorkView',
    components: {
        AddWorkForm,
        WorkAdminFilter,
        EditWorkForm,
    }
};
</script>
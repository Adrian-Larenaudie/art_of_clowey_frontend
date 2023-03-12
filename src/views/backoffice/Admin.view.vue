<template>
    <div class="admin_block">
        <h2 class="admin_title">Gestion de compte</h2>
        <EditEmailForm/>
        <EditPseudoForm/>
        <EditPasswordForm/>
    </div>
</template>

<script>
import EditEmailForm from '@/components/forms/EditEmail.vue';
import EditPseudoForm from '@/components/forms/EditPseudo.vue';
import EditPasswordForm from '@/components/forms/EditPassword.vue';

export default {
    name: 'AdminView',
    components: {
        EditEmailForm,
        EditPseudoForm,
        EditPasswordForm,
    },
};
</script>
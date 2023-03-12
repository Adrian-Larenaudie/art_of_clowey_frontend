<template>
    <div class="login_block">
        <h2 class="login_title">Connexion au back office</h2>
        <LoginAdminForm/>
    </div>
</template>

<script>
import LoginAdminForm from '@/components/forms/LoginAdmin.vue';

export default {
    name: 'LoginView',
    components: {
        LoginAdminForm,
    }
};
</script>
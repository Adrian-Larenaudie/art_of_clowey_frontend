<template>
    <div class="logout_block">
        <button @click="logout" class="logout_button">Déconnexion</button>
    </div>
</template>

<script>
// import des services de connexion
import { accountService } from '@/_services';

export default {
    name: 'LogoutButton',
    methods: {
        logout() {
            accountService.logout();
            this.$router.push('/');
        }
    }
}
</script>

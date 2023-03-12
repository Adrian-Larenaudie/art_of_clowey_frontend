<template>
    <form @submit.prevent="login" class="login_form">
        <div class="login_field">
            <label for="login_email">Identifiant Email*</label>
            <input v-model="email" class="standart_form_input" id="login_email" type="email">
        </div>
        <div class="login_field">
            <label for="login_password">Mot de passe*</label>
            <input v-model="password" class="standart_form_input" id="login_password" type="password">
            <a class="login_forgotten_mdp" href="#">Mot de passe oublié</a>
        </div>
        <div class="login_field">
            <button type="submit" class="login_submit">Connexion</button>
        </div>
    </form>        
</template>

<script>
// import des services de connexion
import { accountService } from '@/_services';
import routingMessageInfoService from '@/_services/messageInfo.service.js';
import { mapGetters, mapMutations } from "vuex";

export default {
    name : 'LoginAdminForm',
    // à l'aide de l'attribut v-model on connecte nos champs du formmulaire aux data de la vue
    data() {
        return {
            email: '',
            password: '',
        };
    },
    // méthodes de la vue
    methods: {
        ...mapMutations('utils', ['setMessageInfo'],),
        login() {
            // on fait appel au service méthode login en envoyant un payload
            accountService.login({ email: this.email, password: this.password })
                .then((response) => {
                    // mise à jour du composant message info
                    this.setMessageInfo(routingMessageInfoService('login_form', response.status));
                    // affichage du composant message info
                    document.querySelector('#message_info_block').style.opacity = 1;
                    // une fois la réponse récupérée sauvegarde du token
                    accountService.saveUser(response.data.accessToken);
                    // rédirection vers la page admin du backoffice
                    this.$router.push('/backoffice/admin');
                }).catch((error) => {
                    // mise à jour du composant message info
                    this.setMessageInfo(routingMessageInfoService('login_form', error.response.status));
                    // affichage du composant message info
                    document.querySelector('#message_info_block').style.opacity = 1;
                });
        },
    },
};
</script>
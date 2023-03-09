<template>
    <div class="login_block">
        <h2 class="login_title">Connexion au back office</h2>
        <form action="" class="login_form">
            <div class="login_field">
                <label for="login_email">Identifiant Email*</label>
                <input class="standart_form_input" id="login_email" type="text">
            </div>
            <div class="login_field">
                <label for="login_password">Mot de passe*</label>
                <input class="standart_form_input" id="login_password" type="password">
                <a class="login_forgotten_mdp" href="#">Mot de passe oublié</a>
            </div>
            <div class="login_field">
                <button class="login_submit">Connexion</button>
            </div>
        </form>    
    </div>
</template>

<script>
export default {
    name: 'LoginView',
};
</script>
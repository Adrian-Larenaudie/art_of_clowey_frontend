<template>
    <!-- Modale du menu mobile -->
    <div class="menu_mobile" id="menu_mobile">
        <div class="menu_mobile_block_image">
            <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
        </div>
        <h1 class="menu_mobile_title">Menu</h1>
        <nav class="navigation_mobile">
            <router-link class="navigation_mobile_link mobile_link" to="/">Accueil</router-link>   
            <router-link class="navigation_mobile_link mobile_link" to="/backoffice/admin">Admin</router-link>   
            <router-link class="navigation_mobile_link mobile_link" to="/backoffice/oeuvres">Dessins</router-link>   
            <router-link class="navigation_mobile_link mobile_link" to="/backoffice/categories">Catégories</router-link>   
            <router-link class="navigation_mobile_link mobile_link" to="/backoffice/faq">FAQ</router-link>  
        </nav>
    </div>
    <!-- Modale du menu mobile -->
</template>

<script>
export default {
    name: 'ModalAdminMobileMenu',
};
</script>
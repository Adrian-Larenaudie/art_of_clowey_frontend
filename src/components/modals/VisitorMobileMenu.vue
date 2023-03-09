<template>
    <!-- Modale du menu mobile -->
    <div class="menu_mobile" id="menu_mobile">
        <div class="menu_mobile_block_image">
            <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
        </div>
        <h1 class="menu_mobile_title">Menu</h1>
        <nav class="navigation_mobile">
            <router-link class="navigation_mobile_link mobile_link" to="/">Accueil</router-link>          
            <p class="navigation_mobile_link navigation_mobile_portfolio">Portfolio</p>
            <div class="horizontal_segment menu_mobile_segment"></div>
            <div class="navigation_mobile__categories">
                <router-link class="navigation_mobile_link mobile_link" to="/categories/digital">Digital</router-link>
                <router-link class="navigation_mobile_link mobile_link" to="/categories/tradi">Traditionnel</router-link>
                <router-link class="navigation_mobile_link mobile_link" to="/categories/aquarelle">Aquarelles</router-link>
            </div>
            <div class="horizontal_segment menu_mobile_segment"></div>
            <router-link class="navigation_mobile_link mobile_link" to="/faq">FAQ</router-link>
        </nav>
    </div>
    <!-- Modale du menu mobile -->
</template>

<script>
export default {
        name: 'ModalVisitorMobileMenu',
    };
</script>
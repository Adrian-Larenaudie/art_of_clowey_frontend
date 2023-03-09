<template>
    <!-- Menu de navigation tablette -->
    <div class="application_block_tablet_menu">
        <nav class="tablet_menu">
            <router-link class="tablet_menu_link" to="/">Accueil</router-link>        
            <p class="tablet_menu_link" id="tablet_menu_portfolio">Portfolio</p>
            <router-link class="tablet_menu_link" to="/faq">FAQ</router-link>
        </nav>
        <div class="tablet_menu__categories" id="tablet_menu_wrapper">
            <router-link class="tablet_menu_link" to="/categories/digital">Digital</router-link>
            <router-link class="tablet_menu_link" to="/categories/tradi">Traditionnel</router-link>
            <router-link class="tablet_menu_link" to="/categories/aquarelle">Aquarelles</router-link>
        </div>
    <div class="horizontal_segment tablet_segment"></div>
    </div>
    <!-- Menu de navigation tablette -->
</template>

<script>
export default {
        name: 'MenuVisitorTablet',
    };
</script>
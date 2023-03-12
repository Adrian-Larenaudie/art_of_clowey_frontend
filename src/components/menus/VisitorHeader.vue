<template>
    <!-- Menu de navigation desktop -->
    <header class="application_block_header">
        <div class="application_block_menu">
            <div class="navigation_block_image">
                <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
            </div>
            <nav class="navigation">
                <router-link class="navigation_link" to="/backoffice/oeuvres">Back office</router-link>
                <router-link class="navigation_link" to="/">Accueil</router-link>   
                <p class="navigation_link" id="navigation_portfolio">Portfolio</p>
                <div class="navigation__categories" id="navigation_wrapper">
                    <router-link class="navigation_link" to="/categories/digital">Digital</router-link>
                    <router-link class="navigation_link" to="/categories/tradi">Traditionnel</router-link>
                    <router-link class="navigation_link" to="/categories/aquarelle">Aquarelles</router-link>
                </div>
                <router-link class="navigation_link" to="/faq">FAQ</router-link>
            </nav>
        </div>
    </header>
    <!-- Menu de navigation desktop -->

    <!-- Menu burger mobile -->
    <header class="application_block_mobile_header">
        <div class="burger_menu_openner">
            <input class="menu_hamburger" type="checkbox" id="burger_menu">
            <label for="burger_menu"><span></span></label>
        </div>
    </header>
    <!-- Menu burger mobile -->
</template>

<script>
export default {
        name: 'MenuVisitorHeader',
    };
</script>
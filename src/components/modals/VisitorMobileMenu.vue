<template>
    <!-- Modale du menu mobile -->
    <div class="menu_mobile" id="menu_mobile">
        <div class="menu_mobile_block_image">
            <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
        </div>
        <h1 class="menu_mobile_title">Menu</h1>
        <nav class="navigation_mobile">
            <a class="navigation_mobile_link mobile_link" href="./accueil.html">Accueil</a>
            <p class="navigation_mobile_link navigation_mobile_portfolio">Portfolio</p>
            <div class="horizontal_segment menu_mobile_segment"></div>
            <div class="navigation_mobile__categories">
                <a class="navigation_mobile_link mobile_link" href="./portfolio.html">Digital</a>
                <a class="navigation_mobile_link mobile_link" href="./portfolio.html">Traditionnel</a>
                <a class="navigation_mobile_link mobile_link" href="./portfolio.html">Aquarelles</a>
            </div>
            <div class="horizontal_segment menu_mobile_segment"></div>
            <a class="navigation_mobile_link mobile_link" href="./faq.html">FAQ</a>
        </nav>
    </div>
    <!-- Modale du menu mobile -->
</template>

<script>
export default {
        name: 'ModalVisitorMobileMenu',
    };
</script>
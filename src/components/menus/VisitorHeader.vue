<template>
    <!-- Menu de navigation desktop -->
    <header class="application_block_header">
        <div class="application_block_menu">
            <div class="navigation_block_image">
                <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
            </div>
            <nav class="navigation">
                <a class="navigation_link" href="./accueil.html">Accueil</a>
                <p class="navigation_link" id="navigation_portfolio">Portfolio</p>
                <div class="navigation__categories" id="navigation_wrapper">
                    <a class="navigation_link" href="./portfolio.html">Digital</a>
                    <a class="navigation_link" href="./portfolio.html">Traditionnel</a>
                    <a class="navigation_link" href="./portfolio.html">Aquarelles</a>
                </div>
                <a class="navigation_link" href="./faq.html">FAQ</a>
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
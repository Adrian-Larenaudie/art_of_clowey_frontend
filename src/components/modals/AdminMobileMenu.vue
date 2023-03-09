<template>
    <!-- Modale du menu mobile -->
    <div class="menu_mobile" id="menu_mobile">
        <div class="menu_mobile_block_image">
            <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
        </div>
        <h1 class="menu_mobile_title">Menu</h1>
        <nav class="navigation_mobile">
            <a class="navigation_mobile_link mobile_link" href="../frontoffice/accueil.html">Accueil</a>
            <a class="navigation_mobile_link mobile_link" href="./admin.html">Admin</a>
            <a class="navigation_mobile_link mobile_link" href="./work.html">Dessins</a>
            <a class="navigation_mobile_link mobile_link" href="./category.html">Catégories</a>
            <a class="navigation_mobile_link mobile_link" href="./faq.html">FAQ</a>
            <a class="navigation_mobile_link mobile_link" href="./login.html">Connexion</a>
        </nav>
    </div>
    <!-- Modale du menu mobile -->
</template>

<script>
export default {
        name: 'ModalAdminMobileMenu',
    };
</script>
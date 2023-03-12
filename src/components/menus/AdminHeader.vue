<template>
    <!-- Menu de navigation desktop -->
    <header class="application_block_header">
        <div class="application_block_menu">
            <div class="navigation_block_image">
                <img src="@/assets/images/bannière.png" alt="dessin faisant office de banière pour illustrer la navigation du site">
            </div>
            <nav class="navigation">
                <router-link class="navigation_link" to="/">Front office</router-link>   
                <router-link class="navigation_link" to="/backoffice/admin">Admin</router-link>   
                <router-link class="navigation_link" to="/backoffice/oeuvres">Dessins</router-link>   
                <router-link class="navigation_link" to="/backoffice/categories">Catégories</router-link>   
                <router-link class="navigation_link" to="/backoffice/presentation">Présentation</router-link>   
                <router-link class="navigation_link" to="/backoffice/faq">FAQ</router-link>   
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
        name: 'MenuAdminHeader',
    };
</script>
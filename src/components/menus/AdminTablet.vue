<template>
    <!-- Menu de navigation tablette -->
    <div class="application_block_tablet_menu">
        <nav class="tablet_menu">
            <router-link class="tablet_menu_link" to="/">Front office</router-link>
            <router-link class="tablet_menu_link" to="/backoffice/admin">Admin</router-link>
            <router-link class="tablet_menu_link" to="/backoffice/oeuvres">Dessins</router-link>
            <router-link class="tablet_menu_link" to="/backoffice/categories">Catégories</router-link>
            <router-link class="tablet_menu_link" to="/backoffice/presentation">Présentation</router-link>   
            <router-link class="tablet_menu_link" to="/backoffice/faq">FAQ</router-link>
        </nav>
        <div class="horizontal_segment tablet_segment"></div>
    </div>
    <!-- Menu de navigation tablette -->
</template>

<script>
export default {
        name: 'MenuAdminTablet',
    };
</script>
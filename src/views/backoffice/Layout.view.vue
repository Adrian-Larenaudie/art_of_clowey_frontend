<template>
    <div class="application_block">
        <LogoutButton/>
        <!-- Menu de navigation desktop & menu burger -->
        <MenuAdminHeader/>
        <main class="application_block_main">
            <div class="application_block_main_content">
                <!-- Titre de la page -->
                <BlockTitle/>
                <!-- Menu de navigation tablette -->
                <MenuAdminTablet/>
                <!-- Contenu principale de la page -->
                <RouterView/>
            </div>
            <!-- Footer -->
            <MainFooter/>
        </main>   
    </div>
    <!-- Modale du menu burger ouvert -->
    <ModalAdminMobileMenu/>
</template>

<script>
import MenuAdminHeader from '@/components/menus/AdminHeader.vue';
import MenuAdminTablet from '@/components/menus/AdminTablet.vue';
import ModalAdminMobileMenu from '@/components/modals/AdminMobileMenu.vue';
import BlockTitle from '@/components/BlockTitle.vue';
import MainFooter from '@/components/MainFooter.vue';
import LogoutButton from '@/components/LogoutButton.vue';

export default {
    name: 'AdminLayoutView',
    components: {
        MenuAdminHeader,
        MenuAdminTablet,
        ModalAdminMobileMenu,
        BlockTitle,
        MainFooter,
        LogoutButton,
    },
    
};
</script>
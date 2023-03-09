<template>
    <div class="application_block">
        <!-- Menu de navigation desktop & menu burger -->
        <MenuVisitorHeader/>
        <main class="application_block_main">
            <div class="application_block_main_content">
                <!-- Titre de la page -->
                <BlockTitle/>
                <!-- Menu de navigation tablette -->
                <MenuVisitorTablet/>
                <!-- Contenu principale de la page -->
                <RouterView/>
            </div>
            <!-- Footer -->
            <MainFooter/>
        </main>   
    </div>
    <!-- Modale du menu burger ouvert -->
    <ModalVisitorMobileMenu/>
</template>

<script>
import MenuVisitorHeader from '@/components/menus/VisitorHeader.vue';
import MenuVisitorTablet from '@/components/menus/VisitorTablet.vue';
import ModalVisitorMobileMenu from '@/components/modals/VisitorMobileMenu.vue';
import BlockTitle from '@/components/BlockTitle.vue';
import MainFooter from '@/components/MainFooter.vue';
import { RouterView } from 'vue-router';

export default {
    name: 'VisitorLayoutView',
    components: {
        MenuVisitorHeader,
        MenuVisitorTablet,
        ModalVisitorMobileMenu,
        BlockTitle,
        MainFooter,
    },
};
</script>
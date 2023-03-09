<template>
<div class="application_block">

    <MenuVisitorHeader/>
    <MenuVisitorTablet/>

    <main class="application_block_main">
        <div class="application_block_main_content">

            <BlockTitle/>
            <!-- Contenu changeant de la page -->
            <!-- Contenu changeant de la page -->
        </div>

        <MainFooter/>

    </main>
   
</div>

    <ModalVisitorMobileMenu/>

</template>

<script>
import MenuVisitorHeader from '@/components/menus/VisitorHeader.vue';
import MenuVisitorTablet from '@/components/menus/VisitorTablet.vue';
import ModalVisitorMobileMenu from '@/components/modals/VisitorMobileMenu.vue';
import BlockTitle from '@/components/BlockTitle.vue';
import MainFooter from '@/components/MainFooter.vue';

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
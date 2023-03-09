<template>
<div class="portfolio_block">
    <h2 class="portfolio_block_title">Nom Catégorie</h2>
    <div class="portfolio_block_mosaic">
        <img data-index="0" class="mosaic_image" src="@/assets/images/mosaic/DTIYS Tuna.jpg" alt="">
        <img data-index="1" class="mosaic_image" src="@/assets/images/mosaic/Friendly Street.jpg" alt="">
        <img data-index="2" class="mosaic_image" src="@/assets/images/mosaic/Ghibli tricot.jpg" alt="">
        <img data-index="3" class="mosaic_image" src="@/assets/images/mosaic/HanaetLiz.png" alt="">
        <img data-index="4" class="mosaic_image" src="@/assets/images/mosaic/Royalty.jpg" alt="">
        <img data-index="5" class="mosaic_image" src="@/assets/images/mosaic/Secret Santa Ghibli.jpg" alt="">
        <img data-index="6" class="mosaic_image" src="@/assets/images/mosaic/Summer.jpg" alt="">
        <img data-index="7" class="mosaic_image" src="@/assets/images/mosaic/Totally spies cosplay.jpg" alt="">
    </div>
</div>

    <ModalImageSlider/>

</template>

<script>
import ModalImageSlider from '@/components/modals/ImageSlider.vue';
export default {
    name: 'PortfolioView',
    components: {
        ModalImageSlider,
    }
};
</script>
<template>
<!-- Modale du slider d'image -->
<div class="slider_image" id="slider_image">
            <main class="slider_image_main">
                <div class="slider_image_close_button">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>
                </div>
                <div class="slider_image_left_arrow">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>
                </div>
                <div class="slider_image_block_img">
                    <img class="slider_image_current_img" src="@/assets/images/original/DTIYS Tuna.jpg" alt="">
                </div>
                
                <div class="slider_image_right_arrow">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                    </svg>
                </div>
            </main>
            <footer class="slider_image_footer">
                <p class="slider_image_name">Titre de l'oeuvre</p>
                <p class="slider_image_description">Ceci est un dessin représentant quelques chose</p>
                <p class="slider_image_date">Réalisé le 01/01/1996</p>
            </footer>
        </div>
        <!-- Modale du slider d'image -->
</template>

<script>
export default {
        name: 'ModalImageSlider',
    };
</script>
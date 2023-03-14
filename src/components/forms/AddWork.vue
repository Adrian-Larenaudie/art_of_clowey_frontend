<template>
    <div class="work_block_new_work">
        <input type="checkbox" id="new_work_form" name="q"  class="questions">
        <label for="new_work_form" class="question">
            Ajouter un dessin
            <svg class="svg_question_arrow" viewBox="0 0 20 20">
                <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
            </svg>    
        </label>
        <div class="answer">
            <form class="new_work_form">
                <div class="login_field">
                    <label for="new_work_name">Nom*</label>
                    <input class="standart_form_input" id="new_work_name" type="text">
                </div>
                <div class="login_field">
                    <label for="new_work_date">Date MM/AAAA*</label>
                    <input class="standart_form_input" id="new_work_date" type="text">
                </div>
                <div class="login_field">
                    <label for="new_work_description">Description courte*</label>
                    <textarea class="standart_form_textarea" id="new_work_description"></textarea>
                </div>
                <div class="login_field">
                    <label for="new_work_category">Associer une catégorie</label>
                    <select class="standart_form_input" id="new_work_category">
                        <option value="">--aucune--</option>
                        <option value="">Digital</option>
                        <option value="">Traditionel</option>
                        <option value="">Aquarelle</option>
                    </select>
                </div>
                <div class="file_loader login_field">
                    <div class="file_form_input" id="file_form_input">
                        Charger un fichier*
                        <input id="new_work_file" type='file'/>
                    </div>
                </div>
                <div class="login_field">
                    <img class="new_work_image" src="" alt="">
                </div>
                <div class="login_field">
                    <button class="login_submit new_work_submit">Ajouter</button>
                </div>
            </form>
        </div> 
    </div>    
</template>

<script>
export default {
    name : 'AddWorkForm',
};
</script>
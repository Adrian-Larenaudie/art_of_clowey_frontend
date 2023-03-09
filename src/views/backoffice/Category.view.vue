<template>
    <div class="category_block">
        <h2 class="category_title">Gestion des catégories</h2>
        <div class="category_block_add">
            <input type="checkbox" id="form_new_category" name="q"  class="questions">
            <label for="form_new_category" class="question">
                Ajouter une catégorie
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="new_category_form">
                    <div class="login_field">
                        <label for="new_category_name">Nom*</label>
                        <input class="standart_form_input" id="new_category_name" type="text">
                    </div>
                    <div class="login_field">
                        <label for="new_category_description">Description courte</label>
                        <textarea class="standart_form_textarea" id="new_category_description"></textarea>
                    </div>
                    <div class="login_field_checkbox">
                        <label for="new_category_ative">Activer la présence sur le portfolio</label>
                        <input class="checkbox_form_input" id="new_category_ative" type="checkbox">
                    </div>
                    <div class="login_field">
                        <button class="login_submit">Ajouter</button>
                    </div>
                </form>
            </div> 
        </div>
        <div class="category_block_update">
            <input type="checkbox" id="form_update_category1" name="q"  class="questions">
            <label for="form_update_category1" class="question">
                Modifier la catégorie Digital
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="update_category_form">
                    <div class="login_field">
                        <label for="update_category_name1">Nom*</label>
                        <input class="standart_form_input" id="update_category_name1" type="text">
                    </div>
                    <div class="login_field">
                        <label for="update_category_description1">Description courte</label>
                        <textarea class="standart_form_textarea" id="update_category_description1"></textarea>
                    </div>
                    <div class="login_field_checkbox">
                        <label for="new_category_ative">Activer la présence sur le portfolio</label>
                        <input class="checkbox_form_input" id="new_category_ative" type="checkbox">
                    </div>
                    <div class="login_field submit_area">
                        <button class="login_submit">Modifier</button>
                        <div class="form_delete_button">Supprimer</div>
                    </div>
                </form>
            </div> 
        </div>
        <div class="category_block_update">
            <input type="checkbox" id="form_update_category2" name="q"  class="questions">
            <label for="form_update_category2" class="question">
                Modifier la catégorie Traditionel
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="update_category_form">
                    <div class="login_field">
                        <label for="update_category_name2">Nom*</label>
                        <input class="standart_form_input" id="update_category_name2" type="text">
                    </div>
                    <div class="login_field">
                        <label for="update_category_description2">Description courte</label>
                        <textarea class="standart_form_textarea" id="update_category_description2"></textarea>
                    </div>
                    <div class="login_field_checkbox">
                        <label for="new_category_ative">Activer la présence sur le portfolio</label>
                        <input class="checkbox_form_input" id="new_category_ative" type="checkbox">
                    </div>
                    <div class="login_field submit_area">
                        <button class="login_submit">Modifier</button>
                        <div class="form_delete_button">Supprimer</div>
                    </div>
                </form>
            </div> 
        </div>
        <div class="category_block_update">
            <input type="checkbox" id="form_update_category3" name="q"  class="questions">
            <label for="form_update_category3" class="question">
                Modifier la catégorie Aquarelle
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="update_category_form">
                    <div class="login_field">
                        <label for="update_category_name3">Nom*</label>
                        <input class="standart_form_input" id="update_category_name3" type="text">
                    </div>
                    <div class="login_field">
                        <label for="update_category_description3">Description courte</label>
                        <textarea class="standart_form_textarea" id="update_category_description3"></textarea>
                    </div>
                    <div class="login_field_checkbox">
                        <label for="new_category_ative">Activer la présence sur le portfolio</label>
                        <input class="checkbox_form_input" id="new_category_ative" type="checkbox">
                    </div>
                    <div class="login_field submit_area">
                        <button class="login_submit">Modifier</button>
                        <div class="form_delete_button">Supprimer</div>
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryView',
};
</script>
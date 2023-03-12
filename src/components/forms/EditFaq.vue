<template>
    <div class="faq_block_update">
        <input type="checkbox" id="form_update_faq1" name="q"  class="questions">
        <label for="form_update_faq1" class="question">
            Modifier la question/réponse: <span class="form_update_current_question">Voici un exemple de question ?</span>
            <svg class="svg_question_arrow" viewBox="0 0 20 20">
                <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
            </svg>    
        </label>
        <div class="answer">
            <form class="update_faq_form">
                <div class="login_field">
                    <label for="update_faq_question1">Question*</label>
                    <textarea class="standart_form_textarea" id="update_faq_question1"></textarea>
                </div>
                <div class="login_field">
                    <label for="update_faq_answer1">Réponse*</label>
                    <textarea class="standart_form_textarea" id="update_faq_answer1"></textarea>
                </div>
                <div class="login_field submit_area">
                    <button class="login_submit">Modifier</button>
                    <div class="form_delete_button">Supprimer</div>
                </div>
            </form>
        </div> 
    </div>    
</template>

<script>
export default {
    name : 'EditFaqForm',
};
</script>
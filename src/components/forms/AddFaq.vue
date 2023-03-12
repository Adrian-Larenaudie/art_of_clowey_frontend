<template>
    <div class="faq_block_add">
        <input type="checkbox" id="form_new_faq" name="q"  class="questions">
        <label for="form_new_faq" class="question">
            Ajouter une question/réponse
            <svg class="svg_question_arrow" viewBox="0 0 20 20">
                <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
            </svg>    
        </label>
        <div class="answer">
            <form class="new_faq_form">
                <div class="login_field">
                    <label for="new_faq_question">Question*</label>
                    <textarea class="standart_form_textarea" id="new_faq_question"></textarea>
                </div>
                <div class="login_field">
                    <label for="new_faq_answer">Réponse*</label>
                    <textarea class="standart_form_textarea" id="new_faq_answer"></textarea>
                </div>
                <div class="login_field">
                    <button class="login_submit">Ajouter</button>
                </div>
            </form>
        </div> 
    </div>    
</template>

<script>
export default {
    name : 'AddFaqForm',
};
</script>
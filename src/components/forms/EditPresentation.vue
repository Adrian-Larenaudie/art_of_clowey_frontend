<template>
    <form action="" class="login_form update_presentation_form">

        <div class="login_field">
            <label for="login_email">Titre de la présentation*</label>
            <input class="standart_form_input" id="login_email" type="text">
        </div>

        <div class="presentation_block_manage_paragraphe">
            <input type="checkbox" id="form_paragraph" name="q"  class="questions">
            <label for="form_paragraph" class="presentation_block_question">
                Gérer les paragraphes
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z">
                    </path>
                </svg>    
            </label>
            <div class="answer">
                <div class="login_field">
                    <div class="presentation_answer_label">
                        <label  for="update_paragraph1">paragraphe n°1</label>
                        <div class="delete_paragraphe_block">
                            <svg  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"/>
                                <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"/>
                                <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <textarea class="standart_form_textarea" id="update_paragraph1"></textarea>
                    
                </div>
                <div class="login_field">
                    <div class="presentation_answer_label">
                        <label  for="update_paragraph1">paragraphe n°1</label>
                        <div class="delete_paragraphe_block">
                            <svg  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"/>
                                <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"/>
                                <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <textarea class="standart_form_textarea" id="update_paragraph1"></textarea>
                    
                </div>
                <div class="login_field">
                    <button class="login_submit presentation_button">Ajouter un paragraphe</button>
                </div>
            </div> 
        </div>
        <div class="update_presentation_segment horizontal_segment"></div> 
        <div class="login_field">
            <input id="new_work_file" type='file'/>
            <div class="file_form_input" id="file_form_input" >Charger un fichier*</div>
        </div>
        <div class="login_field backoffice_presentation_block_image">
            <div>
                <div>Ancienne image</div>
                <img class="new_work_image" src="" alt="">
            </div>
            <div>
                <div>Nouvelle image</div>
                <img class="new_work_image" src="" alt="">
            </div>                        
        </div>

        <div class="presentation_submit_block">
            <button class="login_submit presentation_button">Envoyer les modifications</button>
        </div>
    </form>      
</template>

<script>
export default {
    name : 'EditPresentationForm',
};
</script>
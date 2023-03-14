<template>
    <form @submit.prevent="onSubmit" class="login_form update_presentation_form">

        <div class="login_field">
            <label for="login_email">Titre de la présentation*</label>
            <input @change="onChangeField" name="title" :value="getPresentation.title" class="standart_form_input" id="login_email" type="text">
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
                <div v-for="paragraph, index in getPresentation.paragraphs" :key="paragraph.id" class="login_field">
                    <div class="presentation_answer_label">
                        <label  :for="paragraph.id">paragraphe n°{{ index + 1 }}</label>
                        <div @click="onClickDelete" class="delete_paragraphe_block" :id="paragraph.id">
                            <svg  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"/>
                                <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"/>
                                <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                                <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <textarea @change="onChangeField" name="content" :value="paragraph.content" class="standart_form_textarea" :id="paragraph.id"></textarea>
                    
                </div>
                <div class="login_field">
                    <div @click="onClickNewParagraph" class="login_submit presentation_button">Ajouter un paragraphe</div>
                </div>
            </div> 
        </div>
        <div class="update_presentation_segment horizontal_segment"></div> 
        <div class="file_loader login_field">
            <div class="file_form_input" id="file_form_input">
                Charger un fichier*
                <input @change="onChangeField" name="file" id="new_work_file" type='file'/>
            </div>
        </div>
        <div class="login_field backoffice_presentation_block_image">
            <div class="new_work_image_block">
                <div class="new_work_image_title">Image courante</div>
                <img class="new_work_image" :src="getPresentation.imageUrl + '?timestamp=' + new Date().getTime()" alt="">
            </div>
            <div class="new_work_image_block">
                <div class="new_work_image_title">Image chargée</div>
                <img class="new_work_image" :src="getNewImageUrl" alt="">
            </div>                        
        </div>

        <div class="presentation_submit_block">
            <button class="login_submit presentation_button">Envoyer les modifications</button>
        </div>
    </form>      
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name : 'EditPresentationForm',
    computed: {
        ...mapGetters('presentation', ['getPresentation', 'getNewImageUrl']),
    },
    methods: {
        ...mapMutations('presentation', ['setTitleValue', 'setParagraphFieldValue', 'setNewImageValue']),
        ...mapActions('presentation', ['actionUpdatePresentation',  'actionDeleteParagraph', 'actionAddNewParagraph']),
        // sur le changement d'un des champs on modifie le state
        onChangeField(event) {
            // dans le cas du titre
            if(event.target.name == 'title') {
                this.setTitleValue({ field: event.target.name, value: event.target.value });
            // dans le cas d'un paragraphe
            } else if (event.target.name == 'content') {
                this.setParagraphFieldValue({ field: event.target.name, value: event.target.value, paragraphId: event.target.id });
            // dans le cas de l'image associée à la présenation
            } else if(event.target.name === 'file') {
            // **** ici on veut afficher l'image redimensionnée dans une balise img & sauvegarder le file dans le state **** //
                // instanciation d'un lecteur de fichier
                let reader = new FileReader();
                // création d'un canvas pour dessiner l'image redimensionnée
                const canvas = document.createElement('canvas');
                // récupération du fichier dans l'input
                const file = event.target.files[0];
                // Ajoutez un événement pour détecter la fin de la lecture du fichier
                reader.addEventListener('load', () => {
                    // création d'une nouvelle image
                    const img = new Image();
                    // sur le chargement de cette image
                    img.addEventListener('load', () => {
                        // récupération des dimensions de l'image
                        const width = img.width;
                        const height = img.height;

                        // récupération de valeurs de redimensionnement
                        let newWidth = width;
                        let newHeight = height;
                        if (width > 500) {
                            newWidth = 500;
                            newHeight = Math.round(height * (newWidth / width));
                        }
                        // on donne les nouvelles valeurs à l'image
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, newWidth, newHeight);

                        // récupération de l'URL de l'image redimensionnée
                        const dataUrl = canvas.toDataURL('image/jpeg');

                        // envoie de l'url dans le state newImageUrl qui va nous servir à l'afficher dans la balise img dédiée
                        this.setNewImageValue({ field: 'newImageUrl', value: dataUrl });
                    });  

                    // définition de la source de l'image sur l'URL du fichier sélectionné
                    img.src = reader.result;
                    // envoie dans le state du file
                    this.setNewImageValue({ field: 'newImage', value: file });
                });
                // commence à lire le fichier sélectionné
                reader.readAsDataURL(event.target.files[0]);      
            };           
        },
        // sur la soumimssion du formulaire on lance l'action de modification de la présentation
        onSubmit(event) {
            this.actionUpdatePresentation()
        },
        // sur le click ajoute un nouveau paragraphe à l'aide d'une action
        onClickNewParagraph(event) {
            this.actionAddNewParagraph();
        },
        // sur le click du boutton supprimer on lance l'action de suppression du paragraphe 
        onClickDelete(event) {
            this.actionDeleteParagraph({ paragraphId: event.currentTarget.id })
        },
    },
};
</script>
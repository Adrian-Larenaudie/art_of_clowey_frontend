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
            <form @submit.prevent="onSubmit" class="new_work_form">
                <div class="login_field">
                    <label for="new_work_name">Nom*</label>
                    <input @change="onChangeField" name="name" :value="getNewWork.name" class="standart_form_input" id="new_work_name" type="text">
                </div>
                <div class="login_field">
                    <label for="new_work_date">Date MM/AAAA*</label>
                    <input @change="onChangeField" name="date" :value="getNewWork.date" class="standart_form_input" id="new_work_date" type="text">
                </div>
                <div class="login_field">
                    <label for="new_work_description">Description courte*</label>
                    <textarea @change="onChangeField" name="description" :value="getNewWork.description" class="standart_form_textarea" id="new_work_description"></textarea>
                </div>
                <div class="login_field">
                    <label for="new_work_category">Associer une catégorie</label>
                    <select @change="onChangeField" name="description" :value="getNewWork.category_id" class="standart_form_input" id="new_work_category">
                        <option value="">--aucune--</option>
                        <option v-for="category in getAllCategories.data" :value="category.id" :key="category.id">{{ category.name }}</option>   
                    </select>
                </div>
                <div class="file_loader login_field">
                    <div class="file_form_input" id="file_form_input">
                        Charger un fichier*
                        <input @change="onChangeField" name="file" id="new_work_file" type='file'/>
                    </div>
                </div>
                <div class="new_work_image_block_image login_field">
                    <img class="new_work_image" :src="getNewWorkImageUrl" alt="">
                </div>
                <div class="login_field">
                    <button class="login_submit new_work_submit">Ajouter</button>
                </div>
            </form>
        </div> 
    </div>    
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name : 'AddWorkForm',
    computed: {
        ...mapGetters('work', ['getNewWorkImageUrl', 'getNewWork']),
        ...mapGetters('category', ['getAllCategories']),
    },
    methods: {
        ...mapMutations('work', ['setNewWorkFieldValue', 'setNewWorkImageUrl']),
        ...mapActions('work', ['actionAddNewWork']),
        // sur le changement d'un des champs on modifie le state
        onChangeField(event) {
            // dans le cas du titre
            if(event.target.name !== 'file') {
                this.setNewWorkFieldValue({ field: event.target.name, value: event.target.value });
            // dans le cas du fichier image
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
                        this.setNewWorkImageUrl({ value: dataUrl });
                    });  

                    // définition de la source de l'image sur l'URL du fichier sélectionné
                    img.src = reader.result;
                    // envoie dans le state du file
                    this.setNewWorkFieldValue({ field: 'file', value: file });
                });
                // commence à lire le fichier sélectionné
                reader.readAsDataURL(event.target.files[0]);      
            };           
        },
        // sur la soumimssion du formulaire on lance l'action de modification de la présentation
        onSubmit(event) {
            this.actionAddNewWork()
        },
    },
};
</script>
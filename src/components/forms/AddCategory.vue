<template>
    <div class="category_block_add">
        <input type="checkbox" id="form_new_category" name="q"  class="questions">
        <label for="form_new_category" class="question">
            Ajouter une catégorie
            <svg class="svg_question_arrow" viewBox="0 0 20 20">
                <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
            </svg>    
        </label>
        <div class="answer">
            <form @submit.prevent="onSubmit" class="new_category_form">
                <div class="login_field">
                    <label for="add_new_category_name">Nom*</label>
                    <input @change="onChangeField" name="name" :value="getNewCategory.name" class="standart_form_input" type="text" id="add_new_category_name">
                </div>
                <div class="login_field">
                    <label for="add_new_category_description">Description courte</label>
                    <textarea @change="onChangeField" name="description" :value="getNewCategory.description" class="standart_form_textarea" id="add_new_category_description"></textarea>
                </div>
                <div class="login_field_checkbox">
                    <label for="add_new_category_checkbox">Activer la présence sur le portfolio</label>
                    <input @change="onChangeField" class="checkbox_form_input" name="active" :checked="getNewCategory.active" id="add_new_category_checkbox" type="checkbox">
                </div>
                <div class="login_field">
                    <button class="login_submit">Ajouter</button>
                </div>
            </form>
        </div> 
    </div>    
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name : 'AddCategoryForm',
    computed: {
        ...mapGetters('category', ['getNewCategory'])
    },
    methods: {
        ...mapMutations('category', ['setNewCategoryFieldValue']),
        ...mapActions('category', ['actionAddNewCategory']),
        // sur le changement d'un des champs on modifie le state
        onChangeField(event) {
            this.setNewCategoryFieldValue({ field: event.target.name, value: event.target.value });        
        },
        // sur la soumission du formulaire on lance l'action de création de nouvelle catégorie
        onSubmit(event) {
            this.actionAddNewCategory();
        },
    },
};
</script>

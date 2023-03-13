<template>
    <div class="category_block_update">
        <input type="checkbox" :id="getCategoryById(categoryId).name" name="q"  class="questions">
        <label :for="getCategoryById(categoryId).name" class="question">
            Modifier la catégorie {{ getCategoryById(categoryId).name }}
            <svg class="svg_question_arrow" viewBox="0 0 20 20">
                <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
            </svg>    
        </label>
        <div class="answer">
            <form @submit.prevent="onSubmit" class="update_category_form">
                <div class="login_field">
                    <label :for="categoryId + 'name'">Nom*</label>
                    <input @change="onChangeField" name="name" :value="getCategoryById(categoryId).name" class="standart_form_input" type="text" :id="categoryId + 'name'">
                </div>
                <div class="login_field">
                    <label :for="categoryId + 'description'">Description courte</label>
                    <textarea @change="onChangeField" name="description" :value="getCategoryById(categoryId).description" class="standart_form_textarea" :id="categoryId + 'description'"></textarea>
                </div>
                <div class="login_field_checkbox">
                    <label :for="categoryId + 'active'">Activer la présence sur le portfolio</label>
                    <input @change="onChangeField" name="active" :checked="getCategoryById(categoryId).active" class="checkbox_form_input" type="checkbox" :id="categoryId + 'active'">
                </div>
                <div class="login_field submit_area">
                    <button class="login_submit">Modifier</button>
                    <div @click="onClick" class="form_delete_button">Supprimer</div>
                </div>
            </form>
        </div> 
    </div>  
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name : 'EditCategoryForm',
    props: ['categoryId'],
    computed: {
        ...mapGetters('category', ['getCategoryById'])
    },
    methods: {
        ...mapMutations('category', ['setUpdateCategoryFieldValue']),
        ...mapActions('category', ['actionUpdateCategory',  'actionDeleteCategory']),
        // sur le changement d'un des champs on modifie le state
        onChangeField(event) {
            this.setUpdateCategoryFieldValue({ field: event.target.name, value: event.target.value, categoryId: this.categoryId });        
        },
        // sur la soumimssion du formulaire on lance la action de modification de la catégorie
        onSubmit(event) {
            this.actionUpdateCategory({ categoryId: this.categoryId })
        },
        // sur le click du boutton supprimer on lance l'action de suppression de category 
        onClick(event) {
            this.actionDeleteCategory({ categoryId: this.categoryId })
        },
    },
    
};
</script>
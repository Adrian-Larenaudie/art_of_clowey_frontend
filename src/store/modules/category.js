import Axios from '@/_services/caller.service.js';
import { accountService } from '@/_services';
import routingMessageInfoService from '@/_services/messageInfo.service.js';

// todo ajouter des validations de données sur la soumission du formulaire
import dataValidatorService from '@/_services/dataValidator.service.js';

export default {
    namespaced: true,
    state:() => ({
        // l'ensemble descatégories sont stockées ici
        categories: [],
        // newCategory correspond aux valeurs du formulaire d'ajout d'une nouvelle catégorie
        newCategory: {
            name: '',
            description: '',
            active: false,
        },
    }), 
    
    getters: {
        // récupère le state catégories
        getAllCategories: (state) => {
            return state.categories;
        },
        // récupère une catégorie depuis le state categories à l'aide de son ID
        getCategoryById: (state) => (categoryId) => {
            const categories = state.categories.data;
            return categories.find(category => category.id === categoryId);
        },
        // récupère le state newCategory
        getNewCategory: (state) => {
            return state.newCategory;
        },
    },

    actions: {
        // action de récupération de toutes les catégories
        async actionGetAllCategories(context,  { force }) {
            try {
                if(context.state.categories.length === 0 || force !== false) {
                    const response = await Axios.get('/category');
                    const categories = response.data;
                    context.commit('setAllCategories', categories);
                }             
            } catch (error) {
                console.log(error);
            } finally {
                
            };  
        },
        // action de mise à jour d'une catégorie à l'aide de son ID
        async actionUpdateCategory(context, { categoryId }) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // préparation du body  
                const categoryToUpdate = context.getters.getCategoryById(categoryId);
                const body = {
                    name: categoryToUpdate.name,
                    description: categoryToUpdate.description,
                    active: categoryToUpdate.active,
                }
                // envoie de la requête
                const response = await Axios.patch(`/category/${categoryId}`, body, accountService.getHeaderConfig(true));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', response.status), {root: true});
            } catch (error) {
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', error.response.status), {root: true});    
            } finally {
                // pour une meilleure expérience utilisateur un léger timing avant de faire disparaitre le loader 
                setTimeout(() => {
                    // désacitvation du loader
                    context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});  
                    // affichage du composant message info
                    if(message_info_block) 
                        document.querySelector('#message_info_block').style.opacity = 1; 
                }, 500);
            }; 
        },
        // action d'ajout d'une nouvelle catégorie
        async actionAddNewCategory(context) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // préparation du body  
                const newCategory = context.getters.getNewCategory;
                const body = {
                    name: newCategory.name,
                    description: newCategory.description,
                    active: newCategory.active,
                }
                // envoie de la requête
                const response = await Axios.put(`/category`, body, accountService.getHeaderConfig(true));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('add_category_form', response.status), {root: true});
                // récupération des catégories
                context.dispatch('actionGetAllCategories', { force: true });
                // on réinitialise le formulaire
                context.commit('setInitialNewCategoryState');
            } catch (error) {
                context.commit('utils/setMessageInfo', routingMessageInfoService('add_category_form', error.response.status), {root: true});    
            } finally {
                // pour une meilleure expérience utilisateur un léger timing avant de faire disparaitre le loader 
                setTimeout(() => {
                    // désacitvation du loader
                    context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});  
                    // affichage du composant message info
                    if(message_info_block) 
                        document.querySelector('#message_info_block').style.opacity = 1; 
                }, 500);
            }; 
        },
        // action de suppression d'une catégorie à l'aide de son ID
        async actionDeleteCategory(context, { categoryId }) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // envoie de la requête
                const response = await Axios.delete(`/category/${categoryId}`, accountService.getHeaderConfig(true));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', response.status), {root: true});
                // récupération des catégories
                context.dispatch('actionGetAllCategories', { force: true });
            } catch (error) {
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', error.response.status), {root: true});  
            } finally {
                // pour une meilleure expérience utilisateur un léger timing avant de faire disparaitre le loader 
                setTimeout(() => {
                    // désacitvation du loader
                    context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});  
                    // affichage du composant message info
                    if(message_info_block) 
                        document.querySelector('#message_info_block').style.opacity = 1; 
                }, 500);
            };
        },
    },
    
    mutations: {
        // mutation d'ajout de toutes les catégories dans le state
        setAllCategories(state, categories) {
            state.categories = categories;
        },
        // mutation de modification d'un champ précis d'une des catégorie dans le state categories
        setUpdateCategoryFieldValue(state, { field, value, categoryId }) {
            const categories = state.categories.data;
            const currentCategory = categories.find(category => category.id === categoryId);
            if(field === 'active') {
                currentCategory.active = !currentCategory.active;
            } else {
                currentCategory[field] = value;
            }
            state.categories[categoryId] = currentCategory;
        },
        // mutation de modification d'un champs précis du state newCategorie
        setNewCategoryFieldValue(state, { field, value }) {
            const newCategory = state.newCategory;
            if(field === 'active') {
                newCategory.active = !newCategory.active;
            } else {
                newCategory[field] = value;
            }
            state.newCategory = newCategory;
        },
        // mutation qui permet de remettre le state initial de newCategorie
        setInitialNewCategoryState(state) {
            return state.newCategory = {
                name: '',
                description: '',
                active: false,
            }
        },
    },
};
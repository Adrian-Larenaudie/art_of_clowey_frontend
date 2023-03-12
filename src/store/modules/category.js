import Axios from '@/_services/caller.service.js';
import { accountService } from '@/_services';
import routingMessageInfoService from '@/_services/messageInfo.service.js';

export default {
    namespaced: true,
    state:() => ({
        categories: [],
        newCategory: {
            name: '',
            description: '',
            active: false,
        },
    }), 
    
    getters: {
        getAllCategories: (state) => {
            return state.categories;
        },
        getCategoryById: (state) => (categoryId) => {
            const categories = state.categories.data;
            return categories.find(category => category.id === categoryId);
        },
    },

    actions: {
        async actionGetAllCategories(context,  { force }) {
            try {
                if(context.state.categories.length === 0 || force !== false) {
                    const response = await Axios.get('/category');
                    const categories = response.data;
                    context.commit('setAllCategories', categories);
                }   
            } catch (error) {
                console.log(error);
            };    
        },
        async actionUpdateCategory(context, { categoryId }) {
            try {
                const categoryToUpdate = context.getters.getCategoryById(categoryId);
                const body = {
                    name: categoryToUpdate.name,
                    description: categoryToUpdate.description,
                    active: categoryToUpdate.active,
                }
                const response = await Axios.patch(`/category/${categoryId}`, body, accountService.getHeaderConfig(true));
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', response.status), {root: true});
            } catch (error) {
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', error.response.status), {root: true});    
            }; 
            // affichage du composant message info
            document.querySelector('#message_info_block').style.opacity = 1;
        },
        // todo
        async actionAddNewCategory(context) {
            try {
                
            } catch (error) {
                
            }
        },
        // todo
        async actionDeleteCategory(context, { categoryId }) {
            try {
                const response = await Axios.delete(`/category/${categoryId}`, accountService.getHeaderConfig(true));
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', response.status), {root: true});
                context.dispatch('actionGetAllCategories', { force: true });
            } catch (error) {
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_category_form', error.response.status), {root: true});  
            }
        },
    },
    
    mutations: {
        setAllCategories(state, categories) {
            state.categories = categories;
        },
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
        setNewCategoryFieldValue(state, { field, value }) {

        },
    },
};
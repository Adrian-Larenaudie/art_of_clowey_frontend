import Axios from '@/_services/caller.service.js';
import { accountService } from '@/_services';
import routingMessageInfoService from '@/_services/messageInfo.service.js';

export default {
    namespaced: true,
    state:() => ({
        // contient toutes les questions/réponses
        faqs: [], 
        // contient les valeurs du formulaire pour créer une nouvelle faq 
        newFaq: {
            question: '',
            answer: '',
        }, 
    }), 
    
    getters: {
        // récupère le state faqs
        getAllFaqs: (state) => {
            return state.faqs;
        },
        // récupère une faq depuis le state faqs à l'aide de son ID
        getFaqById: (state) => (faqId) => {
            const faqs = state.faqs.data;
            return faqs.find(faq => faq.id === faqId);
        },
        // récupère le state newFaq
        getNewFaq: (state) => {
            return state.newFaq;
        },
    },

    actions: {
        // action de récupération de toutes les faqs
        async actionGetAllFaqs(context,  { force }) {
            try {
                if(context.state.faqs.length === 0 || force !== false) {
                    const response = await Axios.get('/faq');
                    const faqs = response.data;
                    context.commit('setAllFaqs', faqs);
                }             
            } catch (error) {
                console.log(error);
            } finally {
                
            };  
        },
        // action de mise à jour d'une faq à l'aide de son ID
        async actionUpdateFaq(context, { faqId }) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // préparation du body  
                const faqToUpdate = context.getters.getFaqById(faqId);
                const body = {
                    question: faqToUpdate.question,
                    answer: faqToUpdate.answer,
                }
                // envoie de la requête
                const response = await Axios.patch(`/faq/${faqId}`, body, accountService.getHeaderConfig(true));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_faq_form', response.status), {root: true});
            } catch (error) {
                console.log(error);
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_faq_form', error.response.status), {root: true});    
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
        // action d'ajout d'une nouvelle faq
        async actionAddNewFaq(context) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // préparation du body  
                const newFaq = context.getters.getNewFaq;
                const body = {
                    question: newFaq.question,
                    answer: newFaq.answer,
                }
                // envoie de la requête
                const response = await Axios.put(`/faq`, body, accountService.getHeaderConfig(true));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('add_faq_form', response.status), {root: true});
                // récupération des faqs
                context.dispatch('actionGetAllFaqs', { force: true });
                // on réinitialise le formulaire
                context.commit('setInitialNewFaqState');
            } catch (error) {
                console.log(error);
                context.commit('utils/setMessageInfo', routingMessageInfoService('add_faq_form', error.response.status), {root: true});    
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
        // action de suppression d'une faq à l'aide de son ID
        async actionDeleteFaq(context, { faqId }) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // envoie de la requête
                const response = await Axios.delete(`/faq/${faqId}`, accountService.getHeaderConfig(true));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_faq_form', response.status), {root: true});
                // récupération des faqs
                context.dispatch('actionGetAllFaqs', { force: true });
            } catch (error) {
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_faq_form', error.response.status), {root: true});  
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
        // mutation d'ajout de toutes les faqs dans le state
        setAllFaqs(state, faqs) {
            state.faqs = faqs;
        },
        // mutation de modification d'un champ précis d'une des faq dans le state faqs
        setUpdateFaqFieldValue(state, { field, value, faqId }) {
            const faqs = state.faqs.data;
            const currentFaq = faqs.find(faq => faq.id === faqId);
            currentFaq[field] = value;
            state.faqs[faqId] = currentFaq;
        },
        // mutation de modification d'un champs précis du state newFaq
        setNewFaqFieldValue(state, { field, value }) {
            const newFaq = state.newFaq;
            newFaq[field] = value;
            state.newFaq = newFaq;
        },
        // mutation qui permet de remettre le state initial de newFaq
        setInitialNewFaqState(state) {
            return state.newFaq = {
                question: '',
                answer: '',
            }
        },
    },
};
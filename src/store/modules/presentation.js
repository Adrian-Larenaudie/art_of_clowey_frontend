import Axios from '@/_services/caller.service.js';
import { accountService } from '@/_services';
import routingMessageInfoService from '@/_services/messageInfo.service.js';

export default {
    namespaced: true,
    state:() => ({
        // correspond aux donnée de la présentation
        presentation: {
            title: '',
            imageUrl: '',
            paragraphs: [],
        },
        // reçoit la nouvelle image à modifier en BDD
        newImage: '', 
        newImageUrl: '',
    }), 
    
    getters: {
        // récupère la présentation depuis le state
        getPresentation: (state) => {
            return state.presentation;
        },
        // récupère la valeur de newImage depuis le state
        getNewImage: (state) => {
            return state.newImage;
        },
        // récupère la valeur de newImageUrl depuis le state
        getNewImageUrl: (state) => {
            return state.newImageUrl;
        },
        getAllParagraphs: (state) => {
            let body= [];
            for (let index = 0; index < state.presentation.paragraphs.length; index++) {
                body.push({ id: state.presentation.paragraphs[index].id, content: state.presentation.paragraphs[index].content })     
            }
            return body
        },
    },

    actions: {
        // récupère la présentation depuis l'API
        async actionGetPresentation(context, { force }) {
            try {
                if(context.state.presentation.title !== '' || force !== false) {
                    const response = await Axios.get('/presentation');
                    const presentation = response.data.data;
                    context.commit('setPresentation', presentation);
                }          
            } catch (error) {
                console.log(error);
            } finally {

            }
        },
        // envoie la modification de la présentation avec tout les paragraphes à modifier
        async actionUpdatePresentation(context) {
            try {
                // activation du loader
                context.commit('utils/toggleMainBackofficeLoader', {}, {root: true});
                // préparation du body au format multipart/form-data 
                const formData = new FormData();
                formData.append('title', context.getters.getPresentation.title);
                formData.append('paragraphs', JSON.stringify(context.getters.getAllParagraphs));
                if(context.getters.getNewImage !== '')
                    formData.append('file', context.getters.getNewImage, context.getters.getNewImage.name);
                // envoie de la requête false pour dire qu'il ne s'agit pas de json
                const response = await Axios.patch(`/presentation`, formData, accountService.getHeaderConfig(false));
                // appel du service et de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_presentation_form', response.status), {root: true});
            } catch (error) {
                console.log(error);
                context.commit('utils/setMessageInfo', routingMessageInfoService('update_presentation_form', error.response.status), {root: true});    
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
        // ajoute un nouveau paragraphe vide en BDD 
        async actionAddNewParagraph(context) {
            try {
                const response = await Axios.put('/presentation/paragraph', {}, accountService.getHeaderConfig(true));
                const newParagraph = response.data.data;
                context.commit('setNewParagraph', newParagraph);
                // appel de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', {class: 'success_message', content: 'Paragraphe ajouté avec succès !'}, {root: true});
            } catch (error) {
                // sur l'erreur on scroll top pour montrer le message d'erreur à l'admin
                window.scroll(0, 0)
                context.commit('utils/setMessageInfo', {class: 'error_message', content: 'Erreur serveur'}, {root: true});
            } finally { 
                // affichage du composant message info
                if(message_info_block) 
                    document.querySelector('#message_info_block').style.opacity = 1; 
            }
        },
        // supprime un paragraph en BDD à l'aide de son ID
        async actionDeleteParagraph(context, { paragraphId }) {
            try {
                await Axios.delete(`/presentation/paragraph/${paragraphId}`, accountService.getHeaderConfig(true));
                // appel de la mutation pour retrait du prargaphe dans le state
                context.commit('unSetParagraph', paragraphId)
                // appel de la mutation pour afficher un message d'information à l'admin
                context.commit('utils/setMessageInfo', {class: 'success_message', content: 'Paragraphe supprimé avec succès !'}, {root: true});
            } catch (error) {
                // sur l'erreur on scroll top pour montrer le message d'erreur à l'admin
                window.scroll(0, 0)
                context.commit('utils/setMessageInfo', {class: 'error_message', content: 'Erreur serveur'}, {root: true});
            } finally {
                // affichage du composant message info
                if(message_info_block) 
                    document.querySelector('#message_info_block').style.opacity = 1; 
            }
        },

    },
    
    mutations: {
        // ajoute la présentation dans le state après l'action de récupération depuis l'API
        setPresentation(state, presentation) {
            state.presentation = presentation;
        },
        // à l'aide d'un id modifie la valeur du paragraphe dans le state
        setParagraphFieldValue(state, { value, paragraphId }) {
            state.presentation.paragraphs.find(paragraph => paragraph.id == paragraphId).content = value;
        },
        // modifie la valeur du champ title de la présentation dans le state
        setTitleValue(state, { value }) {
            state.presentation.title = value;
        },
        // modifie dans le state la valeur de l'image à envoyer vers l'API
        setNewImageValue(state, { field, value }) {
            state[field] = value;
        },
        // ajoute dans le state le paragraphe passé en paramètre
        setNewParagraph(state, newParagraph) {
            state.presentation.paragraphs.push({ id: newParagraph.id, content: newParagraph.content });
        },
        // retire un paragraphe qui vient d'être supprimé après l'action delete
        unSetParagraph(state, paragraphId) {
            state.presentation.paragraphs = state.presentation.paragraphs.filter(paragraph => paragraph.id != paragraphId);
        },
    },
};
import Axios from '@/_services/caller.service.js';

export default {
    namespaced: true,
    state:() => ({
        // state qui reçoit tous les dessins
        works: [],
        // state qui reçoit les valeurs du formulaire d'ajout d'un nouveau dessin
        newWork: {
            name: '',
            date: '',
            description: '',
            file: '',
            category_id: '',
        },
        // state qui reçoit l'url de l'image du nouveau dessin pour l'afficher dans le formulaire
        newWorkImageUrl: '',
    }), 
    
    getters: {
        // récupère tous les dessins depuis le state
        getAllWorks: (state) => {
            return state.works;
        },
        // récupère les valeurs du formulaire d'ajout d'un dessin depuis le state
        getNewWork: (state) => {
            return state.newWork;
        },
        // récupère la valeur de newWorkUrl depuis le state
        getNewWorkImageUrl: (state) => {
            return state.newWorkImageUrl;
        },
        // récupère un dessin à l'aide de soin ID depuis le state
        getWorkById: (state) => (worId) => {
            const works = state.works.data;
            return works.find(work => work.id === worId);
        },
    },

    // todo toutes les actions
    actions: {
        // action de récupération de tous les dessins depuis la BDD
        async actionGetAllWorks(context) {
            try {
                
            } catch (error) {
                
            } finally {

            };
        },
        // action d'ajout d'un nouveau dessin en BDD  
        async actionAddNewWork(context) {
            try {
                
            } catch (error) {
                
            } finally {

            };
        },
        // action de modification d'un dessin en BDD
        async actionUpdateWorkById(context, { workId }) {
            try {
                
            } catch (error) {
                
            } finally {

            };
        },
        // action de suppression d'un dessin en BDD
        async actionDeleteWorkById(context, { workId }) {
            try {
                
            } catch (error) {
                
            } finally {

            };
        },
    },
    
    // todo certaines mutations ne sont pas terminées
    mutations: {
        // ajoute tous les dessin dans le state depuis une action
        setAllWorks(state, works) {

        },
        // modifie la valeur d'un des champs du formulaire d'ajout d'un nouveau dessin dans le state
        setNewWorkFieldValue(state, { field, value }) {
            const newWork = state.newWork;
            newWork[field] = value;
            state.newWork = newWork;
        },
        // modifie la valeur d'un des champs d'un dessin du state works
        setWorkFieldValue(state, { field, value, workId}) {

        },
        // modifie la valeur du state newWorkImageUrl
        setNewWorkImageUrl(state, { value }) {
            state.newWorkImageUrl = value;
        },
        // remet le state initial de newWork
        setInitialNewCategoryState(state) {
            return state.newWork = {
                name: '',
                date: '',
                description: '',
                file: '',
                category_id: '',
            };
        },
    },
};
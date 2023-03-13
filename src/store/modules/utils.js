import Axios from '@/_services/caller.service.js';

export default {
    namespaced: true,
    state:() => ({
        messageInfo: {
            class: 'success_message', // détermine la class de style du composant message
            content: '', // détermine le contenu textuelle du message
        },
        mainBackofficeLoader: false,
    }), 
    
    getters: {
        getMessageInfo: (state) => {
            return state.messageInfo;
        },
        getMainBackofficeLoader: (state) => {
            return state.mainBackofficeLoader;
        },
    },

    actions: {
        
    },
    
    mutations: {
        setMessageInfo(state, payload) {
            state.messageInfo.class = payload.class,
            state.messageInfo.content = payload.content
        },
        toggleMainBackofficeLoader(state) {
            state.mainBackofficeLoader = ! state.mainBackofficeLoader;
        },
    },
};
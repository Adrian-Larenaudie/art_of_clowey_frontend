
// cette méthode permet de retourner les bons message d'erreus suivant le formulaire soumis et le code retour du WS
const routingMessageInfoService = (formName, status) => {
    switch (formName) {
        // formulaire de connexion
        case 'login_form':
            switch (status) {
                case 200:
                    return {class: 'success_message',content: 'Connexion réussie !'};
                    break;
                case 400:
                    return {class: 'error_message',content: 'Mauvais identifiants'};
                    break;
                case 404:
                    return {class: 'error_message',content: 'Admin non trouvé'};
                    break;
                case 401:
                    return {class: 'error_message',content: 'Mot de passe invalide'};
                    break;
                case 500:
                    return {class: 'error_message',content: 'Erreur server'};
                    break;
                default:
                    break;
            }
            break;
        // cas suivant
        default:
            break;
    };
};

export default routingMessageInfoService;
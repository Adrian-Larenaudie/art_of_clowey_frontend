
// cette méthode permet de retourner les bons message d'erreus suivant le formulaire soumis et le code retour du WS
const routingMessageInfoService = (formName, status) => {
    if(status === 500) {
        return {class: 'error_message',content: 'Erreur server'};
    } else {
        switch (formName) {
            // formulaire de connexion
            case 'login_form':
                switch (status) {
                    case 200:
                        return {class: 'success_message', content: 'Connexion réussie !'};
                        break;
                    case 400:
                        return {class: 'error_message', content: 'Mauvais identifiants'};
                        break;
                    case 404:
                        return {class: 'error_message', content: 'Admin non trouvé'};
                        break;
                    case 401:
                        return {class: 'error_message', content: 'Mot de passe invalide'};
                        break;
                    default:
                        break;
                }
                break;
            // formulaire de modification de catégorie
            case 'update_category_form':
                switch (status) {
                    case 200:
                        return {class: 'success_message', content: 'Category modifiée avec succès !'};
                        break;
                    case 204:
                        return {class: 'success_message', content: 'Category supprimée avec succès !'};
                        break;
                    case 400:
                        return {class: 'error_message', content: 'Il manque des paramètres'};
                        break;
                    case 409:
                        return {class: 'error_message', content: 'Categorie inexistante'};
                        break;
                    default:
                        break;
                }
                break;
            // formulaire d'ajout d'une nouvelle catégorie
            case 'add_category_form':
                switch (status) {
                    case 200:
                        return {class: 'success_message', content: 'Category ajoutée avec succès !'};
                        break;
                    case 400:
                        return {class: 'error_message', content: 'Il manque des paramètres'};
                        break;
                    case 409:
                        return {class: 'error_message', content: 'Cette catégorie existe déjà'};
                        break;
                    default:
                        break;
                }
                break;
            // formulaires suivants
            case 'update_work_form':
          
                break;
            case 'add_work_form':
                
                break;
            // formulaire de modification d'une faq
            case 'update_faq_form':
                switch (status) {
                    case 200:
                        return {class: 'success_message', content: 'Faq modifiée avec succès !'};
                        break;
                    case 204:
                        return {class: 'success_message', content: 'Faq supprimée avec succès !'};
                        break;
                    case 400:
                        return {class: 'error_message', content: 'Il manque des paramètres'};
                        break;
                    case 409:
                        return {class: 'error_message', content: 'Faq inexistante'};
                        break;
                    default:
                        break;
                }
                break;
            // formulaire d'ajout d'une nouvelle faq
            case 'add_faq_form':
                switch (status) {
                    case 200:
                        return {class: 'success_message', content: 'Faq ajoutée avec succès !'};
                        break;
                    case 400:
                        return {class: 'error_message', content: 'Il manque des paramètres'};
                        break;
                    case 409:
                        return {class: 'error_message', content: 'Faq inexistante'};
                        break;
                    default:
                        break;
                }
                break;
            case 'update_admin_pseudo_form':
                
                break;
            case 'update_admin_email_form':
                
                break;
            case 'update_admin_password_form':
                
                break;
            case 'update_presentation_form':
                
                break;
            default:
                break;
        };
    }
};

export default routingMessageInfoService;
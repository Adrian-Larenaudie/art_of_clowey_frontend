<template>
    <div class="admin_block">
        <h2 class="admin_title">Gestion de compte</h2>
        <div class="admin_block_email_form">
            <input type="checkbox" id="form_email" name="q"  class="questions">
            <label for="form_email" class="question">
                Modifier mon address mail
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="change_email_form">
                    <div class="login_field">
                        <label for="new_email">Nouvelle adresse mail*</label>
                        <input class="standart_form_input" id="new_email" type="text">
                    </div>
                    <div class="login_field">
                        <label for="email_form_password">Mot de passe*</label>
                        <input class="standart_form_input" id="email_form_password" type="password">
                        <a class="login_forgotten_mdp" href="#">Mot de passe oublié</a>
                    </div>
                    <div class="login_field">
                        <button class="login_submit">Modifier</button>
                    </div>
                </form>
            </div> 
        </div>
        <div class="admin_block_pseudo_form">
            <input type="checkbox" id="form_pseudo" name="q"  class="questions">
            <label for="form_pseudo" class="question">
                Modifier mon pseudo
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="change_pseudo_form">
                    <div class="login_field">
                        <label for="new_pseudo">Nouveau pseudo*</label>
                        <input class="standart_form_input" id="new_pseudo" type="text">
                    </div>
                    <div class="login_field">
                        <label for="pseudo_form_password">Mot de passe*</label>
                        <input class="standart_form_input" id="pseudo_form_password" type="password">
                        <a class="login_forgotten_mdp" href="#">Mot de passe oublié</a>
                    </div>
                    <div class="login_field">
                        <button class="login_submit">Modifier</button>
                    </div>
                </form>
            </div> 
        </div>
        <div class="admin_block_password_form">
            <input type="checkbox" id="form_password" name="q"  class="questions">
            <label for="form_password" class="question">
                Modifier mon mot de passe
                <svg class="svg_question_arrow" viewBox="0 0 20 20">
                    <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>    
            </label>
            <div class="answer">
                <form class="change_password_form">
                    <div class="login_field">
                        <label for="update_password">Ancien mot de passe*</label>
                        <input class="standart_form_input" id="update_password" type="password">
                        <a class="login_forgotten_mdp" href="#">Mot de passe oublié</a>
                    </div>
                    <div class="login_field">
                        <label for="new_password">
                            Nouveau mot de passe*
                            <span id="info_panel_mdp" class="svg_info_panel">
                                <svg width="20px" height="20px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#e14e5c"/>
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#e14e5c" stroke-width="2"/>
                                    <path d="M12 8L12 13" stroke="#e14e5c" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M12 16V15.9888" stroke="#e14e5c" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                <div class="password_requirements">
                                    <ul>
                                        <li>10 caractères minimum</li>
                                        <li>1 majuscule</li>
                                        <li>1 minuscule</li>
                                        <li>1 chiffre</li>
                                        <li>1 caractères: !?.-_^*+/%$</li>
                                    </ul>
                                </div>
                            </span>
                        </label>
                        <input class="standart_form_input" id="new_password" type="password">
                    </div>
                    <div class="login_field">
                        <label for="confirm_new_password">Confirmer nouveau mot de passe*</label>
                        <input class="standart_form_input" id="confirm_new_password" type="password">
                    </div>
                    <div class="login_field">
                        <button class="login_submit">Modifier</button>
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminView',
};
</script>
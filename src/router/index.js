import { createRouter, createWebHistory } from 'vue-router'
// import de toutes les vues backoffice et frontoffice
import * as frontoffice from '@/views/frontoffice';
import * as backoffice from '@/views/backoffice';

// import du gardien qui redirige vers login sur les routes du backoffice si il n'y a pas de token en local storage
import { authGuard } from '@/_helpers/authGuard.js';

// déclaration des routes
const routes = [
    {
        // les routes du frontoffice
        path: '/',
        name: 'frontoffice',
        component: frontoffice.Layout,
        children: [
            { path: '', name: 'home', component: frontoffice.Home },
            { path: 'portfolio/:category', name: 'portfolio', component: frontoffice.Portfolio },
            { path: 'faq', name: 'faq', component: frontoffice.Faq },
            { path: 'login', name: 'login', component: frontoffice.Login },
        ]
    },

    {
        // les routes du backoffice
        path: '/backoffice',
        name: 'backoffice',
        component: backoffice.Layout,
        children: [
            { path: 'admin', name: 'admin', component: backoffice.Admin },
            { path: 'categories', name: 'category', component: backoffice.Category },
            { path: 'presentation', name: 'presentation', component: backoffice.Presentation },
            { path: 'oeuvres', name: 'work', component: backoffice.Work },
            { path: 'faq', name: 'adminFaq', component: backoffice.Faq },

        ]
    },

    {
        // si la route demandé n'existe pas on redirige vers la home (on pourrait aussi jouer une vue erreur)
        path: '/:pathMatch(.*)*', redirect: '/',
    },

];

// Gestion de l'historisation du routing
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// Déclanchement du gardien de route sur les routes du backoffice
router.beforeEach((to, from, next) => {
    /// on dit que si la route contient 'backoffice'
    if(to.matched[0].name === 'backoffice') {
        // on doit passer par notre gardien
        authGuard();
    }
    next();
});

export default router

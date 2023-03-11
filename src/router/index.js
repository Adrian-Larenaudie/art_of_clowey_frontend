import { createRouter, createWebHistory } from 'vue-router'
// import de toutes les vues backoffice et frontoffice
import * as frontoffice from '@/views/frontoffice';
import * as backoffice from '@/views/backoffice';

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
            { path: 'backoffice/login', name: 'login', component: frontoffice.Login },
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

export default router

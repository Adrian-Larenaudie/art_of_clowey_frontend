import { createRouter, createWebHistory } from 'vue-router'
// import de toutes les vues backoffice et frontoffice
import * as frontoffice from '@/views/frontoffice';
import * as backoffice from '@/views/backoffice';

// déclaration des routes
const routes = [
    {
        // les routes publiques
        path: '/',
        name: 'frontoffice',
        component: frontoffice.Layout,
        children: [
            { path: '', name: 'home', component: backoffice.Home },
            { path: 'portfolio/:category', name: 'portfolio', component: frontoffice.Portfolio },
            { path: 'faq', name: 'faq', component: backoffice.Faq },
        ]
    },

    {
        // les routes admin
        path: '/backoffice',
        name: 'backoffice',
        component: backoffice.Layout,
        children: [
            { path: 'oeuvres', name: 'work', component: backoffice.Work },
            { path: 'categories', name: 'category', component: backoffice.Category },
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

import { createStore } from 'vuex';

import admin from './modules/admin.js';
import category from './modules/category.js';
import faq from './modules/faq.js';
import presentation from './modules/presentation.js';
import work from './modules/work.js';

import utils from './modules/utils.js';

export default createStore({
  modules: {
    admin,
    category,
    faq,
    presentation,
    work,
    utils,
  },
});
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';
import * as ModulActions from './store/actions';
import './styles/main.scss';

import I18nPlugin, { currentLang, FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import ComponentsPlugin from '@ulaval/modul-components/dist/components';
import DirectivesPlugin from '@ulaval/modul-components/dist/directives';
import UtilsPlugin, { UtilsPluginOptions } from '@ulaval/modul-components/dist/utils';

import svc from '@ulaval/modul-components/dist/services/component-meta-impl';

import { DO_NAME, MDo } from './components/do/do';
import { DONT_NAME, MDont } from './components/dont/dont';
import { MARKDOWN_NAME, MMarkdown } from './components/markdown/markdown';

const utilsPluginOptions: UtilsPluginOptions = {
    securityPluginOptions: {
        protectedUrls: ['<url>'],
        getToken: () => '<token>'
    }
};

async function main() {
    Vue.config.productionTip = false;

    Vue.use(I18nPlugin);
    Vue.use(ComponentsPlugin);
    Vue.use(DirectivesPlugin);
    Vue.use(UtilsPlugin, utilsPluginOptions);

    Vue.use(svc);

    Vue.component(DO_NAME, MDo);
    Vue.component(DONT_NAME, MDont);
    Vue.component(MARKDOWN_NAME, MMarkdown);

    currentLang(FRENCH);
    await store.dispatchAsync(ModulActions.MESSAGES_GET, FRENCH);
    await store.dispatchAsync(ModulActions.ICONS_GET, 'website');
    await store.dispatchAsync(ModulActions.COMPONENTS_META_GET, FRENCH);

    const vue = new Vue({
        router,
        store,
        template: '<modul></modul>',
        components: { Modul }
    });

    vue.$mount('#vue');
}

main();

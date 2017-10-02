import Vue from 'vue';
import Component from 'vue-class-component';
// import store from './store';
import WithRender from './component-details.html?style=./component-details.scss';
import { ModulWebsite } from '../modul-website';
import { ROUTES, COMPONENT_PROPERTIES, COMPONENT_OVERVIEW } from '@/app/router';
import Meta, { ComponentMeta, ComponentAttribute, Overview, OverviewType } from '@ulaval/modul-components/dist/meta/meta';
import * as ModulActions from '@/app/store/actions';
import * as ModulGetters from '@/app/store/getters';

@WithRender
@Component
export class ComponentDetails extends ModulWebsite {

    protected beforeUpdate(): void {
        this.$store.dispatch(ModulActions.COMPONENT_PREVIEW_GET, {
            restAdapter: this.$http
        });
    }

    private get markdownPreview() {
        return this.$store.getters[ModulGetters.GET_MARKDOWN_PREVIEW];
    }

    private get properties(): string {
        return ROUTES[COMPONENT_PROPERTIES];
    }

    private get overview(): string {
        return ROUTES[COMPONENT_OVERVIEW];
    }

    private get htmlTag(): string {
        if (this.state.component) {
            return `<${this.state.component.tag}></${this.state.component.tag}>`;
        } else {
            return '';
        }
    }
}

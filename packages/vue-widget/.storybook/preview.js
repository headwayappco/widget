import Vue from 'vue'
import { addParameters } from "@storybook/vue";
import HeadwayWidget from '../src/HeadwayWidget.vue'
import HeadwayWidgetTrigger from '../src/HeadwayWidgetTrigger.vue'
import Logo from '../stories/Logo.vue'

Vue.component('headway-widget', HeadwayWidget);
Vue.component('headway-widget-trigger', HeadwayWidgetTrigger);
Vue.component('logo', Logo);

addParameters({
  docs: { inlineStories: true }
});

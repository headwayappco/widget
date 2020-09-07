import Vue from 'vue'
import { addParameters } from "@storybook/vue";
import HeadwayWidget from '../src/HeadwayWidget.vue'
import Logo from '../stories/Logo.vue'

Vue.component('headway-widget', HeadwayWidget);
Vue.component('logo', Logo);

addParameters({
  docs: { inlineStories: true }
});

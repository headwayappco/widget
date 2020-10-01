import HeadwayWidget from "./HeadwayWidget.vue";
import HeadwayWidgetTrigger from "./HeadwayWidgetTrigger.vue";

const HeadwayPlugin = {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("headway-widget", HeadwayWidget);
  Vue.component("headway-widget-trigger", HeadwayWidgetTrigger);
 }
};

export {HeadwayPlugin, HeadwayWidget, HeadwayWidgetTrigger};

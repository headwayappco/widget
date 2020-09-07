import HeadwayWidget from "./HeadwayWidget.vue";

const HeadwayPlugin = {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("headway-widget", HeadwayWidget);
 }
};

export {HeadwayPlugin, HeadwayWidget};

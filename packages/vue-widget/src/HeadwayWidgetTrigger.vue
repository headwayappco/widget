<template>
  <div
    v-bind:is="component"
    ref="root"
    v-bind:class="cName"
  >
    <!-- @slot Use this slot header -->
    <slot></slot>
  </div>
</template>

<script>
const HeadwayWidgetClassName = "HW_widget_component";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;
const HeadwayWidgetTriggerClassName = "HW_trigger";
const HeadwayWidgetTriggerSelector = "." + HeadwayWidgetTriggerClassName;

export default {
  name: "headway-widget-trigger",
  props: {
    forId: {
      type: String,
      default: 'widget-1'
    },
    component: {
      type: String,
      default: "div",
    },
  },
  data: (self) => ({
    cName: HeadwayWidgetTriggerClassName  + `_${self.forId}`,
  }),
};
</script>

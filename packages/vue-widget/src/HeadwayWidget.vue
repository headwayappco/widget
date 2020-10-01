<template>
  <div
    v-bind:is="component"
    ref="root"
    v-bind:class="cName"
    style="position: relative; display: inline-block;"
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
  name: "headway-widget",
  props: {
    id: {
      type: String,
    },
    /**
     * Success event.
     *
     * @event success
     */
    trigger: {
      type: Boolean,
      default: false,
    },
    account: {
      type: String,
    },
    component: {
      type: String,
      default: "div",
    },
    badgePosition: {
      type: String,
      default: "bottom-right",
    },
    translations: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data: (self) => console.log(self.id) || ({
    cName: HeadwayWidgetClassName  + `_${self.id}`,
  }),
  methods: {
    initHeadway() {
      const hwConfig = {
        selector: HeadwayWidgetSelector + `_${this.id}`,
        account: this.account,
        trigger: this.trigger
        ? HeadwayWidgetSelector + `_${this.id}`
        : this.options.trigger || HeadwayWidgetTriggerSelector + `_${this.id}`,
        callbacks: {
          onWidgetReady: () => {
            /**
             * Success event.
             */
            this.$emit("widgetReady");
          },
          onShowWidget: () => this.$emit("showWidget"),
          onShowDetails: () => this.$emit("showDetails"),
          onReadMore: () => this.$emit("readMore"),
          onHideWidget: () => this.$emit("hideWidget"),
        },
        krzysztof: true,
        translations: this.translations,
        badgePosition: this.badgePosition,
      };
      const w = window.Headway.getNewWidget();
      const x = w.init(hwConfig);
    },
  },
  mounted() {
    if (window.Headway) {
      this.initHeadway();
    } else {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = () => {
        this.initHeadway();
      };
      script.src = "https://cdn.headwayapp.co/widget.js";
      head.appendChild(script);
    }
  },
};
</script>

<style></style>

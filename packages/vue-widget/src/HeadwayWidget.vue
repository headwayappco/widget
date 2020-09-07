<template>
  <div
    v-bind:is="component"
    ref="root"
    v-bind:class="className"
    style="position: relative; display: inline-block;"
  >
    <!-- @slot Use this slot header -->
    <slot></slot>
  </div>
</template>

<script>
const HeadwayWidgetClassName = "headway-widget";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;

export default {
  name: "headway-widget",
  props: {
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
  },
  data: () => ({
    className: HeadwayWidgetClassName,
  }),
  methods: {
    initHeadway() {
      const hwConfig = {
        selector: HeadwayWidgetSelector,
        account: this.account,
        trigger: HeadwayWidgetSelector,
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

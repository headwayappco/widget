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

const parsePosition = (positionText) => {
  if (positionText.indexOf("-") === -1) {
    return {};
  }

  const [y, x] = positionText.split("-");
  return { x, y };
};

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
    position: {
      type: String,
      default: "bottom-right"
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
    invokeCallbackIfExists(name) {
      if (this.options.callbacks && this.options.callbacks[name]) {
        this.options.callbacks[name]();
      }
    },
    initHeadway() {
      const objPosition = parsePosition(this.position);

      const hwConfig = {
        selector: HeadwayWidgetSelector + `_${this.id}`,
        account: this.account,
        trigger: this.trigger
        ? HeadwayWidgetSelector + `_${this.id}`
        : this.options.trigger || HeadwayWidgetTriggerSelector + `_${this.id}`,
        callbacks: {
          onWidgetReady: () => {
            /**
             * widgetReady event.
             */
            this.$emit("widgetReady");
            this.invokeCallbackIfExists('onWidgetReady');
          },
          onShowWidget: () => {
            /**
             * showWidget event.
             */
            this.$emit("showWidget");
            this.invokeCallbackIfExists('onShowWidget');
          },
          onShowDetails: () => {
            /**
             * showDetails event.
             */
            this.$emit("showDetails");
            this.invokeCallbackIfExists('onShowDetails');
          },
          onReadMore: () => {
            /**
             * readMore event.
             */
            this.$emit("readMore");
            this.invokeCallbackIfExists('onReadMore');
          },
          onHideWidget: () => {
            /**
             * hideWidget event.
             */
            this.$emit("hideWidget");
            this.invokeCallbackIfExists('onHideWidget');
          },
        },
        krzysztof: true,
        translations: this.translations,
        badgePosition: this.badgePosition,
        position: objPosition,
        ...this.options
      };
      const widget = window.Headway.getNewWidget();
      widget.init(hwConfig);
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

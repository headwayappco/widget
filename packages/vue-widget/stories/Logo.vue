<template>
  <div
    style="
      font-size: 32px;
      font-weight: bold;
      font-family: Helvetica;
      background: #ffb800;
      color: #223cff;
      padding: 20px;
    "
  >
    Your Logo
  </div>
</template>

<script>
const HeadwayWidgetClassName = "headway-widget";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;

export default {
  name: "logo",
  props: {},
  data: () => ({
    className: HeadwayWidgetClassName,
  }),
};
</script>

<style></style>

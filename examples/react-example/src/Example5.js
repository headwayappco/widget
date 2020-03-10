import React from "react";
import HeadwayWidget from "./HeadwayWidget";

const options = {
  account: "J1LKG7",
  trigger: "#external-trigger",
  callbacks: {
    onWidgetReady() {
      console.log("widget ready");
    }
  }
};

const Example5 = () => {
  return (
    <div>
      <h2>Options object</h2>
      <HeadwayWidget options={options}>
        <div style={{ padding: 10, background: "blue", borderRadius: "3px" }}>
          Widget
        </div>
      </HeadwayWidget>
      <br />
      <br />
      <div id="external-trigger">External Trigger</div>
    </div>
  );
};

export default Example5;

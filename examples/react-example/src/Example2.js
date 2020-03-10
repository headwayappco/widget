import React from "react";
import HeadwayWidget, { HeadwayWidgetTrigger } from "./HeadwayWidget";

const Example2 = () => {
  return (
    <div>
      <h2>External trigger</h2>
      <HeadwayWidget account="J1LKG7">
        <div style={{ padding: 10, background: "blue", borderRadius: "3px" }}>
          Widget
        </div>
      </HeadwayWidget>
      <br />
      <br />
      <HeadwayWidgetTrigger>
        <div style={{ padding: 10, background: "green", borderRadius: "3px" }}>
          Trigger
        </div>
      </HeadwayWidgetTrigger>
    </div>
  );
};

export default Example2;

import React from "react";
import HeadwayWidget from "./HeadwayWidget";

const Example4 = () => {
  return (
    <div>
      <h2>Handlers</h2>
      <HeadwayWidget
        account="J1LKG7"
        onWidgetReady={() => console.log("onWidgetReady")}
        onShowWidget={() => console.log("onShowWidget")}
        onHideWidget={() => console.log("onHideWidget")}
        onReadMore={() => console.log("onReadMore")}
        onShowDetails={() => console.log("onShowDetails")}
      >
        <div style={{ padding: 10, background: "blue", borderRadius: "3px" }}>
          Widget
        </div>
      </HeadwayWidget>
    </div>
  );
};

export default Example4;

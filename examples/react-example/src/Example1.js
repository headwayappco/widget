import React from "react";
import HeadwayWidget from "./HeadwayWidget";

const Example1 = () => {
  return (
    <div>
      <h2>Simplest</h2>
      <HeadwayWidget account="a7zR7N">
        <div style={{ padding: 10, background: "green", borderRadius: "3px" }}>
          This element has a changelog
        </div>
      </HeadwayWidget>
    </div>
  );
};

export default Example1;

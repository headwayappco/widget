import React from "react";
import HeadwayWidget from "./HeadwayWidget";

const Example1 = () => {
  return (
    <div>
      <h2>Self trigger</h2>
      <HeadwayWidget account="a7zR7N" trigger>
        <div style={{ padding: 10, background: "green", borderRadius: "3px" }}>
          Click here to see changelog
        </div>
      </HeadwayWidget>
    </div>
  );
};

export default Example1;

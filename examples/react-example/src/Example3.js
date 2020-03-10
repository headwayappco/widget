import React, { useState } from "react";
import HeadwayWidget from "./HeadwayWidget";

const Example3 = () => {
  const [badgePlacement, setBadgePlacement] = useState("bottom-right");

  return (
    <div>
      <h2>Badge placement</h2>
      <select
        value={badgePlacement}
        onChange={e => setBadgePlacement(e.target.value)}
      >
        <option value="bottom-right">bottom-right</option>
        <option value="bottom-left">bottom-left</option>
        <option value="top-right">top-right</option>
        <option value="top-left">top-left</option>
        <option value="none">none</option>
        <option value="">blank</option>
      </select>
      <br />
      <br />
      <HeadwayWidget account="J1LKG7" badgePlacement={badgePlacement}>
        <div style={{ padding: 10, background: "blue", borderRadius: "3px" }}>
          Widget
        </div>
      </HeadwayWidget>
    </div>
  );
};

export default Example3;

/*
styles={{
    container: { top: 10, right: 10 },
    badge: { background: "yellow" }
  }}
* */

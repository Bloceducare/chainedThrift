import React from "react";
import DisplayBox from "../displayBox";

function LisplayBox({theme}) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <DisplayBox
        theme={theme}
        icon="/assets/calendar.svg"
        name="Created on"
        desc="29 Sept. 2021"
      />
      <DisplayBox
      theme={theme}
        icon="/assets/calendar.svg"
        name="Members"
        desc="2"
      />
      <DisplayBox
      theme={theme}
        icon="/assets/calendar.svg"
        name="Total Collateral"
        desc="1000 DAI"
      />
    </div>
  );
}

export default LisplayBox;

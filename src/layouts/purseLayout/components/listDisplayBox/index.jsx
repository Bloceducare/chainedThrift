import React from "react";
import DisplayBox from "../displayBox";

function LisplayBox() {

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <DisplayBox
        icon="/assets/calendar.svg"
        name="Created on"
        desc="29 Sept. 2021"
      />
      <DisplayBox
        icon="/assets/calendar.svg"
        name="Members"
        desc="2"
      />
      <DisplayBox
        icon="/assets/calendar.svg"
        name="Total Collateral"
        desc="1000 DAI"
      />
    </div>
  );
}

export default LisplayBox;

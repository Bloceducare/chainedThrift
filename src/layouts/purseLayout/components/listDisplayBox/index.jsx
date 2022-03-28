import React from "react";
import DisplayBox from "../displayBox";

function LisplayBox({ theme }) {

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-8">
      <DisplayBox
        theme={theme}
        icon="/assets/calendar.svg"
        name="Created on"
        desc="29 Sept. 2021"
      />
      <DisplayBox
        theme={theme}
        icon="/assets/members.svg"
        name="Members"
        desc="2"
      />
      <DisplayBox
        theme={theme}
        icon="/assets/tlv.svg"
        name="Total Collateral"
        desc="1000 DAI"
      />
    </div>
  );
}

export default LisplayBox;

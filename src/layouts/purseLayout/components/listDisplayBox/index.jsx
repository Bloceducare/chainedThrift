import React from "react";
import DisplayBox from "../displayBox";
import {BsCalendarEvent} from "react-icons/bs"
import {IoIosPeople} from 'react-icons/io'
import {GiMoneyStack} from "react-icons/gi"

function LisplayBox({ theme }) {

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-8">
      <DisplayBox
        icon = {BsCalendarEvent}
        name="Created on"
        desc="29 Sept. 2021"
      />
      <DisplayBox
        icon= {IoIosPeople}
        name="Members"
        desc="2"
      />
      <DisplayBox
        icon= {GiMoneyStack}
        name="Total Collateral"
        desc="1000 DAI"
      />
    </div>
  );
}

export default LisplayBox;

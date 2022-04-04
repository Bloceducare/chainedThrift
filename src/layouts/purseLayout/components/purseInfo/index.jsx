import React from "react";
import PurseInfoBox from "../purseInfoBox";
import {BsCalendarEvent} from "react-icons/bs"
import {IoIosPeople} from 'react-icons/io'
import {GiMoneyStack} from "react-icons/gi"

function PurseInfo() {

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-8">
      <PurseInfoBox
        icon = {BsCalendarEvent}
        dataKey="Created on"
        dataValue="29 Sept. 2021"
      />
      <PurseInfoBox
        icon= {IoIosPeople}
        dataKey="Members"
        dataValue="2"
      />
      <PurseInfoBox
        icon= {GiMoneyStack}
        dataKey="Total Collateral"
        dataValue="1000 DAI"
      />
    </div>
  );
}

export default PurseInfo;

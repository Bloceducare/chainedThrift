import React from "react";
import PurseInfoBox from "../purseInfoBox";
import {BsCalendarEvent} from "react-icons/bs"
import {IoIosPeople} from 'react-icons/io'
import {GiMoneyStack} from "react-icons/gi"

function PurseInfo({purseDetail,tokenSymbol}) {

  return (
    <div className="grid gap-2 sm:grid-cols-1 md:gap-2 md:grid md:grid-cols-3 lg:grid-cols-3">
      <PurseInfoBox
        icon = {BsCalendarEvent}
        dataKey="Created on"
        dataValue={purseDetail.timeCreated}
      />
      <PurseInfoBox
        icon= {IoIosPeople}
        dataKey="Members"
        dataValue={purseDetail.members}
      />
      <PurseInfoBox
        icon= {GiMoneyStack}
        dataKey="Total Collateral"
        dataValue={`${purseDetail.contract_total_collateral_balance} ${tokenSymbol}`}
      />
    </div>
  );
}

export default PurseInfo;

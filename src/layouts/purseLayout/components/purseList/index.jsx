import React from "react";
import Purse from "../purse";

const PurseList = ({ list = [], onAction, theme }) => {
  console.log(theme)
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {list.map((item, idx) => (
        <Purse
        theme={theme}
          key={idx}
          purseId={idx}
          created={item.created}
          member={item.member}
          tvl={item.tvl}
          onClick={onAction}
        />
      ))}
    </div>
  );
};

export default PurseList;

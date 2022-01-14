import React from "react";
import Purse from "../purse";

const PurseList = ({ list = [], onAction }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {list.map((item, idx) => (
        <Purse
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

import React from "react";
import Purse from "../purse";
import NoPurse from "../noPurse"




const PurseList = ({ purseList = [], isMyPurses, gotToExplorePursesTab,loading, gotToCreateNewPurse }) => {
  if(isMyPurses && purseList.length === 0 ) {
    return (
      <NoPurse
        loading={loading}
        gotToExplorePursesTab = {gotToExplorePursesTab}
        gotToCreateNewPurse = {gotToCreateNewPurse}
      />
    )
  }
  
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {purseList.map((item, idx) => (
        <Purse
          loading={loading}
          key={idx}
          purse = {item}
        />
      ))}
    </div>
  );
};

export default PurseList;

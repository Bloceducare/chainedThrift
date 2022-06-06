import React from "react";
import { DisplayCard } from "../DisplayCard";

export const CardList = ({purseDetail}) => {
    const secondsInADay = 86400;
    const days = Number(purseDetail.time_interval) /secondsInADay;
    return (
        <div className="flex flex-col md:flex-row md:gap-4 mb-8 w-full">
            <DisplayCard
                frequencyTitle="Frequency"
                frequency={ `${days} Days`}
                createdTitle="Created"
                created={purseDetail.timeCreated}
            />
            <DisplayCard
                frequencyTitle="Current Members"
                frequency={purseDetail.members}
                createdTitle="Max Members"
                created={purseDetail.max_member}
            />
            <DisplayCard
                frequencyTitle="Amount(TVL)"
                frequency={`${purseDetail.deposit_amount} USDC`}
                icon="/assets/lock_open.png"
            />
        </div>
    );
};

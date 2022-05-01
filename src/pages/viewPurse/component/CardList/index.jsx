import React from "react";
import { DisplayCard } from "../DisplayCard";

export const CardList = ({purseDetail}) => {
    return (
        <div className="flex flex-col md:flex-row md:gap-4 mb-8 w-full">
            <DisplayCard
                frequencyTitle="Frequency"
                frequency={ `${purseDetail.time_interval} Days`}
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

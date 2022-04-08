import React from "react";
import { DisplayCard } from "../DisplayCard";

export const CardList = () => {
    return (
        <div className="flex flex-col md:flex-row md:gap-4 mb-8 w-full">
            <DisplayCard
                frequencyTitle="Frequency"
                frequency="5 Days"
                createdTitle="Created"
                created="23 Sep. 2021"
            />
            <DisplayCard
                frequencyTitle="Current Members"
                frequency="2"
                createdTitle="Max Members"
                created="3"
            />
            <DisplayCard
                frequencyTitle="Amount(TVL)"
                frequency="1000 USDC"
                icon="/assets/lock_open.png'"
            />
        </div>
    );
};

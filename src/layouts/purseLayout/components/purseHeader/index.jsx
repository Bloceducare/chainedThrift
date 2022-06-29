import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import { FiBell } from "react-icons/fi";
import PurseInfo from "../purseInfo";
import MobileBar from "../MobileBar";
import usePurse from "../../../../web3/hooks/usePurse";
import { useParams } from "react-router-dom";
import { formatUnits } from "ethers/lib/utils";
import { formatDate, shortenAddress } from "../../../../utils";
import { useWeb3React } from "@web3-react/core";
import moment from "moment"
import useToken from "../../../../web3/hooks/useToken";

const PurseHeader = ({ currentTab,currentRound,amount }) => {
    const { active, account } = useWeb3React();
    const [show, setShow] = useState(false);
    const [purseDetail, setPurseDetail] = useState([]);
    const { symbol: tokenSymbol } = useToken(purseDetail?.token_address);

    const { id } = useParams();
    const { getPurseData, getPurseMembers, getBentoBalance } = usePurse();

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);

    const showHandler = () => {
        setShow(!show);
    };

const readableTimer = moment.unix(currentRound.timer).toString()
    const getSinglePurseDetail = async () => {
        try {
            const purseData = await getPurseData(id);
            const pursemember = await getPurseMembers(id);
            const res = await getBentoBalance();
            console.log(purseData)
            setPurseDetail({
                address: purseData?.purseAddress,
                time_interval: purseData.time_interval.toString(),
                timeCreated: formatDate(purseData.timeCreated),
                deposit_amount: formatUnits(purseData.deposit_amount),
                max_member: Number(purseData.max_member_num),
                members: pursemember.length,
                collateral: formatUnits(purseData.required_collateral),
                contract_total_collateral_balance: formatUnits(
                    purseData.contract_total_collateral_balance
                ),
                token_address: purseData._address_of_token,
                bento_balance: formatUnits(res), 
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    useEffect(() => {
        if (!active) return;
        getSinglePurseDetail();
        // eslint-disable-next-line
    }, [active, account]);

    return (
        <div>
            <div className="dark:bg-dark-1 bg-white-1 w-full h-40 pl-8 pr-8 flex justify-between items-center">
                <div className="flex flex-col">
                    <div>
                        <p className="Montserrat font-extrabold text-lg md:text-3xl dark:text-white-1 text-dark-1">
                            Dashboard
                        </p>
                        <div className="Poppins font-medium text-xs md:text-base dark:text-white-1 text-dark-1">
                            Purse ID: {shortenAddress(purseDetail.address)}
                        </div>
                        <div className="Poppins mt-1 font-medium text-xs md:text-base dark:text-white-1 text-dark-1">
                            Claimable Deposit: {amount} {tokenSymbol}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-7 md:mr-0">
                <div className="Poppins text-xs mb-2 md:text-base font-bold dark:text-white-1 text-dark-1 font-medium">
                        {readableTimer === 'Invalid date'? <p>Members not complete</p> : <p>Next Round: {readableTimer} </p>}
                    </div>

                    <div className="Poppins text-xs md:text-base dark:text-white-1 text-dark-1 font-medium">
                        <p className="font-bold">Current Round: {currentRound.round || 0}</p>
                    </div>
                    <div>
                        <div className="Poppins text-xs md:text-base dark:text-white-1 text-dark-1 font-medium">
                            Bal. of BentoBox:{" "}
                            {`${purseDetail.bento_balance} ${tokenSymbol}`}
                        </div>
                    </div>
                </div>
                <div className="relative hidden md:block mt-7">
                    <div onClick={showHandler} className="">
                        <div className="flex cursor-pointer relative items-center bg-pink-gradient rounded-3xl p-1">
                            <FiBell className="w-8  text-white" />
                            <p className="Poppins text-white-1 text-xs font-thin">
                                15
                            </p>
                        </div>
                    </div>
                    {show && <Notification />}
                </div>
            </div>
            <PurseInfo purseDetail={purseDetail} tokenSymbol={tokenSymbol} />
            <MobileBar id={id} currentTab={currentTab} />
        </div>
    );
};

export default PurseHeader;

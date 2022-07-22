import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ImNotification } from "react-icons/im";
import { CardList } from "./component/CardList";
import usePurse from "../../web3/hooks/usePurse";
import {  useParams } from "react-router-dom";
import { parseUnits, formatUnits } from "ethers/lib/utils";
import { formatDate, shortenAddress } from "../../utils";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import useToken from "../../web3/hooks/useToken";
import { useToasts } from "react-toast-notifications";
import ViewPurseSkeleton from "../../common/skeleton/viewPurse";
import axios from "axios";
import { copyToClipBoard } from "../../utils";
import "./index.scss";

const ViewPurse = () => {
    const { addToast } = useToasts();
    const { active, account } = useWeb3React();
    const { id } = useParams();
    const {
        getPurseData,
        getPurseMembers,
        joinPurses,
        getChatId,
        getPositionInfo,
    } = usePurse();
    const [purseDetail, setPurseDetail] = useState([]);
    const [position, setPosition] = useState(1);
    const [chatId, setChatId] = useState(null);
    const [availPos, setAvailPos] = useState([]);

    const {
        getAllowance,
        approve,
        symbol: tokenSymbol,
        decimals,
    } = useToken(purseDetail?.token_address);

    // loading will be used for skeleton loader
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    const previousPageHandler = () => {
        navigate("/app/purses");
    };

    const getSinglePurseDetail = async () => {
        try {
            const purseData = await getPurseData(id);
            const chatId = await getChatId(id);
            const pursemember = await getPurseMembers(id);
            // To calculate the expiring date of a purse
            const time = Number(purseData.timeCreated.toString());
            const frequency = purseData.time_interval.toString();
            const frequencyMulSeconds = Number(frequency);
            const sumSecondsTotal = time + frequencyMulSeconds;
            const endTime = new Date(sumSecondsTotal * 1000).toDateString();

            setChatId(chatId);

            setPurseDetail({
                address: purseData.purseAddress,
                time_interval: purseData.time_interval.toString(),
                timeCreated: formatDate(purseData.timeCreated),
                deposit_amount: formatUnits(purseData.deposit_amount),
                max_member: Number(purseData.max_member_num),
                members: pursemember.length,
                admin: pursemember[0],
                collateral: formatUnits(purseData.required_collateral),
                contract_total_collateral_balance: formatUnits(
                    purseData.contract_total_collateral_balance
                ),
                token_address: purseData._address_of_token,
                endTime: endTime,
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const positionDetail = async () => {
        const data = await getPositionInfo(id);
        const formatData = data.map((num) => { return Number(num)})
        setAvailPos(formatData);
    };



    function range() {
        let result = [];
        for(let i=1; i <= purseDetail?.max_member; i++){
            result.push(i)
        }
        return result
      }
    const result = range()
    const filterArray = (arr1, arr2) => {
        const filtered = arr1.filter(el => {
           return arr2.indexOf(el) === -1;
        });
        return filtered;
     };
     const filteredResult = filterArray(result,availPos)
     



    // @condition:check if currentMember equals max_memeber, if true disable from joining purse else yunno
    const currentMember = purseDetail.members;
    const maxMembers = purseDetail.max_member;
    const admin = purseDetail.admin;

    const onInputChange = ({ target }) => {
        const elementName = target.name;
        const value = target.value;
        switch (elementName) {
            case "pos":
                return setPosition(value);

            default:
                break;
        }
    };

    const copyToClipBoardHandler = async () => {
        let path = window.location.href;
        const success = await copyToClipBoard(path);
        if (success) {
            addToast("Copied to clipboard", {
                appearance: "success",
            });
        } else {
            addToast("Not Copied", {
                appearance: "error",
            });
        }
    };

    const joinPurseHandler = async () => {
        if (!active) return;
        const allowance = await getAllowance();
        const collateralWei = parseUnits(
            purseDetail?.collateral.toString(),
            decimals
        );
        if (allowance) {
            await approve(purseDetail?.address, collateralWei, async (res) => {
                if (!res.hash)
                    return addToast(res.message, { appearance: "error" });
                await res.wait();
                addToast(
                    `${purseDetail?.collateral} ${tokenSymbol} token approval successfull!`,
                    { appearance: "success" }
                );

                //  get or create this user

                var details = {
                    username: account,
                    secret: account,
                };
                const config = {
                    method: "put",
                    url: "https://api.chatengine.io/users/",
                    headers: {
                        "PRIVATE-KEY": "19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1",
                    },
                    data: details,
                };
                const User = await axios(config);
                const userData = await User.data;
                const userName = userData.username;
                //  console.log(userName)

                //  add this member to the chat
                var user = {
                    username: userName,
                };
                const addUser = {
                    method: "post",
                    url: `https://api.chatengine.io/chats/${chatId}/people/`,
                    headers: {
                        "Project-ID": "21f51b31-abf1-4e3e-9ed4-00a1b0215871",
                        "User-Name": admin,
                        "User-Secret": admin,
                    },
                    data: user,
                };
                const addmember = await axios(addUser);
                const usedata = await addmember.data;
                console.log(usedata);

                await joinPurses(position, async (res) => {
                    if (!res.hash)
                        return addToast(res.message, {
                            appearance: "error",
                        });
                    const result = await res.wait();
                    const address = await result.to;
                    addToast("Successfully Joined Purse!", {
                        appearance: "success",
                    });
                    navigate(`/app/purse/${address}`);
                }).catch((err) => {
                    return addToast("something went wrong!", {
                        appearance: "error",
                    });
                });
            });
        } else {
            var details = {
                username: account,
                secret: account,
            };
            const config = {
                method: "put",
                url: "https://api.chatengine.io/users/",
                headers: {
                    "PRIVATE-KEY": "19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1",
                },
                data: details,
            };
            const User = await axios(config);
            const userData = await User.data;
            const userName = userData.username;
            console.log(userName);

            //  add this member to the chat
            var user = {
                username: userName,
            };
            const addUser = {
                method: "post",
                url: `https://api.chatengine.io/chats/${chatId}/people/`,
                headers: {
                    "Project-ID": "21f51b31-abf1-4e3e-9ed4-00a1b0215871",
                    "User-Name": admin,
                    "User-Secret": admin,
                },
                data: user,
            };
            const addmember = await axios(addUser);
            const usedata = await addmember.data;
            //    console.log(usedata)

            await joinPurses(position, async (res) => {
                if (!res.hash)
                    return addToast(res.message, { appearance: "error" });
                const result = await res.wait();
                const address = await result.to;
                addToast("Successfully Joined Purse!", {
                    appearance: "success",
                });
                navigate(`/app/purse/${address}`);
            }).catch((err) => {
                // return addToast("something went wrong!", {
                //     appearance: "error",
                // });
            });
        }
    };

    useEffect(() => {
        getSinglePurseDetail();
        positionDetail();
        // eslint-disable-next-line
    }, [id,active]);

    return (
        <>
            {loading ? (
                <ViewPurseSkeleton />
            ) : (
                <main className="bg-overlay-img-light dark:bg-overlay-img bg-cover min-h-screen">
                    <section className="container flex flex-col mx-auto h-auto px-8 md:px-0 mt-12 view_purse_mobile dark:text-white-1">
                        <div className="lg:mx-36 md:mx-24 mt-2 md:mt-6">
                            <div className="flex items-center mb-2">
                                <IoIosArrowBack className="dark:text-white/80 -ml-1" />
                                <span
                                    onClick={previousPageHandler}
                                    className="text-xs cursor-pointer font-light"
                                >
                                    Go Back
                                </span>
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p className="Montserrat font-bold md:text-2xl">
                                    {shortenAddress(purseDetail.address)}
                                </p>
                                <div className="flex gap-2 items-center mb-2 mt-1">
                                    <AiOutlineShareAlt className="dark:text-white/80 -ml-1" />
                                    <button className="text-xs font-light cursor-pointer" onClick={copyToClipBoardHandler}>
                                        Invite new member
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center mb-2">
                                <span className="text-sm font-light">
                                    Purse Overview
                                </span>
                                <ImNotification className="text-white/80 -ml-1" />
                            </div>
                            <CardList purseDetail={purseDetail} />
                            <p className="font-bold Poppins text-xl sm:text-base">
                                Note:
                            </p>
                            <p className="Poppins font-light">
                                You are to deposit a collateral of{" "}
                                {`${purseDetail.collateral} CTT`} which will be
                                put in yield farming. You can withdraw this
                                collateral plus the yield to your wallet
                                immediately after everyone have gotten their
                                funds from the purse
                            </p>
                            <p className="Poppins font-light mt-5">
                                By clicking the "JOIN PURSE" button, you are
                                sending
                                {`${purseDetail.deposit_amount} CTT`} as
                                collateral and{" "}
                                {`${purseDetail.deposit_amount} CTT`} for the
                                purse amount which makes it total of{" "}
                                {`${purseDetail.contract_total_collateral_balance} CTT`}
                            </p>
                            <div className="mt-6 flex justify-between mb-12 items-center">
                                <div className="flex items-end gap-x-2">
                                    <button
                                        onClick={joinPurseHandler}
                                        disabled={
                                            currentMember === maxMembers
                                            // purseExpire
                                        }
                                        className={`${
                                            currentMember === maxMembers
                                                ? // purseExpire
                                                  "bg-slate-400"
                                                : ""
                                        } bg-gray-2 px-16 py-1 Poppins text-xs cursor-pointer rounded-md font-bold text-white-1`}
                                    >
                                        Join Purse
                                    </button>
                                    <div>
                                        <span className="block text-xs">
                                            Choose position
                                        </span>
                                        <select
                                            value={position}
                                            onChange={onInputChange}
                                            name="pos"
                                            className="dark:bg-zinc-900  outline-none py-1 px-2 border border-gray-10 rounded w-full "
                                        >
                                            {/* {Array(
                                                purseDetail?.max_member - 1 + 1
                                            )
                                                .fill()
                                                .map((_, idx) => 1 + idx)
                                                .map((num, idx) => {
                                                    return (
                                                        <option
                                                            className="bg-transparent"
                                                            key={idx}
                                                        >
                                                            {num}
                                                        </option>
                                                    );
                                                })} */}
                                                <option>Select position </option>
                                                {
                                                    filteredResult.map((num, idx) =>{
                                                        return (
                                                            <option
                                                            className="bg-transparent"
                                                            key={idx}
                                                        >
                                                            {num}
                                                        </option>
                                                        )
                                                    })
                                                }
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-baseline">
                                    {/* <p className="Poppins text-xs">Due Date</p> */}
                                    <div>
                                        {currentMember === maxMembers ? (
                                            <p className="Poppins text-rose-500 text-xs">
                                                Purse is closed!
                                            </p>
                                        ) : null
                                        // <p className="Poppins text-xs">
                                        // {purseDetail.endTime}
                                        // </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </>
    );
};

export default ViewPurse;

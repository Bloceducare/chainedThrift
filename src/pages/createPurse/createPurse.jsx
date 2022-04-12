import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowBack, IoIosHelpCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { isValidAmountValue, isPositiveInt } from "../../utils/helpers";
import "./index.scss";
import { OPEN_WALLET_MODAL } from "../../common/connectWalletModal";

const CreatePurse = () => {
    const navigate = useNavigate();
    const {active} = useWeb3React()
    const dispatch = useDispatch()

    const [data, setData] = useState({
        // token: null,
        amount: "",
        membersCount: "",
        frequency: "",
        collateral: 0,
        total: 0,
    });

    const { amount, membersCount, frequency, collateral, total } = data;

    useEffect(() => {
        if (Number(collateral) > 0 && Number(amount) > 0) {
            setData((prev) => ({
                ...prev,
                total: Number(collateral) + Number(amount),
            }));
        } else {
            setData((prev) => ({ ...prev, total: 0 }));
        }
    }, [collateral, amount]);

    useEffect(() => {
        if (amount && membersCount >= 2)
            return setData((prev) => ({
                ...prev,
                collateral: amount * (membersCount - 1),
            }));

        return setData((prev) => ({ ...prev, collateral: 0 }));
    }, [amount, membersCount]);

    const onInputChange = ({ target }) => {
        const elementName = target.name;
        const value = target.value;
        switch (elementName) {
            case "amount":
                if (value === "")
                    return setData((prev) => ({
                        ...prev,
                        amount: "",
                        collateral: "",
                    }));
                else if (isValidAmountValue(value))
                    return setData((prev) => ({ ...prev, amount: value }));
                break;

            case "members":
                if (value === "")
                    return setData((prev) => ({
                        ...prev,
                        membersCount: "",
                        collateral: "",
                    }));
                else if (isPositiveInt(value))
                    return setData((prev) => ({
                        ...prev,
                        membersCount: value,
                    }));

                break;

            case "frequency":
                if (value === "")
                    return setData((prev) => ({ ...prev, frequency: "" }));
                else if (isPositiveInt(value))
                    return setData((prev) => ({ ...prev, frequency: value }));
                break;

            default:
                break;
        }
    };

    const HandleCreatePurse = () => {
      
    }

    return (
        <main className="bg-overlay-img-light dark:bg-overlay-img bg-cover min-h-screen">
            <section className="container mx-auto px-4 sm:px-6 md:px-0 mt-12 dark:text-white-1">
                <div className="mb-2">
                    <button
                        className="align-middle font-black"
                        onClick={() => navigate(-1)}
                    >
                        <IoIosArrowBack className="inline" />
                        <span>Go back</span>
                    </button>
                </div>
                <div className="md:w-mini_large lg:w-semi_large mx-auto mt-8">
                    <h1 className="text-3xl font-black mb-4">Create Purse</h1>
                    <p className="">
                        As the purse creator, you automatically become the first
                        member of the purse, and you get to decide the amount to
                        be contributed, the frequency of the contribution, and
                        the number of members allowed in the purse
                    </p>
                    <form className="bg-white-1 dark:bg-dark-1 p-4 rounded mt-4">
                        <div className="grid gap-2 grid-cols-3 mb-6">
                            <div className="col-span-1">
                                <span className="block text-xs">
                                    <IoIosHelpCircleOutline
                                        data-tip="token to be used"
                                        className="inline text-xl"
                                    />{" "}
                                    token
                                </span>
                                <button
                                    className="text-sm bg-gray-2 text-white-1 py-2 px-4 rounded flex items-center"
                                    type="button"
                                >
                                    <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png" alt="token icon" className="w-4 h-4 mr-2" />
                                    <span>DAI</span>
                                    <RiArrowDropDownLine className="inline text-xl" />
                                </button>
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="amount"
                                    className="block text-xs"
                                >
                                    <IoIosHelpCircleOutline
                                        data-tip="amount to be contributed by each member for each round"
                                        className="inline text-xl"
                                    />{" "}
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={amount}
                                    min={0}
                                    onChange={onInputChange}
                                    className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                                />
                            </div>
                        </div>
                        <div className="grid gap-2 grid-cols-2 mb-6">
                            <div className="col-span-1">
                                <label
                                    htmlFor="members"
                                    className="block text-xs"
                                >
                                    <IoIosHelpCircleOutline
                                        data-tip="Number of members allowed in the purse. Minimum is 2"
                                        className="inline text-xl"
                                    />{" "}
                                    Members count
                                </label>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    min={2}
                                    value={membersCount}
                                    name="members"
                                    onChange={onInputChange}
                                    className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label
                                    htmlFor="frequncy"
                                    className="block text-xs"
                                >
                                    <IoIosHelpCircleOutline
                                        data-tip="Days interval between contribution rounds"
                                        className="inline text-xl"
                                    />{" "}
                                    Frequency in days
                                </label>
                                <input
                                    type="number"
                                    name="frequency"
                                    min={0}
                                    value={frequency}
                                    onChange={onInputChange}
                                    className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                                />
                            </div>
                        </div>
                        <div className="grid gap-2 grid-cols-2 mb-6">
                            <div className="col-span-1">
                                <label
                                    htmlFor="collateral"
                                    className="block text-xs"
                                >
                                    <IoIosHelpCircleOutline
                                        data-tip="the total amount required to be locked by every member of the purse, this will be deposited in a pool so you can get yields on them at the end of the purse contributions"
                                        className="inline text-xl"
                                    />{" "}
                                    Collateral
                                </label>
                                <input
                                    type="text"
                                    name="collateral"
                                    value={collateral}
                                    readOnly
                                    className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                                />
                            </div>
                            <div className="col-span-1">
                                <label
                                    htmlFor="total"
                                    className="block text-xs"
                                >
                                    <IoIosHelpCircleOutline
                                        data-tip="Contribution amount plus collateral amount. this is the total amount you are spending to create this purse"
                                        className="inline text-xl"
                                    />{" "}
                                    Total amount
                                </label>
                                <input
                                    type="text"
                                    name="total"
                                    value={total}
                                    readOnly
                                    className="bg-transparent px-2 py-1 border border-gray-10 rounded w-full"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <button
                                className="w-full block align-middle text-sm bg-gray-2 text-white-1 py-2 px-4 rounded"
                                type="button"
                                onClick={() => dispatch(OPEN_WALLET_MODAL())}
                            >
                                 {active ? "Create purse" : "Connect wallet"}
                            </button>
                        </div>
                        <ReactTooltip className="max-w-tooltip" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CreatePurse;

import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowBack, IoIosHelpCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { isValidAmountValue, isPositiveInt } from "../../utils/helpers";
import "./index.scss";
import { OPEN_WALLET_MODAL } from "../../common/connectWalletModal";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import 'rc-dropdown/assets/index.css';
import { tokensConfig } from "../../web3";
import useToken from "../../web3/hooks/useToken";
import { parseUnits } from "ethers/lib/utils";
import usePurseFactory from "../../web3/hooks/usePurseFactory";
import { useToasts } from "react-toast-notifications";
import axios from 'axios';



const CreatePurse = () => {
    const navigate = useNavigate();
    const {active, chainId,  account} = useWeb3React()
    const dispatch = useDispatch()
    const [approving, setapproving] = useState(false)
    const [creating, setCreating] = useState(false)
    const { addToast } = useToasts();


    const [data, setData] = useState({
        token: null,
        amount: "",
        membersCount: "",
        frequency: "",
        collateral: 0,
        total: 0,
        pos:1
    });
   

    const { token, amount, membersCount, frequency, collateral, total,pos } = data;

    const { symbol:tokenSymbol, decimals, getAllowance, approve} = useToken(token?.address);

    const {createPurse} = usePurseFactory()
    let error;

    
    useEffect(() => {
        // if(token) return;
        setData(prev => ({...prev, token: !!tokensConfig[chainId] ? tokensConfig[chainId][0] : null}))
    }, [chainId])

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
    }, [amount, membersCount, collateral]);

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
                case "pos":
                    if(value === "")
                    return setData((prev) => ({...prev, pos:""}))
                    else if (isPositiveInt(value))
                    return setData((prev) => ({...prev, pos:value}))
                    break;

            default:
                break;
        }
    };

    
    const onselectToken = useCallback(({key}) => {
        const tokenData = tokensConfig[chainId].find(token => token.address === key)
        setData(prev => ({...prev, token: tokenData}));
    },[setData, chainId])

    const handleCreatePurse = async () => {
        const allowance = await getAllowance();
        const totalBN = parseUnits(total.toString(), decimals);
        let  chatId;

        if(allowance.lt(totalBN)) {
            setapproving(true)
           await approve(undefined, totalBN, async (res) => {
               if(!res.hash){
                setapproving(false)
                return addToast(res.message, {appearance: "error"});
               }
               await res.wait()
               setapproving(false)
               addToast(`${total} ${tokenSymbol} token approval successfull!`, {appearance: "success"});
              
            // make server request to get or create user with username = account
              const username = account;
              const title = `Thrift ${amount} ${tokenSymbol} Members`;
              var details = {
                "username": username,
                "secret": username
              };
              const config = {
                method: 'put',
                url: 'https://api.chatengine.io/users/',
                headers: {
                    'PRIVATE-KEY': '19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1'
                },
                data : details
             }
             const user = await axios(config)
             const userData = await user.data;
             const userName = userData.username;
            //  console.log(userName)
            //  create chat
             var Chatdetails = {
              "title": title,
              "is_direct_chat": false
            };   
            const Chatconfig = {
              method: 'post',
              url: 'https://api.chatengine.io/chats/',
              headers: {  
             'Project-ID': '21f51b31-abf1-4e3e-9ed4-00a1b0215871',
             'User-Name': userName,                 
             'User-Secret': userName
            },
            data : Chatdetails
           }
          const chat = await axios(Chatconfig)
          const chatData = await chat.data;
          chatId = chatData.id;
         if(chatId !== null || chatId !== 'undefined' || chatId !== undefined){
            console.log("chatId", chatId);
            setCreating(true)
            await createPurse(
                 parseUnits(amount.toString(), decimals),
                 // parseUnits(collateral.toString(), decimals),
                 Number(membersCount),
                 Number(frequency),
                 chatId,
                 token.address,
                 pos,
                 async (res) => {
                     if(!res.hash){
                        setCreating(false)
                        return addToast(res.message, {appearance: "error"});
                     }
                     
                     const result =    await res.wait()
                     const address = await result.events[0].address
                     addToast("Purse created successfully!", {appearance: "success"});
                     navigate(`/app/purse/${address}`)
                 }
             );
         }
           }).catch(err => {
            setapproving(false)
            setCreating(false)
             return addToast("something went wrong!", {appearance: "error"});
             
            //  const deleteConfig = {
            //     method: 'delete',
            //     url: `https://api.chatengine.io/chats/${chatId}/`,
            //     headers: {
            //         'Project-ID': '21f51b31-abf1-4e3e-9ed4-00a1b0215871',
            //         'User-Name': account,
            //         'User-Secret': account
            //     },
            //  }
            //  axios(deleteConfig);
           })
        }else{

    //    create user and chatgroup   
           const username = account;
              const title = `Thrift ${amount} ${tokenSymbol} Members`;
              var details = {
                "username": username,
                "secret": username
              };
              const config = {
                method: 'put',
                url: 'https://api.chatengine.io/users/',
                headers: {
                    'PRIVATE-KEY': '19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1'
                },
                data: details
             }
             const user = await axios(config)
             const userData = await user.data;
             const userName = userData.username;
             console.log(userName)
            //  create chat
             var Chatdetails = {
              "title": title,
              "is_direct_chat": false
            };   
            const Chatconfig = {
              method: 'post',
              url: 'https://api.chatengine.io/chats/',
              headers: {  
             'Project-ID': '21f51b31-abf1-4e3e-9ed4-00a1b0215871',
             'User-Name': userName,                 
             'User-Secret': userName
            },
            data: Chatdetails
           }
          const chat = await axios(Chatconfig)
          const chatData = await chat.data;
          chatId = chatData.id;

          if(chatId !== null || chatId !== 'undefined' || chatId !== undefined){
            console.log("chatId", chatId);
            setCreating(true)
            await createPurse(
                 parseUnits(amount.toString(), decimals),
                 // parseUnits(collateral.toString(), decimals),
                 Number(membersCount),
                 Number(frequency),
                 chatId,
                 token.address,
                 pos,
                 async (res) => {
                     if(!res.hash){
                        setCreating(false)
                        return addToast(res.message, {appearance: "error"});
                     }
                     
                     const result =    await res.wait()
                     const address = await result.events[0].address
                     setCreating(false)
                     addToast("Purse created successfully!", {appearance: "success"});
                     navigate(`/app/purse/${address}`)
                 }
             );
         }     
         
         if(chatId !== null || chatId !== 'undefined' || chatId !== undefined){
            console.log("chatId", chatId);
            setCreating(true)
            await createPurse(
                 parseUnits(amount.toString(), decimals),
                 // parseUnits(collateral.toString(), decimals),
                 Number(membersCount),
                 Number(frequency),
                 chatId,
                 token.address,
                 pos,
                 async (res) => {
                     if(!res.hash){
                        setCreating(false)
                        return addToast(res.message, {appearance: "error"});
                     }
                     
                     const result =    await res.wait()
                     const address = await result.events[0].address
                     setCreating(false )
                     addToast("Purse created successfully!", {appearance: "success"});
                     navigate(`/app/purse/${address}`)
                 }
             );
         }
        }
    }


    const tokenMenu = (
        <Menu className="token_menu_class pointer" onSelect={onselectToken}>
            {tokensConfig[chainId]?.map(token => <MenuItem key={token.address}className="token_menu_item_class pointer">
                <img src={token.logoSrc} alt="token logo" className="inline w-4 h-4 mr-2" /> <span>{token.symbol}</span>
            </MenuItem>)}
        </Menu>
      );

    return (
        <main className="min-h-screen bg-cover bg-overlay-img-light dark:bg-overlay-img">
            <section className="container px-4 mx-auto mt-12 sm:px-6 md:px-0 dark:text-white-1">
                <div className="mb-2">
                    <button
                        className="font-black align-middle"
                        onClick={() => navigate(-1)}
                    >
                        <IoIosArrowBack className="inline" />
                        <span>Go back</span>
                    </button>
                </div>
                <div className="mx-auto mt-8 md:w-mini_large lg:w-semi_large purse_mobile">
                    <h1 className="mb-4 text-3xl font-black">Create Purse</h1>
                    <p className="">
                        As the purse creator, you automatically become the first
                        member of the purse, and you get to decide the amount to
                        be contributed, the frequency of the contribution, and
                        the number of members allowed in the purse
                    </p>
                    <form className="p-4 mt-4 rounded bg-white-1 dark:bg-dark-1">
                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="col-span-1">
                                <span className="block text-xs">
                                    <IoIosHelpCircleOutline
                                        data-tip="token to be used"
                                        className="inline text-xl"
                                    />{" "}
                                    token
                                </span>
                                <Dropdown
                                    trigger={['click']}
                                    overlay={tokenMenu}
                                    animation="slide-up"
                                    overlayClassName = "bg-white-1 dark:bg-dark-1"
                                    openClassName = "bg-white-1 dark:bg-dark-1"
                                >
                                    <button
                                        className="flex items-center px-4 py-2 text-sm rounded bg-gray-2 text-white-1"
                                        type="button"
                                    >
                                        {token ?
                                        <>
                                            <img src={token.logoSrc} alt="token icon" className="w-4 h-4 mr-2" />
                                            <span>{token.symbol}</span>
                                        </> :
                                        <span>Select token</span>
                                            
                                        }
                                        <RiArrowDropDownLine className="inline text-xl" />
                                    </button>
                                </Dropdown>
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
                                    className="w-full px-2 py-1 bg-transparent border rounded border-gray-10"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-6">
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
                                    className="w-full px-2 py-1 bg-transparent border rounded border-gray-10"
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
                                    className="w-full px-2 py-1 bg-transparent border rounded border-gray-10"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-6">
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
                                    className="w-full px-2 py-1 bg-transparent border rounded border-gray-10"
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
                                    className="w-full px-2 py-1 bg-transparent border rounded border-gray-10"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                        <div className="col-span-1">
                        <label
                                   htmlFor="position"
                                   className="block text-xs"
                               >
                                     <IoIosHelpCircleOutline
                                       data-tip="Order in which you want to receive thrift contribution"
                                       className="inline text-xl"
                                   />{" "}
                                   Position
                               </label>
                               <select value={pos} onChange={onInputChange} name="pos" className="w-full px-2 py-1 border rounded outline-none dark:bg-zinc-900 border-gray-10 ">
                               {
                                Array(membersCount - 1 + 1).fill().map((_, idx) => 1 + idx).map((num,idx) =>{
                                    return(
                                        <option className="bg-transparent" key={idx}>{num}</option>
                                    )
                                })
 
                               }
 
                           </select>

                        </div>
                        </div>

                        <div className="w-full">
                            <button
                                className="flex justify-center w-full px-4 py-2 text-sm align-middle rounded bg-gray-2 text-white-1"
                                type="button"
                                onClick={!active ? () => dispatch(OPEN_WALLET_MODAL()) : handleCreatePurse}
                            >
                                {approving || creating ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>: ""}
                                {!active ? "Connect wallet" : approving ? "approving.." : "Create purse"}
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

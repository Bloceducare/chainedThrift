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
import useToken from "../../../../web3/hooks/useToken";
import axios from "axios";
import PurseChat from "../../../../pages/purseChat/purseChat";
import { PeopleSettings } from "react-chat-engine";

const PurseHeader = ({ currentTab }) => {
    const { active, account } = useWeb3React();
    const [show, setShow] = useState(false);
    const [purseDetail, setPurseDetail] = useState([]);
    const [members, setMembers] = useState([])
    const [NewMembers, setNewMembers] = useState([]);
    const [accessKey, setAccessKey] = useState()
    const [chatId, setChatId] = useState()
    const { symbol: tokenSymbol } = useToken(purseDetail?.token_address);

    const { id } = useParams();
    const { getPurseData, getPurseMembers, getBentoBalance } = usePurse();

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);

    const showHandler = () => {
        setShow(!show);
    };

    const getSinglePurseDetail = async () => {
        try {
            const purseData = await getPurseData(id);
            const pursemember = await getPurseMembers(id);
            const res = await getBentoBalance();
            setMembers(pursemember)
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
    // get or create user in chart engine
    const a = id
    const elem = a.slice(0, 6);
    const title = 'Purse'+" "+elem+ " " + 'Discussion'
    var details = {
      "username": account,
       "secret": account
    };
    const getOrCreateUser = {
     method: 'put',
     url: 'https://api.chatengine.io/users/',
     headers: {
     'PRIVATE-KEY': '19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1'
     },
     data:details
    }
    axios(getOrCreateUser)
    .then(
        res=>{
            if(res.status == '200'){
            // get or create chat
             var chatdetails = {
                "usernames":members,
                "title": title,
                "is_direct_chat": false
              };
              const getOrCreateChat = {
              method: 'put',
              url: 'https://api.chatengine.io/chats/',
              headers: {
               'PRIVATE-KEY': '19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1',
               'User-Name': account,
               'User-Secret': account
              },
             data:chatdetails
             } 
             axios(getOrCreateChat)
             .then(
               result=>{
                 localStorage.setItem(`${id}`, `${result.data.id}`)
                 localStorage.setItem(`${id + 'KEY'}`, `${result.data.access_key}`)
               }
             ) 
          }
        }
    )

    
    // add members to chat
    // const cid = localStorage.getItem(`${id}`);
    // for(var i = 0; i< (members.length)-1; i++){
    //   var person = {
    //      "username":members[i + 1]
    //    };
    //    const addmembers = {
    //      method: 'post',
    //      url:`https://api.chatengine.io/chats/${cid}/people/`,
    //      headers: {
    //       'Project-ID':'21f51b31-abf1-4e3e-9ed4-00a1b0215871',
    //       'User-Name': account,
    //       'User-Secret': account
    //      },
    //     data:person
    //  } 
    //  console.log(person)
    //  axios(addmembers)
    //  .then (
    //      resu =>{
    //       console.log(resu)
    //      }
    //  ).catch(
    //      error=>{
    //          console.log(error)
    //      }
    //  )
    // }

 

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
                    </div>
                </div> 
                <div className="flex flex-col mt-7 md:mr-0">
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

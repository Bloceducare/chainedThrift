import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ImNotification } from "react-icons/im";
import { CardList } from "./component/CardList";
import usePurse from "../../web3/hooks/usePurse"
import { useParams } from "react-router-dom";
import { parseUnits,formatUnits } from "ethers/lib/utils";
import { formatDate, shortenAddress } from "../../utils";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import useToken from "../../web3/hooks/useToken";
import { useToasts } from "react-toast-notifications";
import ViewPurseSkeleton from "../../common/skeleton/viewPurse";
import axios from 'axios';

const ViewPurse = () => {
    const { addToast } = useToasts();
    const {active, account} = useWeb3React()
    const {id} = useParams()
    const {getPurseData, getPurseMembers,joinPurses} = usePurse()
    const [purseDetail, setPurseDetail] = useState([])
    const {getAllowance, approve, symbol:tokenSymbol,decimals} = useToken(purseDetail?.token_address);

    // loading will be used for skeleton loader
    const [loading, setLoading] =useState(true)
    let navigate = useNavigate();

    const previousPageHandler = () =>{
        navigate("/app/purses")
    }


        const getSinglePurseDetail = async () =>{
            try {
                const purseData = await getPurseData(id)
                const pursemember = await getPurseMembers(id)
                // To calculate the expiring date of a purse
                const time = Number(purseData.timeCreated.toString())
                const frequency = purseData.time_interval.toString()
                const frequencyMulSeconds = Number(frequency * 86400)
                const sumSecondsTotal = time + frequencyMulSeconds
                const endTime = new Date(sumSecondsTotal * 1000).toDateString();
                
         setPurseDetail({
            address: purseData.purseAddress,
            time_interval: purseData.time_interval.toString(),
            timeCreated:formatDate(purseData.timeCreated),
            deposit_amount: formatUnits(purseData.deposit_amount),
            max_member: Number(purseData.max_member_num),
            members: pursemember.length,
            collateral: formatUnits(purseData.required_collateral),
            contract_total_collateral_balance:formatUnits(purseData.contract_total_collateral_balance),
            token_address: purseData._address_of_token,
            endTime: endTime
           
            
        })
        setLoading(false)   
         } catch (error) {
           setLoading(false)
            throw error
         }
      }  
    // @condition:check if currentMember equals max_memeber, if true disable from joining purse else yunno
        const currentMember = purseDetail.members;
        const maxMembers = purseDetail.max_member;
        const endTime = new Date(purseDetail.endTime)
        const endTimeSeconds = Math.floor(endTime.getTime());
        const purseExpire = Date.now() >= endTimeSeconds
        const purseData = getPurseData(id)
        const admin = purseData.address;
        
        // console.log("col ", purseDetail?.collateral);
        // const collateral = (purseDetail.collateral)
        // console.log('i am a string',collateral);
        // const address = purseDetail?.token_address

        const joinPurseHandler = async() =>{
        if(!active)return;
        const allowance = await getAllowance()
        const collateralWei = parseUnits(purseDetail?.collateral.toString(), decimals);
        if(allowance){
            await approve(purseDetail?.address,collateralWei, async(res) =>{
                if(!res.hash)
                return addToast(res.message, {appearance: "error"});
                await res.wait()
                addToast(`${purseDetail?.collateral} ${tokenSymbol} token approval successfull!`, {appearance: "success"});
                // create user
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
                await joinPurses(collateralWei, async(res) =>{
                    if(!res.hash)
                    return addToast(res.data.message, {appearance: "error"});
                            await res.wait()
                            addToast("Successfully Joined Purse!", {appearance: "success"});
                }).catch(err =>{
                    return addToast("something went wrong!", {appearance: "error"});
                })
            })
            
        }else {
            // create user
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
            await joinPurses(collateralWei, async(res) =>{
                if(!res.hash)
                return addToast(res.message, {appearance: "error"});
                        await res.wait()
                        addToast("Successfully Joined Purse!", {appearance: "success"});
            }).catch(err =>{
            })
          }
        }

        useEffect(() =>{ 
        getSinglePurseDetail()
        // eslint-disable-next-line
        },[id])

    // import usePurse
    // use react-router to get purseId
    return (
        <>
        {loading ? <ViewPurseSkeleton/> :
        <main className="bg-overlay-img-light dark:bg-overlay-img bg-cover min-h-screen">
            <section className="container flex flex-col mx-auto h-auto px-8 md:px-0 mt-12 dark:text-white-1">
                <div className="lg:mx-36 md:mx-24 mt-2 md:mt-6">
                    <div className="flex items-center mb-2">
                        <IoIosArrowBack className="dark:text-white/80 -ml-1" />
                        <span onClick={previousPageHandler} className="text-xs cursor-pointer font-light">Go Back</span>
                    </div>
                    <div className="flex justify-between w-full mb-4">
                        <p className="Montserrat font-bold md:text-2xl">
                            {shortenAddress(purseDetail.address)}
                        </p>
                        <div className="flex gap-2 items-center mb-2 mt-1">
                            <AiOutlineShareAlt className="dark:text-white/80 -ml-1" />
                            <p className="text-xs font-light">
                                Invite new member
                            </p>
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
                        You are to deposit a collateral of {`${purseDetail.collateral} USDC`}  which will
                        be put in yield farming. You can withdraw this
                        collateral plus the yield to your wallet immediately
                        after everyone have gotten their funds from the purse
                    </p>
                    <p className="Poppins font-light mt-5">
                        By clicking the "JOIN PURSE" button, you are sending
                        { `${purseDetail.deposit_amount} USDC`} as collateral and { `${purseDetail.deposit_amount} USDC`} for the purse
                        amount which makes it total of { `${purseDetail.contract_total_collateral_balance} USDC`}
                    </p>
                    <div className="mt-6 flex justify-between mb-12 items-center">
                        <button onClick={joinPurseHandler} disabled={currentMember === maxMembers || purseExpire}  className={`${currentMember === maxMembers || purseExpire? 'bg-slate-400': ''} bg-gray-2 px-16 py-1 Poppins text-xs cursor-pointer rounded-md font-bold text-white-1`}>Join Purse</button>
                        <div className="flex gap-4 items-baseline">
                            <p className="Poppins text-xs">Due Date</p>
                            <div>
                            {currentMember === maxMembers || purseExpire? <p className="Poppins text-rose-500 text-xs">Purse is closed!</p> :<p className="Poppins text-xs">{purseDetail.endTime}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
}
    </>
    );
};


export default ViewPurse;

import React,{useEffect,useState} from 'react';
import Deposit from "./components/Deposit";
import Vote from "./components/Vote";
import usePurse from ".././../web3/hooks/usePurse";
import { useWeb3React } from "@web3-react/core";
import { useParams } from 'react-router-dom';
import { formatUnits,parseUnits } from 'ethers/lib/utils';
import {formatDate} from "../../utils/helpers";
import useToken from "../../web3/hooks/useToken"
import { useToasts } from 'react-toast-notifications';
const PurseActions = ({currentRound}) => {
  
   const {donateFunds,getPurseData,depositToBentoBox,withdrawFromBentoBox,claimDonation} =   usePurse();
   const {active} = useWeb3React()
   const id = useParams()
  //  const inputField = useRef()
  //  const voteField = useRef()
   const [purseDetail, setPurseDetail] = useState([])
   const {addToast} = useToasts()



    const {getAllowance, approve, symbol:tokenSymbol,decimals} = useToken(purseDetail?.token_address);


    // loading will be used for skeleton loader
    // eslint-disable-next-line
    const [loading, setLoading] =useState(true)

    const getSinglePurseDetail = async () =>{
      try {
          const purseData = await getPurseData(id.id)
  setPurseDetail({
      address: purseData.purseAddress,
      time_interval: purseData.time_interval.toString(),
      timeCreated:formatDate(purseData.timeCreated),
      deposit_amount: formatUnits(purseData.deposit_amount),
      max_member: Number(purseData.max_member_num),
      collateral: formatUnits(purseData.required_collateral),
      contract_total_collateral_balance:formatUnits(purseData.contract_total_collateral_balance),
      token_address: purseData._address_of_token,
      
  })
  setLoading(false)
          
      } catch (error) {
          setLoading(false)
          throw error
      }

  }
  

  useEffect(() =>{
    if(!active)return;
    getSinglePurseDetail()
    // eslint-disable-next-line
  },[id.id])

const member = currentRound.member;
   const donateToMemberHandler = async() =>{
    //  const inputData = inputField.current.value;
     const depositAmount = parseUnits(purseDetail?.deposit_amount.toString(), decimals);
     if(!active) return;
     const allowance = await getAllowance()
     if(allowance){
      await approve(purseDetail?.address,depositAmount, async(res) =>{
          if(!res.hash)
          return addToast(res.data.message, {appearance: "error"});
          await res.wait()
          addToast(`${purseDetail?.deposit_amount} ${tokenSymbol} token approval successfull!`, {appearance: "success"});

          await donateFunds(member, async(res) =>{
              if(!res.hash)
              return addToast(res.data.message, {appearance: "error"});
                      await res.wait()
                      addToast("Successfully  deposited!", {appearance: "success"});
          }).catch(err =>{
              return addToast("something went wrong!", {appearance: "error"});
          })
      })
      
  }else {
      await donateFunds(member, async(res) =>{
          if(!res.hash)
          return addToast(res.data.message, {appearance: "error"});
                  await res.wait()
                  addToast("Successfully Deposited !", {appearance: "success"});
      }).catch(err =>{
          return addToast("something went wrong!", {appearance: "error"});
      })
  }
      // pass in an address
      // give allowance && approve. 
      // if approve return success or error message

    }

    const depositFundsToBentoBox = async () =>{
      await  depositToBentoBox( async(res) =>{
        if(!res.hash) return addToast(res.data.message, {appearance:"error"})
        addToast("successfully deposit funds", {appearance: 'success'})
      }).catch(err =>{
        return addToast("something went wrong!", {appearance: "error"});
      })
    
    }

    const withdrawFundsFromBentoBox = async() =>{
      await  withdrawFromBentoBox( async(res) =>{
        if(!res.hash) return addToast(res.data.message, {appearance:"error"})
        addToast("successfully withdraw funds", {appearance: 'success'})
      }).catch(err =>{
        return addToast("something went wrong!", {appearance: "error"});
      })
    }

    const claimDonationHandler = async() =>{
      await  claimDonation( async(res) =>{
        if(!res.hash) return addToast(res.data.message, {appearance:"error"})

        addToast("successfully withdraw funds", {appearance: 'success'})
      }).catch(err =>{
        return addToast("something went wrong!", {appearance: "error"});
      })
    }

    // @notice: function to disburse funds to member

  //   const vote = async() =>{
  //   const inputData = voteField.current.value;
  //   // if(!active) return;
  //   console.log(inputData)
  //   await voteToDisburseFundsToMember(inputData, async(res) =>{
  //     if(!res.hash)
  //     return addToast(res.data.message, {appearance: "error"})
  //     await res.wait()
  //     addToast("Successfully Voted !", {appearance: "success"});
  //   }).catch(err =>{
  //     return addToast("something went wrong!", {appearance: "error"});
  // })
  //   }

  return (
    <div className="w-full   lg:flex ">
      <Deposit 
      claimDonationHandler={claimDonationHandler}
      donateToMemberHandler={donateToMemberHandler} 
      currentRound={currentRound}/>
      {/* This component has been updated to claim bentoBox functionality i.e buttons to move funs to bentobox && withdraw from bentobox */}
      <Vote 
       depositFundsToBentoBox={depositFundsToBentoBox}
       withdrawFundsFromBentoBox={withdrawFundsFromBentoBox}
       />
    </div>
  );
};

export default PurseActions;

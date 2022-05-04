import React,{useRef} from 'react';
import Deposit from "./components/Deposit";
import Vote from "./components/Vote";
import usePurse from ".././../web3/hooks/usePurse";
import { useWeb3React } from "@web3-react/core";
import { useParams } from 'react-router-dom';
const PurseActions = () => {
  
   const {donateFunds} =   usePurse();
   const {active,account} = useWeb3React()
   const id = useParams()
   console.log(id)
   const inputField = useRef()

   const donateToMemberHandler = async() =>{
     const inputData = inputField.current.value
    const donateAction = await donateFunds(inputData, async(res) =>{
      if(!active) return;


    })

   }
  return (
    <div className="w-full flex ">
      <Deposit 
      donateToMemberHandler={donateToMemberHandler} 
      inputField={inputField}/>
      <Vote  />
    </div>
  );
};

export default PurseActions;

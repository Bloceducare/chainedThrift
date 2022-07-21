import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useRef } from "react";
import { getPurseContract, getPurseFactoryContract } from "../contractFactory";
import { getRpcUrl, getChainID } from "../helpers";
import { addresses } from "../constants";

const usePurse = () => {
    const { active, library, account, chainId } = useWeb3React();
    let signer = useRef();
    let provider = useRef();
    let purseContract = useRef();
    let purseFactory = useRef();

    useEffect(() => {
        if (active) {
            signer.current = library.getSigner();
        } else {
            provider.current = new ethers.providers.JsonRpcProvider(
                getRpcUrl()
            );
        }
        // eslint-disable-next-line
    }, [active]);
    const init = useCallback((purseAddress) => {
        purseContract.current = getPurseContract(
            purseAddress,
            signer.current || provider.current
        );
    }, []);

    const Finit = useCallback((purseAddress) =>{
        purseFactory.current = getPurseFactoryContract(
            active
                ? addresses[chainId].purseFactoryAddress
                : addresses[getChainID()].purseFactoryAddress,
            signer.current || provider.current
        );
    }, [active,chainId])

    const getPurseData = useCallback(
        async (purseAddress) => {
            init(purseAddress);
            try {
                const purseDetails = await purseContract.current.purse();
                return purseDetails;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );

    const getCurrentRound = useCallback(
        async (purseAddress) => {
            init(purseAddress);
            try {
                const current = await purseContract.current.currentRoundDetails();
                return current;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );

    const getPurseMembers = useCallback(
        async (purseAddress) => {
            init(purseAddress);
            try {
                const purseMemebers =
                    await purseContract.current.purseMembers();
                return purseMemebers;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );

    const getChatId = useCallback(
        async (purseAddress) => {
            Finit(purseAddress);
            try {
                const chatId =
                    await  purseFactory.current.purseToChatId(purseAddress);
                return Number(chatId);
            } catch (err) {
                console.error(err);
            }
        },
        // eslint-disable-next-line
        [init, purseContract]
    );

    const getBentoBalance = async () => {
        if (!active) return;
        const result = await purseContract.current.bentoBox_balance();
        return result;
    };

    const getUserClaimableDeposit =useCallback(async (address,purseAddress) => {
        init(purseAddress)
        try {
            if(!active)return;
            const result = await purseContract.current.userClaimableDeposit(address);
            return result;
        } catch (error) {
         console.error(error)   
        }
       
    },[active,init]);

    const joinPurses = useCallback(
        async (position, callback) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .joinPurse(position)
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        // eslint-disable-next-line
        [account]
    );

    //     const depositToBentoBox = useCallback(
    //     async (callback) =>{
    //     if(!active) throw new Error("you are not connected");
    //     if(!purseContract.current) return;
    //     try {
    //         purseContract.current.deposit_funds_to_bentoBox()
    //         .then(callback)
    //         .catch(callback);
    //     } catch (error) {
    //         throw new Error("something went wrong")
    //     }
    //     }, [account]

    // )
    const depositToBentoBox = useCallback(
        async (callback) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .deposit_funds_to_bentoBox()
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        // eslint-disable-next-line
        [account]
    );

    const withdrawFromBentoBox = useCallback(
        async (callback) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .withdraw_funds_from_bentoBox()
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        // eslint-disable-next-line
        [account]
    );

    const claimDonation = useCallback(
        async (callback) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .claimDonations()
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        // eslint-disable-next-line
        [account]
    );

    const donateFunds = useCallback(
        async (address, callback) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .depositDonation(address)
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        // eslint-disable-next-line
        [account]
    );

    const voteToDisburseFundsToMember = useCallback(
        async (address, callback) => {
            if (!active) throw new Error("you are not connected");
            if (!purseContract.current) return;
            try {
                purseContract.current
                    .approveToClaimWithoutCompleteVotes(address)
                    .then(callback)
                    .catch(callback);
            } catch (err) {
                throw new Error("something went wrong");
            }
        },
        // eslint-disable-next-line
        [account]
    );
    // approveToClaimWithoutCompleteVotes





    const getPositionDetail = useCallback(
        async (purseAddress,address) => {
            init(purseAddress);
            try {
                const purseMemeberPosition =
                    await purseContract.current.userPosition(address);
                return purseMemeberPosition;
            } catch (err) {
                console.error(err);
            }
        },
        [init, purseContract]
    );


    const getPositionInfo =useCallback(async (purseAddress) =>{
        init(purseAddress);
        const members = await getPurseMembers(purseAddress)
        const positions = await Promise.all(members?.map(async(item) =>{
            const pos = await getPositionDetail(purseAddress,item)
            return pos
        }))

        
        const result = positions?.map((item) =>{
            return item.toString()
        })
        return result
        // eslint-disable-next-line
    },[init, purseContract])

    return {
        getPurseData,
        getPurseMembers,
        joinPurses,
        getChatId,
        donateFunds,
        voteToDisburseFundsToMember,
        depositToBentoBox,
        withdrawFromBentoBox,
        claimDonation,
        getBentoBalance,
        getCurrentRound,
        getUserClaimableDeposit,
        getPositionInfo
    };
};

export default usePurse;

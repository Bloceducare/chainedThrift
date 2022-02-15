import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from './connectors';

export const useEagerConnect = () => {
    const {acive, activate} = useWeb3React();
    const [triedEagerConnect, setTriedEagerConnect] = useState(false);

    useEffect(() => {

        injected.isAuthorized().then(isAuthorized => {
            if(isAuthorized) activate(injected);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setTriedEagerConnect(true);
        })

    }, [])

    return triedEagerConnect;
}
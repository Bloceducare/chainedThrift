import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';


const rpcUrls = {
    4: 'https://speedy-nodes-nyc.moralis.io/9d1f9e8f5fbf596688e88840/eth/rinkeby'
}

export const injected = new InjectedConnector({
    supportedChainIds: [4]
});

const walletConnect = new WalletConnectConnector({
    rpc: {
        4: rpcUrls[4],
        qrcode: true,
        pollingInterval: 8000
    }
})

export const connectorsData = [
    {
        name: 'Browser wallet',
        iconUrl: '/assets/metamask.png',
        connector: injected
    },
    {
        name: 'WalletConnect',
        iconUrl: '/assets/walletConnect.png',
        connector: walletConnect
    }
]
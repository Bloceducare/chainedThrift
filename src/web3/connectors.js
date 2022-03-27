import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { MathWallet, Metamask, SafePal, TrustWallet, WalletConnect } from '../common/svgIcons';



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
        name: 'Metamask',
        connector: injected,
        icon: Metamask
    },
    {
        name: 'Trust Wallet',
        connector: walletConnect,
        icon: TrustWallet
    },
    {
        name: 'Wallet Connect',
        connector: walletConnect,
        icon: WalletConnect
    },
    {
        name: 'SafePal',
        connector: injected,
        icon: SafePal
    },
    {
        name: 'MathWallet',
        connector: injected,
        icon: MathWallet
    },
]
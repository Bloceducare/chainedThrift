import {CONNECT, DISCONNECT} from './types'

export const connectWallet = (payload) => {
    return {
        type: CONNECT,
        payload: payload
    }
}

export const disconnectWallet = () => {
    return {
        type: DISCONNECT
    }
}
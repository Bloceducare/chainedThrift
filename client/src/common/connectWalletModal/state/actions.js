import { OPEN, CLOSE } from ".";

export const openWalletModal = () => {
    return {
        type: OPEN
    }
}

export const closeWalletModal = () => {
    return {
        type: CLOSE
    }
}
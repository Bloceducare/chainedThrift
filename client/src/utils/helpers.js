export const shortenAddress = (address) => {
    if(!address) return null
    return `${address.substr(0, 6)}...${address.substr(address.length - 4 , address.length)}`
}
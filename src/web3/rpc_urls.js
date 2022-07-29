import { getNodeUrl } from "./helpers";

const rpcUrl = getNodeUrl()
export const RPC_URL = {
    137: `https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_MORALIS_KEY}/polygon/mainnet/archive`,
    80001: rpcUrl,
    1337: "http://localhost:8545",
};

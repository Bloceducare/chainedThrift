import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-ethers';
import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            runs: 200,
            enabled: true,
          },
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: true,
    // runOnCompile: true,
    disambiguatePaths: false,
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: true,
    spacing: 2,
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/aa079d178e3c44bb8dd492c3f99bee77",
      chainId: 4,
      gas: 2100000,
      gasPrice: 5000000000,
      accounts: {
        mnemonic: "tumble please link trash alpha can boost demise lobster flame fancy number"
      }
    },
  },
  
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 0,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
  },
};

export default config;
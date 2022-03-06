import { ethers, network } from 'hardhat';
import { BigNumber } from '@ethersproject/bignumber'

export const mineNext = async (): Promise<void> => {
  await network.provider.send('evm_mine') // mine next (+1 blockheight)
}

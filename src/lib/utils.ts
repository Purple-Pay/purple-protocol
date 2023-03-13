import { ethers } from 'ethers';

import { chainIdMap, Providers, rpcMap } from '../types';

export const getProvider = (
  chainId: keyof typeof chainIdMap,
  provider?: Providers
) => {
  const currentProvider = provider
    ? provider
    : typeof window !== 'undefined'
    ? (window as any)?.ethereum
      ? chainIdMap[chainId] === Number((window as any).ethereum.networkVersion)
        ? new ethers.providers.Web3Provider((window as any).ethereum)
        : new ethers.providers.JsonRpcProvider({
            url: rpcMap[chainId],
          })
      : null
    : null;

  return currentProvider;
};

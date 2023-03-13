import { providers } from 'ethers';

import { chainIdMap, Providers } from '../types';

import { getProvider } from './utils';

/**
 *
 * @param id transaction hash of the transaction to be fetched
 * @param provider - The current provider to used to connect wallet
 * @returns Promise of ethers TransactionResponse
 */

export const getTransaction = async (
  id: string,
  chainId: keyof typeof chainIdMap,
  provider?: Providers
): Promise<providers.TransactionResponse> => {
  const currentProvider = getProvider(chainId, provider);

  const transaction = await currentProvider.getTransaction(id);

  return transaction;
};

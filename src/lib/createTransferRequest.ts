import { ethers, providers } from 'ethers';

import { ERC20ABI } from '../constants/abi';
import { chainIdMap, Providers, TransferRequestURLFields } from '../types';

import { getProvider } from './utils';

/**
 *
 * @param transferRequest - The transfer request object of interface `TransferRequestURLFields` to be encoded into a QR
 * @param provider - The current provider to used to connect wallet
 * @returns Promise of ethers TransactionResponse
 */

export const createTransferRequest = async (
  transferRequest: TransferRequestURLFields,
  provider?: Providers
): Promise<providers.TransactionResponse> => {
  const currentProvider = getProvider(transferRequest.chainId, provider);

  if (transferRequest.tokenAddress) {
    const contract = new ethers.Contract(
      transferRequest.tokenAddress,
      ERC20ABI,
      currentProvider.getSigner()
    );

    const response = await contract.transfer(
      transferRequest.recipient,
      transferRequest.amount
    );

    return response;
  }

  const signer = currentProvider.getSigner();

  const currentChainId = await signer.getChainId();

  if (currentChainId !== chainIdMap[transferRequest.chainId]) {
    throw new Error(`Switch to correct chain`);
  }

  const response = signer.sendTransaction({
    to: transferRequest.recipient,
    value: transferRequest.amount,
  });

  return response;

  // support native transfers
};

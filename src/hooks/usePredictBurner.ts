import { Signer } from 'ethers';
import { useState } from 'react';

import { createFactoryContractInstance } from '../helpers';

export const usePredictBurner = (signer: Signer, address: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const predictBurnerAddress = async (
    salt: string,
    tokenAddress: string,
    amount: number,
    receivingAddress: string
  ) => {
    try {
      setIsLoading(true);
      setError(null);

      const contract = createFactoryContractInstance(signer, address);

      const response = await contract.predictAddress(
        salt,
        tokenAddress,
        amount,
        receivingAddress
      );

      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    predictBurnerAddress,
    isLoading,
    error,
  };
};

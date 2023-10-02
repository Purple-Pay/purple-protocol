import { Signer } from 'ethers';
import { useState } from 'react';
import { useSigner } from 'wagmi';

import { createDeployerContractInstance } from '../helpers';

export const useCreateDeployer = (signer: Signer) => {
  const { data } = useSigner();

  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  const createDeployer = async (owner: string, fee: number) => {
    try {
      data;
      setIsCreating(true);
      setError(null);

      const contract = createDeployerContractInstance(signer);

      const tx = await contract.deployPurpleProtocol(owner, fee);

      await tx.wait();

      return tx;
    } catch (error) {
      console.error(error);
    } finally {
      setIsCreating(false);
    }
  };

  return { createDeployer, isLoading: isCreating, error };
};

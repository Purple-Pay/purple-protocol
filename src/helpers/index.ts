import { ethers, Signer } from 'ethers';

import DeployerABI from '../contracts/deployerABI.json';
import FactoryABI from '../contracts/factoryABI.json';

export const DEPLOYER_CONTRACT_ADDRESS = '';

export const createContractInstance =
  (signer: Signer) => (contractAddress: string) => (abi: any[]) =>
    new ethers.Contract(contractAddress, abi, signer);

export const createDeployerContractInstance = (signer: Signer) => {
  const createContract = createContractInstance(signer)(
    DEPLOYER_CONTRACT_ADDRESS
  )(DeployerABI);

  return createContract;
};

export const createFactoryContractInstance = (
  signer: Signer,
  address: string
) => {
  const createContract = createContractInstance(signer)(address)(FactoryABI);

  return createContract;
};

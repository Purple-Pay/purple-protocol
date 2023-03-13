import { providers } from 'ethers';

export type allowedChains = 'polygon' | 'mumbai' | 'goerli' | 'mainnet';

export const chainIdMap: Record<allowedChains, number> = {
  polygon: 137,
  mumbai: 80001,
  goerli: 5,
  mainnet: 1,
};

export type TransferRequestURLFields = {
  /** `recipient` address of the reciever */
  readonly recipient: string;
  /** `amount` to be transferred in 10^6 for ERC20 tokens and 10^8 for native tokens */
  readonly amount?: number;
  /** `tokenAddress` token address of the token being transferred */
  readonly tokenAddress?: string;
  /** `memo` redirect confirmation url which would link the payment id to the transaction hash */
  readonly redirectURL?: string;
  readonly label?: string;
  readonly message?: string;
  readonly chainId: keyof typeof chainIdMap;
};

export type Providers =
  | providers.AlchemyProvider
  | providers.AlchemyWebSocketProvider
  | providers.AnkrProvider
  | providers.CloudflareProvider
  | providers.InfuraProvider
  | providers.InfuraWebSocketProvider
  | providers.JsonRpcProvider
  | providers.JsonRpcBatchProvider
  | providers.NodesmithProvider
  | providers.PocketProvider
  | providers.StaticJsonRpcProvider
  | providers.Web3Provider
  | providers.WebSocketProvider;

export const rpcMap = {
  137: 'https://rpc-mainnet.maticvigil.com',
  80001: 'https://rpc-mumbai.maticvigil.com',
  1: 'https://polygon.llamarpc.com',
  5: 'https://eth-goerli.api.onfinality.io/public',
};

import { ETHEREUM_PROTOCOL, TRANSFER_METHOD } from '../constants';
import { TransferRequestURLFields } from '../types';

/**
 * Encode a Purple Pay transfer request URL.
 *
 * @param fields Fields to encode in the URL.
 *
 * @returns URL object
 */
export function encodeURL(fields: TransferRequestURLFields): URL {
  const url = fields.tokenAddress
    ? encodeERC20TransactionRequestURL(fields)
    : encodeNativeTransferRequestURL(fields);

  return url;
}

const encodeERC20TransactionRequestURL = ({
  recipient,
  amount,
  tokenAddress,
  chainId,
}: TransferRequestURLFields): URL => {
  const baseURL = `${ETHEREUM_PROTOCOL}${tokenAddress}/${TRANSFER_METHOD}`;

  const url = new URL(baseURL);

  url.searchParams.append('address', recipient);
  url.searchParams.append('uint256', amount.toString());
  url.searchParams.append('chain_id', chainId.toString());

  console.info(`Generated URL: ${url}`);

  return url;
};

/**
 *
 * @param param0 recipient: `recipient` address of the reciever
 * @returns URL object
 */

const encodeNativeTransferRequestURL = ({
  recipient,
  amount,
  chainId,
}: TransferRequestURLFields): URL => {
  const baseURL = `${ETHEREUM_PROTOCOL}${recipient}@${chainId}`;

  const url = new URL(baseURL);

  url.searchParams.append('value', amount.toString());

  console.info(`Generated URL: ${url}`);

  return url;
};

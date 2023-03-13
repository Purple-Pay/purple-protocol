import { ETHEREUM_PROTOCOL, TRANSFER_METHOD } from '../constants';
import { chainIdMap, TransferRequestURLFields } from '../types';

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
  redirectURL,
  label,
  message,
  chainId,
}: TransferRequestURLFields): URL => {
  const baseURL = `${ETHEREUM_PROTOCOL}${tokenAddress}@${chainIdMap[chainId]}/${TRANSFER_METHOD}`;

  const url = new URL(baseURL);

  url.searchParams.append('address', recipient);
  url.searchParams.append('uint256', amount.toString());
  url.searchParams.append('redirectURL', redirectURL);
  url.searchParams.append('label', label);
  url.searchParams.append('message', message);

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
  redirectURL,
  label,
  message,
  chainId,
}: TransferRequestURLFields): URL => {
  const baseURL = `${ETHEREUM_PROTOCOL}${recipient}@${chainIdMap[chainId]}`;

  const url = new URL(baseURL);

  url.searchParams.append('value', amount.toString());
  url.searchParams.append('label', label);
  url.searchParams.append('message', message);
  url.searchParams.append('redirectURL', redirectURL);

  return url;
};

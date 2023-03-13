## WALLET INTEGRATION

Are you a wallet provider? 
This section below describes how a wallet provider can support payment links in their wallet. It shows how to parse the payment URL and create a transaction from it.

This guide walks through an  **example**  implementation for wallet providers. The purpose of this is to make it easy for wallets to implement the protocol correctly.

----------

## 1. Set up Purple Pay

Install the packages and import them in your code.

**npm**

```
npm install @purple-pay/sdk --save

```

**yarn**

```
yarn add @purple-pay/sdk

```

## 2. Parse payment request link

As a wallet provider, you will have to parse the received URL to extract the parameters. For more information on the URL format, please see the  [specification](https://github.com/Purple-Pay/sdk/blob/main/README.md).

Parse the URL to retrieve all possible fields:
```
import { parseURL } from '@purple-pay/sdk';

/**
 * For example only
 *
 * The URL that triggers the wallet interaction; follows the Purple Pay URL scheme
 * The parameters needed to create the correct transaction is encoded within the URL
 */
const url =
    'ethereum:0x652B97Bb2980cFfF724Ff9128b58DA51DaFE26bE@1?value=0.01&label=PurplePayment&message=Thanks%20for%20the%20payment&redirectURL=https://purplepay.app/';
const { recipient, chainId, value, label, message, redirectURL } = parseURL(url);
```

Use the transaction hash and the redirectURL for all following states as per use-case.

## Deep linking

Wallet providers building for mobile or wearable devices are encouraged to register their app as a handler for the Purple Pay URL scheme  `ethereum:`.

For example, when a payment request is presented as a QR code, the payer should ideally be able to read the code using the native scanning capability of their device and have the appropriate wallet open with the transaction pre-filled.

URLs can be embedded in the environment in web pages, QR codes, NFC tags and potential new formats. To avoid inadvertent transfer of tokens, care must be taken when designing wallets to ensure that transactions cannot accidentally be triggered and sent.

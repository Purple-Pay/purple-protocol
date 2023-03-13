# Purple Pay Specification

## Summary

A standardised implementation for encoding payment requests as URLs and QRs
EIP 67 is used as a reference.

## Direct Transfer Request

Direct Transfer Request is a URL encoding scheme which can be used by a wallet to directly create and inititate a transaction

For ERC20 transfers

```
ethereum:<tokenAddress>@<chainId>/transfer
    ?uint256=<amount>
    &address=<recipient>
    &label=<label>
    &message=<message>
    &redirectURL=<redirectURL>
```

For Native transfers

```
ethereum:<recipient>@<chainId>
    ?value=<amount>
    &label=<label>
    &message=<message>
    &redirectURL=<redirectURL>
```

### Recipient

It is the address that is receiving the payment.
To receive an ERC20 token (USDC), tokenAddress field needs to be populated.

### Amount

Amount field is the amount of token to be transferred. It must be non-negative integer.
Wallet should prompt the user for amount if value is not provided.

### Token Address

tokenAddress field should contain the address of the ERC20 token being used to transfer the payment in.

### Redirect URL

redirectURL field should be a URL-encoded absolute HTTPS or ethereum: URL.

This optional query paramaeter enables wallet to URL-decode the value and display it to the user.

This parameter is needed for exchange of information between the wallet and the merchant server to receive transaction hash, payment confirmation etc.

redirectURL should be followed only if the transaction is successful.

There may be atleast two following cases that can be encoded in this parameter:

- If the redirect is a HTTPS URL then the wallet should open the URL using any browser.
- This may be a browser included in the wallet. If it is a ethereum: URL then the wallet should treat it as a new Purple Pay request.

This needs to be paired with a signature scheme to ensure integrity of the wallet making the request to the server.

### Label

label should be a URL-encoded UTF-8 string to describe the recipient of the transfer request (merchant, brand, store, application, individual).

This parameter is decoded and shown to the user by the wallet for additional context vis-a-vis the recipient/merchant

### Message

message should be a URL-encoded UTF-8 string that describes the details of the transfer request.

This may contain item details, order details, acknowledgement of transaction completion for additional context.
Collapse
message.txt
3 KB
This parameter is decoded and shown to the user by the wallet for additional context vis-a-vis the recipient/merchant

### Message

message should be a URL-encoded UTF-8 string that describes the details of the transfer request.

This may contain item details, order details, acknowledgement of transaction completion for additional context.

### Chain Id

chainId should be used to specify the chain handling the transaction.

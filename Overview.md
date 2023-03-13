Document 2: OVERVIEW.md

Overview of Payment Flows:

## Web App to Mobile Wallet:

a. Payment requests should be encoded as a URL according to the scheme mentioned in the specification.
b. The encoded URL is converted into a QR code which is shown to the customer.
c. Customer scans the QR code through a wallet supporting Purple Pay protocol and approves it.
d. The transaction is sent and confirmed by the wallet.
e. The wallet calls the redirect URL to inform about the transaction completion.
f. The merchant server discovers and verifies the transaction.

![Something](https://github.com/Abhikumar98/purple-pay-sdk/blob/main/src/images/merchant.jpeg?raw=true)

## Web App to Browser Wallet:

a. Payment request is generated directly on click of a button which is embedded into the website.
b. Browser wallet can directly process this request.
c. Customer approves the request in the browser.
d. The transaction is sent and confirmed by the wallet.
e. The wallet informs the Web App by returning transaction hash.

![Something](https://github.com/Abhikumar98/purple-pay-sdk/blob/main/src/images/webapp.jpeg?raw=true)

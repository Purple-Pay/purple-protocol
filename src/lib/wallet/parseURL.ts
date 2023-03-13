const parseURL = (walletURL: string) => {
  const url = new URL(walletURL);

  const params = new URLSearchParams(url.search);
  const redirectURL = params.get('redirectURL');

  const recipient = params.get('recipient');
  const amount = params.get('amount');
  const tokenAddress = params.get('tokenAddress');
  const label = params.get('label');
  const message = params.get('message');

  return {
    amount,
    recipient,
    tokenAddress,
    label,
    message,
    redirectURL,
  };
};

export { parseURL };

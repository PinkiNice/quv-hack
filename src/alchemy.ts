import { Network, Alchemy } from 'alchemy-sdk';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const ENV_NETWORK = 'testnet';
const ENV_ALCHEMY_API_KEY = 'WTXO3srd5WZdWf1QzY3WlwJ78ORg-V1M';

const network =
  ENV_NETWORK === 'testnet' ? Network.MATIC_MUMBAI : Network.MATIC_MAINNET;

const settings = {
  apiKey: ENV_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: network, // Replace with your network.
};

export const alchemy = new Alchemy(settings);

export const provider = alchemyProvider({ apiKey: ENV_ALCHEMY_API_KEY });

export interface IChainData {
  name: string;
  chainId: number;
  shortName: string;
  chain: string;
  network: string;
  networkId: number;
  rpc: string[];
  faucets: string[];
  explorers: { name: string; url: string; standard: string; icon?: string }[];
  infoURL: string;
  nativeCurrency?: {
    name?: string;
    symbol?: string;
    decimals?: number;
  };
}

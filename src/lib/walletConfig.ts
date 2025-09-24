
"use client";

import { defaultWagmiConfig, createWeb3Modal } from "@web3modal/wagmi/react";
import { mainnet, bsc, polygon, bscTestnet } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID!;

if (!projectId) {
  throw new Error("NEXT_PUBLIC_WALLETCONNECT_ID is missing in .env.local");
}

export const chains = [mainnet, bsc, bscTestnet, polygon];

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "Wallet Demo",
    description: "Connect wallet demo",
    url: "http://localhost:3000",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
});

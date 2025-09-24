"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useChainId, useDisconnect } from "wagmi";
import SolanaConnectButton from "../components/SolanaConnectButton";

export default function ConnectPage() {

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
 
      {isConnected ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">
            ✅ EVM Connected: {address?.slice(0, 6)}...{address?.slice(-4)} (Chain {chainId})
          </p>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-500 text-white rounded-md mt-2"
          >
            Disconnect EVM
          </button>
        </div>
      ) : (
        <button
          onClick={() => open({ view: "Connect" })}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Connect EVM Wallet
        </button>
      )}

  
      <SolanaConnectButton />
    </div>
  );
}

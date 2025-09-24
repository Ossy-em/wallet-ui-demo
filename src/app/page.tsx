"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useChainId, useDisconnect } from "wagmi";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      {isConnected ? (
        <>
          <p className="text-lg font-semibold">
            ✅ Connected to {address?.slice(0, 6)}...
            {address?.slice(-4)} on Chain {chainId}
          </p>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={() => open()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

"use client";

import React from "react";
import {
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";

export default function SolanaConnectButton() {
  return (
    <div className="flex justify-center mt-6">
      <WalletMultiButton className="!bg-purple-600 !text-white !rounded-lg !px-4 !py-2" />
    </div>
  );
}

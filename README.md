# Wallet Connect Demo

This is a small Next.js project to demo wallet integration.  
Right now it supports Ethereum, BNB Chain, Polygon and other EVM wallets through Web3Modal + wagmi.  
Solana (Phantom) support will be added next.

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/Ossy-em/wallet-ui-demo.git
   cd wallet-ui-demo

   ```

2. Install dependencies:

   npm install

3. Create a .env.local file in the root and add your WalletConnect project ID:

NEXT_PUBLIC_WALLETCONNECT_ID=your_project_id_here

4. Run the dev server:

npm run dev

Open http://localhost:3000
in your browser.

Project Structure

src/
├─ app/
│ ├─ layout.tsx # Providers (wagmi + query client)
│ └─ page.tsx # Landing page with connect button
├─ lib/
│ └─ walletConfig.ts # Wallet setup (chains + Web3Modal config)
└─ globals.css # Tailwind styles

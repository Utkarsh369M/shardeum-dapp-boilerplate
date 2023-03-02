# Shardeum-NextJS-Dapp-Boilerplate!

A Basic Boilerplate for Shardeum  devs to quickly get started with their projects using Next.js, Wagmi, and Rainbowkit.

## 📚 What is Wagmi?
Wagmi is a simple, easy to use, and powerful library for building Ethereum dApps. It's a wrapper around ethers.js, and makes it easy to send transactions, and interact with smart contracts.

## 🚀 Quick Start

```bash
git clone https://github.com/Shardeum/shardeum-dapp-boilerplate.git

npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 What's under the hood

This boilerplate uses the following open source libraries to bring you a fully functional, mobile optimized dApp:

- [next.js](https://nextjs.org/docs)
- [react.js](https://reactjs.org/)
- [wagmi](https://wagmi-xyz.vercel.app/)
- [ethers.js](https://docs.ethers.io/v5/)
- [chakra](https://chakra-ui.com/)
- [rainbowkit](https://www.rainbowkit.com/docs/introduction)

## 💎 What you get

- Connect Wallet + One wagmi hook [send a transaction] done for you! 💲
- Scalable header + mobile menu ↔️
- Mobile friendly 📱
- Examples of buttons and links 📌

## 🔌 Connectors

The boilerplate now uses [rainbowkit](https://www.rainbowkit.com/docs/introduction). They make it super easy to configure the connector, and allows you to choose chains, styling, and more. 

Change your chains and add Shardeum as a Custom Network in app.tsx:

```
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider(),
      publicProvider()
    ]
  );
```

# Enjoy 

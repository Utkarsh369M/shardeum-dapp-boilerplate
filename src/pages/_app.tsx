import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'


import { Chain } from 'wagmi/chains';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Page } from '../components/Page'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {

// <--Configure and add a Custom Network(Shardeum)--> 
// for Shardeum Liberty 2.X
  const shardeumLiberty: Chain = {
      id: 8081,
      name: "Shardeum Liberty 2.X",
      network: "Shardeum Liberty 2.X",
      nativeCurrency: {
        decimals: 18,
        name: "Shardeum",
        symbol: "SHM",
      },
      rpcUrls: {
        default: {
          http: ["https://liberty20.shardeum.org/"],
        },
      },
      blockExplorers: {
        default: {
          name: "Liberty",
          url: "https://explorer-liberty20.shardeum.org/",
        },
      },
    };

  // for Shardeum Spinax 1.X
  const shardeumSpinax: Chain = {
    id: 8082,
    name: "Shardeum Spinax 1.X",
    network: "Shardeum Spinax 1.X",
    nativeCurrency: {
      decimals: 18,
      name: "Shardeum",
      symbol: "SHM",
    },
    rpcUrls: {
      default: {
        http: ["https://sphinx.shardeum.org/"],
      },
    },
    blockExplorers: {
      default: {
        name: "Spinax",
        url: "https://explorer-sphinx.shardeum.org/",
      },
    },
  };



  const { chains, provider } = configureChains(
    [shardeumLiberty, shardeumSpinax],
    [
      alchemyProvider(),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'Shardeum Next.js Boilerplate',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ChakraProvider>
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp

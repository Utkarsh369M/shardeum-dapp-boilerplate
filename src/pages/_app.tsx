import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

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
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon],
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

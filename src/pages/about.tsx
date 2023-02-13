import type { NextPage } from 'next'

import { Heading, Flex, Text } from '@chakra-ui/layout'

const About: NextPage = () => {

  return (
    <Flex
      direction="row"
      width="100%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Flex
        width="66%"
        height="100%"
        direction="column"
        justifyContent="space-between"
        gap="3rem"
      >
          <Heading>
              About Page
          </Heading>

          <Text>
              With this boilerplate, you get a mobile friendly DApp, a few example pages, a scalable header,
              the wallet connection + one example transaction done for you🤌.

              Useful for hackathon projects, or just to get started with your own Shardeum project.
          </Text>

      </Flex>
    </Flex>
  )
}

export default About

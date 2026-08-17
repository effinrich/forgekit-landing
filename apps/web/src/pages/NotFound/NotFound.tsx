import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Seo } from '../../seo/Seo'

export function NotFound() {
  return (
    <Box bg="slate.950" minH="100vh" display="flex" alignItems="center">
      <Seo title="Page not found" description="This page doesn't exist." path="/404" noindex />
      <Container maxW="container.md" py={24} px={6}>
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} color="white">
            404
          </Heading>
          <Text color="gray.400" fontSize="lg">
            That page doesn&apos;t exist.
          </Text>
          <Button as={RouterLink} to="/" colorScheme="teal" size="md">
            Back home
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

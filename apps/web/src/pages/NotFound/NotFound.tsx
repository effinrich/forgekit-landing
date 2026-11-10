import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Seo } from '../../seo/Seo'

export function NotFound() {
  return (
    <Box bg="bg" minH="100vh" display="flex" alignItems="center">
      <Seo title="Page not found" description="This page doesn't exist." path="/404" noindex />
      <Container maxW="container.md" py={24} px={6}>
        <VStack gap={6} textAlign="center">
          <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} color="fg">
            404
          </Heading>
          <Text color="fg.muted" fontSize="lg">
            That page doesn&apos;t exist.
          </Text>
          <Button colorPalette="ember" size="md" asChild>
            <RouterLink to="/">Back home</RouterLink>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

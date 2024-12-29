import { Container, Flex, SimpleGrid, Skeleton } from "@chakra-ui/react"
import { SkeletonText } from "./ui/skeleton"

const GameDetailPageSkeleton = () => {
  return (
    <Container fluid>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        <Flex direction="column" gap="4">
          <Skeleton height="10" maxWidth="400px" />
          <SkeletonText noOfLines={3} gap="4" />
        </Flex>
        <Flex direction="column" gap="4">
          <Skeleton height="400px" />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default GameDetailPageSkeleton
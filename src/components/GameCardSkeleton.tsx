import { Card, Skeleton } from "@chakra-ui/react"
import { SkeletonText } from "./ui/skeleton"

const GameCardSkeleton = () => {
  return (
    <Card.Root overflow="hidden">
      <Skeleton height="300px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton
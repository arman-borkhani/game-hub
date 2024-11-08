import { HStack, Skeleton } from "@chakra-ui/react"

const GenreSkeleton = () => {
  return (
    <HStack width="100%">
      <Skeleton width="32px" height="32px" />
      <Skeleton width="50%" height="20px" />
    </HStack>
  )
}

export default GenreSkeleton
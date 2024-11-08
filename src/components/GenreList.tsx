import useGenre from "@/hooks/useGenre"
import getCroppedImageUrl from "@/services/image-url"
import { HStack, Image, List, Text } from "@chakra-ui/react"
import GenreSkeleton from "./GenreSkeleton"

const GenreList = () => {
  const {data, isLoading} = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List.Root variant="plain" display="flex" flexDir="column" gap={3}>
      {isLoading &&
        skeletons.map(skeleton => <List.Item key={skeleton}><GenreSkeleton /></List.Item>)}
      {data.map(genre => (
        <List.Item key={genre.id}>
          <HStack>
            <Image boxSize="32px" borderRadius={8}  src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList
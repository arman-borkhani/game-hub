import useGenre from "@/hooks/useGenre"
import getCroppedImageUrl from "@/services/image-url"
import { HStack, Image, List, Text } from "@chakra-ui/react"

const GenreList = () => {
  const {data} = useGenre();

  return (
    <List.Root variant="plain">
      {data.map(genre => (
        <List.Item key={genre.id} paddingY="5px">
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
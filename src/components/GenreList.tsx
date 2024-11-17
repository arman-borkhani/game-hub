import useGenre, { Genre } from "@/hooks/useGenre"
import getCroppedImageUrl from "@/services/image-url"
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react"
import GenreSkeleton from "./GenreSkeleton"

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const {data, isLoading} = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Heading size="xl" marginBottom={3}>Genres</Heading>
      <List.Root variant="plain" display="flex" flexDir="column" gap={3}>
        {isLoading &&
          skeletons.map(skeleton => <List.Item key={skeleton}><GenreSkeleton /></List.Item>)}
        {data.map(genre => (
          <List.Item key={genre.id}>
            <HStack>
              <Image boxSize="32px" borderRadius={8}  src={getCroppedImageUrl(genre.image_background)} />
              <Link fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' } onClick={() => onSelectGenre(genre)} fontSize="lg" variant="plain">{genre.name}</Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  )
}

export default GenreList
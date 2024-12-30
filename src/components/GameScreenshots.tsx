import useScreenshots from "@/hooks/useScreenshots"
import getCroppedImageUrl from "@/services/image-url"
import { SimpleGrid } from "@chakra-ui/react"
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
  const {data, error, isLoading} = useScreenshots(gameId);

  if(isLoading) return null;

  if(error) throw error;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} gap={2}>
      {data?.results.map(file => <LazyLoadImage placeholderSrc={getCroppedImageUrl(file.image)} key={file.id} src={getCroppedImageUrl(file.image)} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots
import { GameQuery } from "@/App"
import useGenre from "@/hooks/useGenre";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react"

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const {data: genres} = useGenre();
  const {data: platforms} = usePlatforms();

  const genre = genres?.results.find(g => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" size="5xl" marginBottom={6}>{heading}</Heading>
  )
}

export default GameHeading
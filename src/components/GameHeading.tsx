import { GameQuery } from "@/App"
import useGenre from "@/hooks/useGenre"
import usePlatform from "@/hooks/usePlatform"
import { Heading } from "@chakra-ui/react"

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" size="5xl" marginBottom={6}>{heading}</Heading>
  )
}

export default GameHeading
import useGames from "@/hooks/useGames"
import { GameQuery } from "@/App"
import { Grid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
  const {data, error, isLoading} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="6">
        {isLoading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {data.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </>
  )
}

export default GameGrid
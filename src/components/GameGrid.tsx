import useGames from "@/hooks/useGames"
import { Grid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"

const GameGrid = () => {
  const {games, error} = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="6" paddingX="24px">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </>
  )
}

export default GameGrid
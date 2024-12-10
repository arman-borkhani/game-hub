import useGames from "@/hooks/useGames"
import { GameQuery } from "@/App"
import { Button, Grid } from "@chakra-ui/react"
import { Alert } from "@/components/ui/alert"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import React from "react"

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
  const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Alert status="error" title={error.message}></Alert>

  return (
    <>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="6">
        {isLoading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => 
          <React.Fragment key={index}>
            {page.results.map(game => <GameCard key={game.id} game={game} />)}
          </React.Fragment>
        )}
      </Grid>
      {hasNextPage && <Button marginTop={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    </>
  )
}

export default GameGrid
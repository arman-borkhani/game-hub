import useGames from "@/hooks/useGames"
import { Grid, Spinner } from "@chakra-ui/react"
import { Alert } from "@/components/ui/alert"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"

const GameGrid = () => {
  const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Alert status="error" title={error.message}></Alert>

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0 ) || 0;

  return (
    <InfiniteScroll 
      dataLength={fetchedGamesCount} 
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="6">
        {isLoading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => 
          <React.Fragment key={index}>
            {page.results.map(game => <GameCard key={game.id} game={game} />)}
          </React.Fragment>
        )}
      </Grid>
    </InfiniteScroll>
  )
}

export default GameGrid
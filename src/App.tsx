import { useState } from "react"
import { Container, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      <Container fluid>
        <Grid templateColumns={{
          base: "1fr",
          lg: "240px 1fr"
        }} paddingY={6}>
          <GridItem hideBelow="lg" paddingRight={6}>
            <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} selectedGenreId={gameQuery.genreId} />
          </GridItem>
          <GridItem>
            <GameHeading gameQuery={gameQuery} />
            <HStack marginBottom={6}>
              <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })} selectedPlatformId={gameQuery.platformId} />
              <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} sortOrder={gameQuery.sortOrder} />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default App

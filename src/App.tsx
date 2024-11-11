import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import { Platform } from "./hooks/useGames"
import { Container, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <NavBar />
      <Container fluid>
        <Grid templateColumns={{
          base: "1fr",
          lg: "240px 1fr"
        }}>
          <GridItem hideBelow="lg" paddingRight={6}>
            <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
          </GridItem>
          <GridItem>
            <HStack marginBottom={6}>
              <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default App

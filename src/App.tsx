import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import { Container, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <NavBar />
      <Container fluid>
        <Grid templateColumns={{
          base: "1fr",
          lg: "240px 1fr"
        }}>
          <GridItem hideBelow="lg" paddingRight={6}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
          </GridItem>
          <GridItem>
            <HStack marginBottom={6}>
              <PlatformSelector />
            </HStack>
            <GameGrid selectedGenre={selectedGenre} />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default App

import { Container, Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Grid templateColumns={{
          base: "1fr",
          lg: "240px 1fr"
        }} paddingY={6}>
          <GridItem hideBelow="lg" paddingRight={6}>
            <GenreList />
          </GridItem>
          <GridItem>
            <GameHeading />
            <HStack marginBottom={6}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
            <GameGrid />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default App

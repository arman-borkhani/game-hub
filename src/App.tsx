import { Container, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Grid templateColumns={{
          base: "1fr",
          lg: "240px 1fr"
        }}>
          <GridItem hideBelow="lg" paddingRight={6}>
            <GenreList />
          </GridItem>
          <GridItem>
            <GameGrid />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default App

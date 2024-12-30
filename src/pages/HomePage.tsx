import GameGrid from "@/components/GameGrid"
import GameHeading from "@/components/GameHeading"
import GenreList from "@/components/GenreList"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"
import { Container, Grid, GridItem, HStack } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Container fluid>
    <Grid templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}>
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
  )
}

export default HomePage
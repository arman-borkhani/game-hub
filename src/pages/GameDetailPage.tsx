import ExpandableText from "@/components/ExpandableText"
import GameAttributes from "@/components/GameAttributes"
import GameScreenshots from "@/components/GameScreenshots"
import GameTrailer from "@/components/GameTrailer"
import useGame from "@/hooks/useGame"
import { Container, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if(isLoading) return <Spinner />

  if(error || !game) throw error;

  return (
    <Container fluid>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        <Flex direction="column" gap="4">
          <Heading size="4xl">{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Flex>
        <Flex direction="column" gap="4">
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default GameDetailPage
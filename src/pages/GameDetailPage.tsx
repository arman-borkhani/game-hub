import useGame from "@/hooks/useGame"
import { Container, Heading, Spinner, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if(isLoading) return <Spinner />

  if(error || !game) throw error;

  return (
    <Container fluid>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Container>
  )
}

export default GameDetailPage
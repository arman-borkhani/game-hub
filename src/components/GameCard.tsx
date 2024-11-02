import { Game } from "@/hooks/useGames"
import { Card, Image } from "@chakra-ui/react"

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard
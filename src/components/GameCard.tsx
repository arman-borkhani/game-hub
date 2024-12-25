import { Game } from "@/entities/Game"
import { Card, HStack, Image } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "@/services/image-url"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          { game.metacritic && <CriticScore score={game.metacritic} /> }
        </HStack>
        <Card.Title marginBottom={1}>
          <Link to={'/games/' + game.slug}>
            {game.name}
          </Link>
        </Card.Title>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard
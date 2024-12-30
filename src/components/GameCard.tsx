import Game from "@/entities/Game"
import { Card, HStack } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "@/services/image-url"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root overflow="hidden">
      <LazyLoadImage height={270} effect="blur" placeholderSrc={getCroppedImageUrl(game.background_image)} src={getCroppedImageUrl(game.background_image)}></LazyLoadImage>
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
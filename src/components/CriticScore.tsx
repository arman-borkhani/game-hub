import { Badge } from "@chakra-ui/react"

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorPalette={color} variant="surface" size="md" borderRadius="4px">{score}</Badge>
  )
}

export default CriticScore
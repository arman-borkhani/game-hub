import { Container, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <Container fluid>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>GameHub</Text>
      </HStack>
    </Container>
  )
}

export default NavBar
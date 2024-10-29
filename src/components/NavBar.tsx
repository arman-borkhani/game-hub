import { Container, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import DarkModeSwitch from "./DarkModeSwitch"

const NavBar = () => {
  return (
    <Container fluid>
      <HStack justifyContent="space-between">
        <HStack>
          <Image src={logo} boxSize="60px" />
          <Text>GameHub</Text>
        </HStack>
        <DarkModeSwitch />
      </HStack>
    </Container>
  )
}

export default NavBar
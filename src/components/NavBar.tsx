import { Container, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import DarkModeSwitch from "./DarkModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <Container fluid>
      <HStack gap={4} >
        <HStack flexShrink={0}>
          <Image src={logo} boxSize="60px" />
          <Text>GameHub</Text>
        </HStack>
        <SearchInput />
        <DarkModeSwitch />
      </HStack>
    </Container>
  )
}

export default NavBar
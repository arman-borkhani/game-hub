import { Box, Container, HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import DarkModeSwitch from "./DarkModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <Box borderBottomWidth="1px">
      <Container fluid>
        <HStack gap={4} paddingY={4}>
          <Image src={logo} boxSize="60px" />
          <SearchInput />
          <DarkModeSwitch />
        </HStack>
      </Container>
    </Box>
  )
}

export default NavBar
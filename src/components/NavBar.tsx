import { Box, Container, HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import DarkModeSwitch from "./DarkModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Box borderBottomWidth="1px">
      <Container fluid>
        <HStack gap={4} paddingY={4}>
          <Box flexShrink={0}>
            <Link to="/">
              <Image src={logo} boxSize="60px" />
            </Link>
          </Box>
          <SearchInput />
          <DarkModeSwitch />
        </HStack>
      </Container>
    </Box>
  )
}

export default NavBar
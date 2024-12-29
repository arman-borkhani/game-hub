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
          <Link to="/">
            <Image src={logo} boxSize="60px" />
          </Link>
          <SearchInput />
          <DarkModeSwitch />
        </HStack>
      </Container>
    </Box>
  )
}

export default NavBar
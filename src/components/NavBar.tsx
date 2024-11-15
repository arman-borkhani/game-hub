import { Container, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import DarkModeSwitch from "./DarkModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <Container fluid>
      <HStack gap={4} >
        <HStack flexShrink={0}>
          <Image src={logo} boxSize="60px" />
          <Text>GameHub</Text>
        </HStack>
        <SearchInput onSearch={onSearch} />
        <DarkModeSwitch />
      </HStack>
    </Container>
  )
}

export default NavBar
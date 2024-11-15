import { Input } from "@chakra-ui/react"
import { InputGroup } from "./ui/input-group"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Search games..." variant="subtle" />
    </InputGroup>
  )
}

export default SearchInput
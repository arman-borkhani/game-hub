import { Button } from "@/components/ui/button"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import usePlatforms from "@/hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
  const {data, error} = usePlatforms();

  if(error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Platforms
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map(platform => <MenuItem value={platform.slug} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector
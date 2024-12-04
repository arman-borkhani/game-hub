import { Button } from "@/components/ui/button"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import { Platform } from "@/hooks/useGames"
import usePlatforms from "@/hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const {data, error} = usePlatforms();

  if(error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} value={platform.slug} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector
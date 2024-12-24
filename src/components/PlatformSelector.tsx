import { Button } from "@/components/ui/button"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import usePlatform from "@/hooks/usePlatform"
import usePlatforms from "@/hooks/usePlatforms"
import useGameQueryStore from "@/store"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
  const {data, error} = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
  const selectedPlatromId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatromId);

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
        {data?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} value={platform.slug} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector
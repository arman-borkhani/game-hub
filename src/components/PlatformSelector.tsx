import { Button } from "@/components/ui/button"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import usePlatforms, { Platform } from "@/hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
  const {data, error} = usePlatforms();
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId);

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
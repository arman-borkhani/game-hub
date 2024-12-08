import { ReactNode } from "react"
import { Platform } from "@/hooks/usePlatforms"
import { HStack } from "@chakra-ui/react"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows/>,
    playstation: <FaPlaystation/>,
    xbox: <FaXbox/>,
    nintendo: <SiNintendo/>,
    mac: <FaApple/>,
    linux: <FaLinux/>,
    ios: <MdPhoneIphone/>,
    web: <BsGlobe/>,
    android: <FaAndroid/>
  }

  return (
    <HStack marginY={2} color="gray.500">
      {platforms.map(platform => <span key={platform.id}>{iconMap[platform.slug]}</span>)}
    </HStack>
  )
}

export default PlatformIconList
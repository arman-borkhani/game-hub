import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu"
import { Button } from "./ui/button"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "@/store"

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map( (order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  )
}

export default SortSelector
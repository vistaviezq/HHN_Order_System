import Home from "../pages/Home/Home"
import Room201Guest from "../pages/Room201/Room201Guest"
import Room201Cleaner from "../pages/Room201/Room201Cleaner"
import Room201Host from "../pages/Room201/Room201Host"

// 상단 header navbar 일반메뉴들
export const MENU_ITEMS = [
  {
    id: 1,
    name: "Room201Guest",
    path: "/Room201Guest",
    element: <Room201Guest />
  },
  {
    id: 2,
    name: "Room201Cleaner",
    path: "/Room201Cleaner",
    element: <Room201Cleaner />
  },
  {
    id: 3,
    name: "Room201Host",
    path: "/Room201Host",
    element: <Room201Host />
  }
]

export const PUBLIC_ROUTES = [
  ...MENU_ITEMS,
  {
    id: "home",
    path: "/",
    element: <Home />
  }
]
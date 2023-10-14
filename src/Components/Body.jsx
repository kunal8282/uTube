import { useSelector } from "react-redux"
import SideBigMenu from "./SideBigMenu"
import VideoListContainer from "./VideoListContainer"
import { Outlet } from "react-router-dom"

const Body = () => {

  const toggleMenuButton = useSelector((store) => store.app.toggleSideMenu)

  return (
    <div className="flex">
        {toggleMenuButton && <SideBigMenu />}
        <Outlet />
    </div>
  )
}

export default Body
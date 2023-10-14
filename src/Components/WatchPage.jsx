import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { hideMenu, toggleMenu } from "../utils/appSlice"
import VideoViewer from "./VideoViewer"
import { useSearchParams } from "react-router-dom"

const WatchPage = () => {

  const dispatch = useDispatch()  
  const [searchParams] = useSearchParams()

  console.log(searchParams);

  useEffect(() => {
    dispatch(hideMenu())

    return () => {
      dispatch(toggleMenu())
    }
  }, [])

  return (
    <div>
        <VideoViewer id = {searchParams.get('v')}/>
    </div>
  )
}

export default WatchPage
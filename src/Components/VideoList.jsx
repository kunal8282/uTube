import { Link } from "react-router-dom";
import { YOUTUBE_HOMEPAGE_URL } from "../utils/constant"
import useApiData from "../utils/useApiData"
import VideoCard from "./VideoCard"

const VideoList = () => {

  const [videoList, error, isLoading] = useApiData(YOUTUBE_HOMEPAGE_URL);

  
  if(error) return <>{error}</>

  return !isLoading && (
    <div className="flex flex-wrap gap-5">
      { videoList.items.map((element) =><Link key={element.id} to={`watch?v=${element.id}`}> <VideoCard {...element} /> </Link>)}
    </div>
  )
}

export default VideoList;
import { API_KEY } from "../utils/constant";
import useApiData from "../utils/useApiData";
import Avatar from '@mui/material/Avatar';

const VideoCard = ({ snippet, statistics }) => {
  const { channelTitle, channelId, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  const [channelImg, error, isLoading] = useApiData(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${API_KEY}`
  );

  return (
    <div className="max-w-xs">
      <div className="max-h-44 my-2 w-full relative">
        <img
          src={thumbnails.medium.url}
          alt=""
          className="w-full h-full rounded-lg "
        />
      </div>

      <div className="flex gap-3 my-3">
        <div>
            {
              !isLoading ? <Avatar src={channelImg?.items[0]?.snippet?.thumbnails?.default?.url} sx={{width: 36, height: 36}}/> : <div className="w-[36px] h-[36px] bg-slate-500 rounded-full"></div>
            }
        </div>

        <div className="flex-1">
          <h1 className="font-semibold">{title.length > 55 ? title.slice(0,55)+'...' : title}</h1>
          <h2 className="text-sm">{channelTitle}</h2>
          <h2 className="text-sm">
            <span>{viewCount} views</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

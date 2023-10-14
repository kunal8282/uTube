const VideoViewer = ({id}) => {
  return (
    <div className="px-7 mt-5">
      <iframe
        width="853"
        height="480"
        src={"https://www.youtube.com/embed/" + id}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default VideoViewer;

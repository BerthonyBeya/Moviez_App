import NotFound from "../NotFound/NotFound";
import "./VideoNotFound.scss";

const VideoNotFound = () => {
  return (
    <div className="video-not-found">
      <div>
        <NotFound type="video"/>
      </div>
    </div>
  );
};

export default VideoNotFound;

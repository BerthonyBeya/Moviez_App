import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoNotFound from "../VideoNotFound/VideoNotFound";
import uuid from "react-uuid";
import "./VideoGrid.scss";

//  Movie key = 03fxznugXDo

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [errorAPI, setErrorAPI] = useState(false);
  const [playVideoBox, setPlayvideoBox] = useState(false);

  // video key and title
  const [videoKey, setVideoKey] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const { id, type } = useParams();

  // width="100%"
  // height="250"
  // title -> video?.title
  // key -> video?.key
  // Display iframe

  const displayIframe = (key, title, height, width) => {
    return (
      <iframe
        key={uuid()}
        className="video-player-grid__iframe"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${key}?rel=0&vq=small`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  // Close video box
  const closeVideoBox = () => {
    setPlayvideoBox(false);
  };

  // Fetch video
  useEffect(() => {
    const fetchVideos = async () => {
      // Fetching videos
      try {
        const result = await axios(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        );
        // Adding fetched video into the state
        setVideos(result?.data?.results);

        console.log(result);
        //
      } catch (error) {
        // If the API call fails, turn off the loader and display error page
        setTimeout(() => {
          setErrorAPI(true);
        }, 1000);
      }
    };

    fetchVideos();
  }, [type, id]);

  // Update video key and title
  const videoKeyAndTitleUpdate = (key, title) => {
    setVideoKey(key);
    setVideoTitle(title);
  };

  /* console.log(videoKey); */
  /* console.log(videoKey);
  console.log(videoTitle); */

  return (
    <>
      {/* PlayVideoBox displays the video */}
      {playVideoBox && (
        <div className="video-container-overlay" onClick={closeVideoBox}>
          {displayIframe(500, "60%", videoKey, videoTitle)}
        </div>
      )}

      <Navbar />
      <div className="video-container">
        {errorAPI && <VideoNotFound />}

        {!errorAPI && videos?.length === 0 && <VideoNotFound />}

        {!errorAPI && videos?.length > 0 && (
          <div className="video-player-grid">
            {videos?.map((video, index) => {
              if (index > 5) return "";
              return (
                <div className="video-player-grid__container">
                  <div className="video-player-grid__overlay">
                    <button
                      onClick={() => {
                        setPlayvideoBox(true);
                        videoKeyAndTitleUpdate(videos?.key, videos?.title);
                      }}
                    >
                      Play Video
                    </button>
                  </div>
                  {displayIframe(video.key, video.title, 250, "100%")}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default VideoPlayer;

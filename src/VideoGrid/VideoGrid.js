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
  const [playVideoBox, setPlayvideoBox] = useState(true);

  const { id, type } = useParams();

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

        //
      } catch (error) {
        // If the API call fails, turn off the loader and display error page
        setTimeout(() => {
          setErrorAPI(true);
        }, 1000);
      }
    };

    fetchVideos();
  }, [id, type]);

  return (
    <>
      {/* PlayVideoBox displays the video */}
      {playVideoBox && (
        <div className="video-container-overlay" onClick={closeVideoBox}>
          <h1>Video Playing Now...</h1>
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
                    <button>Play Video</button>
                  </div>
                  <iframe
                    key={uuid()}
                    className="video-player-grid__iframe"
                    width="100%"
                    height="250"
                    src={`https://www.youtube.com/embed/${video?.key}?rel=0&vq=small`}
                    title={video?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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

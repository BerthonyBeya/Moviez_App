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

  const { id, type } = useParams();

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
      <Navbar />
      <div className="video-container">
        <div className="video-player-grid__overlay"></div>

        {errorAPI && <VideoNotFound />}

        {!errorAPI && videos?.length === 0 && <VideoNotFound />}

        {!errorAPI && videos?.length > 0 && (
          <div className="video-player-grid">
            {videos?.map((video, index) => {
              if (index > 5) return "";
              return (
                <iframe
                  key={uuid()}
                  className="video-player-grid__iframe"
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${video.key}?rel=0&vq=small`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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

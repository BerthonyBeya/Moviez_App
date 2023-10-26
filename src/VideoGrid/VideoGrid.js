import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoNotFound from "../VideoNotFound/VideoNotFound";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import "./VideoGrid.scss";

//  Movie key = 03fxznugXDo

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorAPI, setErrorAPI] = useState(false);

  // Fetch video
  useEffect(() => {
    const fetchVideos = async () => {
      // Fetching videos
      try {
        setLoader(true);
        const result = await axios(
          `https://api.themoviedb.org/3/movie/${"926393"}/videos?api_key=${
            process.env.REACT_APP_API_KEY
          }`
        );

        // Adding fetched video into the state
        setVideos(result?.data?.results);

        // Waiting couple 1 sec to turn the loader off
        setTimeout(() => {
          setLoader(false);
        }, 1000);

        //
      } catch (error) {
        // If the API call fails, turn off the loader and display error page
        setTimeout(() => {
          setLoader(false);
          setErrorAPI(true);
        }, 1000);
      }
    };

    fetchVideos();
  }, []);

  console.log(videos);

  return (
    <>
      <Navbar />
      <div className="video-container">
        <div className="video-player-grid__overlay"></div>
        {loader && (
          <div className="video-player-grid__loader">
            <LoaderComponent />
          </div>
        )}

        {errorAPI && <VideoNotFound />}

        {!loader && !errorAPI && (
          <div className="video-player-grid">
            {videos?.map((video, index) => {
              if (index > 5) return "";
              return (
                <iframe
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

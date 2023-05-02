import "./LoaderComponent.scss";
import ReactLoading from "react-loading";

const LoaderComponent = () => {
  return (
    <div className="laoding-container">
      <ReactLoading type="bars" color={"#42b442"} />
    </div>
  );
};
    
export default LoaderComponent;

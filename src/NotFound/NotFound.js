import "./NotFound.scss";

const NotFound = (props) => {
  return (
    <div className="not-found">
      <h1>{`${props.type} is not found!`}</h1>
    </div>
  );
};

export default NotFound;

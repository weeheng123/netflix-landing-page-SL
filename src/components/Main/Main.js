import "./Main.scss";
import MainButton from "./MainButton";

function Main() {
  return (
    <div className="main">
      <div className="content">
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
        </p>
        <MainButton buttonStyle="watch">Watch Now</MainButton>
        <MainButton buttonStyle="add">+My List</MainButton>
      </div>
    </div>
  );
}

export default Main;

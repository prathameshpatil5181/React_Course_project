import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>MY Home Page</h1>
      <p>
        Go To<Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default HomePage;

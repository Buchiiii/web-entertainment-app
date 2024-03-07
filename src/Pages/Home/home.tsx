import Recommended from "../../Components/Home/recommended";
import Trending from "../../Components/Home/trending";
import Searchbar from "../../Components/common/searchbar";


const Home = () => {
  
  return (
    <>
      <Searchbar placeholder="Search for movies or TV series" />
      <Trending />
      <Recommended />
    </>
  );
};
export default Home;

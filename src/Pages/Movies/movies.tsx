import MoviesList from "../../Components/Movies/movies-list";
import Searchbar from "../../Components/common/searchbar";

const Movies = () => {
  return (
    <>
      {" "}
      <Searchbar placeholder="Search for movies " />
      <MoviesList />
    </>
  );
};
export default Movies;

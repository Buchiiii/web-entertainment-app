import SeriesList from "../../Components/Series/series-list";
import Searchbar from "../../Components/common/searchbar";

const Series = () => {
  return (
    <>
      {" "}
      <Searchbar placeholder="Search for TV series" />
      <SeriesList />
    </>
  );
};
export default Series;

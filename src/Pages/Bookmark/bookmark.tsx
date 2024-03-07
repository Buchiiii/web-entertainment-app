import BookmarkList from "../../Components/Bookmark/bookmark-list";
import Searchbar from "../../Components/common/searchbar";

const Bookmark = () => {
  return (
    <>
      <Searchbar placeholder="Search for bookmarked shows" />
      <BookmarkList />
    </>
  );
};
export default Bookmark;

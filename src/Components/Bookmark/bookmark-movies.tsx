
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetBookmarkedQuery } from "../../redux/api/slices/show-api-slice";

const BookmarkMovies = () => {
  const input = useSelector((state: RootState) => {
    return state.input.input;
  });
  const { data } = useGetBookmarkedQuery(input);
  const movies =
    data &&
    data.filter((element) => {
      return element.category === "Movie";
    });
  return (
    <>
      {movies && movies.length > 0 ? (
        <>
          <div className="mt-4">
            <label style={{ fontSize: "25px" }} className="text-[#FFFFFF]">
              Bookmarked Movies
            </label>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-2  gap-x-5 md:grid-cols-3 lg:grid-cols-4 mb-5 mt-5">
            {movies.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ maxWidth: "280px" }}
                  className=" flex flex-col mb-5  "
                >
                  <div
                    key={index}
                    style={{ borderRadius: "20px" }}
                    className="flex flex-col "
                  >
                    <button
                      style={{
                        flex: 1,
                      }}
                      className="group h-[28px] justify-center items-center flex  "
                    >
                      <img
                        style={{ position: "relative", borderRadius: "20px" }}
                        src={element.thumbnail.regular.small}
                        alt="imageee"
                      ></img>
                      <label
                        style={{
                          cursor: "pointer",
                          borderRadius: "30px",
                          opacity: 1,
                          background: "rgba(255,255,255, 0.2)",
                          position: "absolute",
                        }}
                        className=" group-hover:flex hidden h-[48px] flex items-center justify-center w-[117px] "
                      >
                        <div className="flex   w-[80%]">
                          <img src="./assets/icon-play.svg" alt="" />
                          <div className="flex ms-4 items-center">
                            {" "}
                            <label className="text-[#FFFFFF]">Play</label>
                          </div>{" "}
                        </div>
                      </label>
                    </button>
                    <div className="h-[50px] mt-2 ps-3">
                      <div className="flex">
                        <span className="text-[#5A698F]">{element.year}</span>{" "}
                        <div className="ms-2 flex">
                          <img src=" ./assets/icon-nav-movies.svg" alt="" />
                          <label className="text-[#5A698F] ms-2">
                            {element.category}
                          </label>
                        </div>{" "}
                        <span className="text-[#5A698F] ms-2">
                          {element.rating}
                        </span>
                      </div>
                      <div>
                        <label
                          style={{ fontSize: "18px" }}
                          className="text-[#FFFFFF]"
                        >
                          {element.title}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BookmarkMovies;

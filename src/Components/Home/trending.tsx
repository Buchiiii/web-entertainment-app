import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./index.css";
import { useGetTrendingQuery } from "../../redux/api/slices/show-api-slice";

const Trending = () => {
  const input = useSelector((state: RootState) => {
    return state.input.input;
  });
  const { data } = useGetTrendingQuery();

  return (
    <>
      {input === "" ? (
        <>
          {" "}
          <div style={{}} className="mb-2 md:mb-5  mt-4 ">
            <label style={{ fontSize: "25px" }} className="text-[#FFFFFF]">
              Trending
            </label>
            <div
              style={{
                overflowX: "scroll",
                scrollbarWidth: "none",
              }}
              className="mt-5 "
            >
              <div style={{ minWidth: "min-content" }} className=" flex  ">
                {data &&
                  data.map((element, index) => {
                    return (
                      <div key={index}>
                        <button
                          key={index}
                          style={{
                            borderRadius: "20px",
                            backgroundSize: "cover",
                            backgroundImage: `url(${element.thumbnail.trending?.large})`,
                          }}
                          className="group sm:h-[180px] h-[180px] md:h-[230px] flex flex-col sm:w-[280px] w-[240px] md:w-[500px] justify-between pb-2 me-2"
                        >
                          <div className="p-4 w-full flex justify-end">
                            <div
                              style={{
                                background: "rgb(0,0,0,0.1)",
                                borderRadius: "50px",
                              }}
                              className="flex justify-center items-center h-[30px] w-[30px]"
                            >
                              {element.isBookmarked === true ? (
                                <>
                                  <img
                                    src="./assets/icon-bookmark-full.svg"
                                    alt=""
                                  />
                                </>
                              ) : (
                                <>
                                  <img
                                    src="./assets/icon-bookmark-empty.svg"
                                    alt=""
                                  />
                                </>
                              )}
                            </div>
                          </div>
                          <div className="group-hover:flex hidden w-full flex justify-center ">
                            <div
                              style={{
                                cursor: "pointer",
                                borderRadius: "30px",
                                opacity: 1,
                                background: "rgba(255,255,255, 0.2)",
                              }}
                              className=" h-[48px] flex items-center justify-center w-[117px] "
                            >
                              <div className="flex   w-[80%]">
                                <img src="./assets/icon-play.svg" alt="" />
                                <div className="flex ms-4 items-center">
                                  <label className="text-[#FFFFFF]">Play</label>
                                </div>{" "}
                              </div>
                            </div>
                          </div>

                          <div className=" mt-2 ps-3">
                            <div className="flex">
                              <span
                                style={{ fontSize: "12px" }}
                                className="text-[#FFFFFF]"
                              >
                                {element.year}
                              </span>
                              <div className="ms-2 flex">
                                {element.category === "Movie" ? (
                                  <>
                                    <img
                                      src="./assets/icon-nav-movies.svg"
                                      alt=""
                                    />
                                  </>
                                ) : (
                                  <>
                                    <img
                                      src="./assets/icon-nav-tv-series.svg"
                                      alt=""
                                    />
                                  </>
                                )}
                                <label
                                  style={{ fontSize: "12px" }}
                                  className="text-[#FFFFFF] ms-2"
                                >
                                  {element.category}
                                </label>
                              </div>
                              <span
                                style={{ fontSize: "12px" }}
                                className="text-[#FFFFFF] ms-2"
                              >
                                {element.rating}
                              </span>
                            </div>
                            <div className=" flex justify-start">
                              <label
                                style={{ fontSize: "18px" }}
                                className="text-[#FFFFFF]"
                              >
                                {element.title}
                              </label>
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Trending;

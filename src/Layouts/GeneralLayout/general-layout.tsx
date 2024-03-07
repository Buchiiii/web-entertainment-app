import { COLORS } from "../../constants/theme";

import Navigation from "../../Components/GeneralLayout/Navigation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearInput } from "../../redux/slices/input";
interface IGeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout = ({ children }: IGeneralLayoutProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openNav = () => {
    const sideNav = document.getElementById("mySideNav");
    if (sideNav) {
      sideNav.style.width = "100%";
    }
  };

  const closeNav = () => {
    const sideNav = document.getElementById("mySideNav");
    if (sideNav) {
      sideNav.style.width = "0";
    }
  };
  return (
    <div
      className="flex ps-5 pt-5"
      style={{
        scrollbarWidth: "thin",
        minHeight: "100vh",
        backgroundColor: COLORS.DarkBlue,
        overflow: "hidden",
      }}
    >
      <div
        style={{ backgroundColor: COLORS.SemiDarkBlue, borderRadius: "10px" }}
        className="hidden w-[96px] pt-5 pb-5 sm:flex flex-col justify-between h-[700px]"
      >
        <div className=" ">
          <div className=" flex justify-center ">
            <img src="./assets/logo.svg" alt="" />
          </div>
          <Navigation />
        </div>
        <div className="flex justify-center">
          <div
            style={{
              height: "40px",
              width: "40px",
            }}
          >
            <img src="./assets/image-avatar.png" alt="" />
          </div>
        </div>
      </div>
      <div
        style={{ flex: 1, overflow: "hidden" }}
        className=" flex-col ps-5 pe-5 "
      >
        <div className="sm:hidden  flex justify-end">
          <button onClick={openNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={COLORS.Red}
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          id="mySideNav"
          style={{
            height: "100%",
            position: "fixed",
            width: 0,
            top: 0,
            zIndex: 1,
            left: 0,
            overflowX: "hidden",
            transition: "0.5s",
          }}
          className="bg-[#10141E]"
        >
          <div className=" mt-5 flex justify-end">
            <button className="me-2" onClick={closeNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={COLORS.Red}
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex mt-[60px] justify-center ">
            <button
              onClick={() => {
                navigate("/home");
                dispatch(clearInput());
                closeNav()
              }}
              className=""
            >
              <img src="./assets/icon-nav-home.svg" alt="" />
            </button>
          </div>
          <div className=" flex mt-[40px] justify-center ">
            <button
              onClick={() => {
                navigate("/movies");
                dispatch(clearInput());
                closeNav()
              }}
            >
              <img src="./assets/icon-nav-movies.svg" alt="" />
            </button>
          </div>
          <div className=" flex mt-[40px] justify-center ">
            <button
              onClick={() => {
                navigate("/tv-series");
                dispatch(clearInput());
                closeNav()
              }}
            >
              <img src="./assets/icon-nav-tv-series.svg" alt="" />
            </button>
          </div>
          <div className=" flex mt-[40px] justify-center ">
            <button
              onClick={() => {
                navigate("/bookmark");
                dispatch(clearInput());
                closeNav()
              }}
            >
              <img src="./assets/icon-nav-bookmark.svg" alt="" />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GeneralLayout;

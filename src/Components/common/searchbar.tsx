import { useDispatch } from "react-redux";
import { COLORS } from "../../constants/theme";
import { handleInput } from "../../redux/slices/input";

interface ISearchbarProps {
  placeholder: string;
}
const Searchbar = ({ placeholder }: ISearchbarProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex h-[45px]">
        <div className="flex items-center ">
          <img src="./assets/icon-search.svg" alt="" />
        </div>
        <div
          style={{ flex: 1, borderColor: "#FFFFFF" }}
          className=" border-b-2 ms-5 flex "
        >
          <input
            style={{
              backgroundColor: COLORS.DarkBlue,
              outline: "none",
              fontSize: "18px",
            }}
            className="w-full  text-[#FFFFFF] flex"
            placeholder={placeholder}
            onChange={(e) => {
              dispatch(handleInput(e.target.value));
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;

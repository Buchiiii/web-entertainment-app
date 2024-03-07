import { useField } from "formik";
import { COLORS } from "../../constants/theme";

interface ITextInputProps {
  name: string;
  placeholder: string;
  type: string;
}

const TextInput = (props: ITextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div
        style={{
          borderColor:
            meta.error && meta.touched ? COLORS.Red : COLORS.GreyishBlue,
        }}
        className="flex w-full border-b-2   "
      >
        <input
          style={{
            flex: 1,
           outline: "none",
            backgroundColor: COLORS.SemiDarkBlue,
            color: "#FFFFFF",
          }}
          className={"" 
            // meta.touched && meta.error
            //   ? "w-[68%] ps-5 h-[100%] border-none"
            //   : "w-[100%] ps-5 h-[100%] border-none"
          }
          {...field}
          {...props}
        />
        {meta.touched && meta.error && (
          <div style={{maxWidth: "107.5px"}} className="flex items-center ">
            <label style={{ color: COLORS.Red }}>{meta.error}</label>
          </div>
        )}
      </div>
    </>
  );
};

export default TextInput;

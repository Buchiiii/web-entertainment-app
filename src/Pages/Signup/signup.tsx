import SignUpForm from "../../Components/Signup/signup-form";
import SignUpLabel from "../../Components/Signup/signup-label";
import { COLORS } from "../../constants/theme";

const Signup = () => {
  return (
    <>
      <div
        className="p-[30px]"
        style={{
          width:"400px",
         maxWidth: "400px",
          borderRadius: "20px",
          backgroundColor: COLORS.SemiDarkBlue,
        }}
      >
        <div>
          <SignUpLabel />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default Signup;

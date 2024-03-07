import LoginForm from "../../Components/Login/login-form";
import LoginLabel from "../../Components/Login/login-label";
import { COLORS } from "../../constants/theme";

const Login = () => {
  return (
    <>
      <div
        className="p-[30px]"
        style={{
          width: "400px",
          maxWidth: "400px",
          borderRadius: "20px",
          backgroundColor: COLORS.SemiDarkBlue,
        }}
      >
        <div>
          <LoginLabel />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;

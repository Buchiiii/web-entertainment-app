import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../common/text-input";
import { COLORS } from "../../constants/theme";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/slices/user-api-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setCredentails } from "../../redux/slices/auth-slice";
import { useEffect } from "react";

interface IInitialValues {
  email: string;
  password: string;
}
const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const initialValues: IInitialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Can't be empty"),
    password: Yup.string().required("Can't be empty"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const result = await loginUser({
              email: values.email,
              password: values.password,
            }).unwrap();

            if (result) {
              dispatch(
                setCredentails({
                  user: { id: result.user.id, email: result.user.email },
                  token: result.user.accessToken as string,
                })
              );

              navigate("/home");
            }
          } catch (err) {}
        }}
      >
        {(formikProps) => {
          return (
            <Form className="pt-[30px]">
              <div style={{ minHeight: "37px" }} className=" flex mb-5 ">
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
              </div>

              <div style={{ minHeight: "37px" }} className="flex  mb-5  ">
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div
                style={{ borderRadius: "5px" }}
                className="bg-[#FC4747] group hover:bg-[#FFFFFF] h-[48px] flex mt-[40px] "
              >
                <button
                  className="flex w-full items-center justify-center"
                  type="submit"
                >
                  <span className="text-[#FFFFFF] group-hover:text-[#161D2F]">
                    Login to your account
                  </span>
                </button>
              </div>
              <div className="flex justify-center mt-5">
                <label style={{ color: "#FFFFFF" }}>
                  Don't have an account?{" "}
                  <span style={{ color: COLORS.Red }}>
                    <Link to={"/signup"}>Sign up</Link>
                  </span>
                </label>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;

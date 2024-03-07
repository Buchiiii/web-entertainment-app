import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../common/text-input";
import { COLORS } from "../../constants/theme";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../redux/api/slices/user-api-slice";
import { toast } from "react-toastify";

interface IInitialValues {
  email: string;
  password: string;
  repeatPassword: string;
}
const SignUpForm = () => {
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const initialValues: IInitialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Can't be empty"),
    password: Yup.string().required("Can't be empty"),
    repeatPassword: Yup.string()
      .required("Can't be empty")
      .oneOf([Yup.ref("password")], "Password must match"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const response = await createUser({
              email: values.email,
              password: values.password,
            }).unwrap();
            toast.success(response.message);
            if (response) {
              navigate("/");
            }
          } catch (err) {}
        }}
      >
        {(formikProps) => {
          return (
            <Form className="pt-[30px]">
              <div style={{ minHeight: "37px" }} className="  flex mb-5 ">
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
              </div>

              <div style={{ minHeight: "37px" }} className=" flex mb-5 ">
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div style={{ minHeight: "37px" }} className="flex  mb-5 ">
                <TextInput
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
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
                    Create an account
                  </span>
                </button>
              </div>
              <div className="flex justify-center mt-5">
                <label style={{ color: "#FFFFFF" }}>
                  Already have an account?{" "}
                  <span style={{ color: COLORS.Red }}>
                    <Link to={"/"}>Login in</Link>
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

export default SignUpForm;

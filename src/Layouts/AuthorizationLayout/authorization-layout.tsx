import { COLORS } from "../../constants/theme";

interface IAuthorizationLayoutProps {
  children: React.ReactNode;
}

const AuthorizationLayout = ({ children }: IAuthorizationLayoutProps) => {
  return (
    <>
      <div
        style={{ minHeight: "100vh", backgroundColor: COLORS.DarkBlue }}
        className="flex flex-col"
      >
        <div
          style={{ minHeight: "187px " }}
          className="items-center flex justify-center"
        >
          <img src="./assets/logo.svg" alt="" />
        </div>
        <div
          style={{ minHeight: "373px " }}
          className="md:ps-0 md:ps-0 ps-2 pe-2 flex justify-center "
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthorizationLayout;

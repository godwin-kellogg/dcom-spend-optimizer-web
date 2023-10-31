/**
 * Login Component
 *
 * The `Login` component is a container component that renders the `LoginScreen` component.
 * It handles user interactions for logging in and redirecting to the dashboard after successful login.
 *
 * @returns {React.ReactNode} The `Login` component.
 */

import { useMsal } from "@azure/msal-react";
import LoginScreen from "./LoginScreen";
import { useNavigate } from "react-router-dom";
import { path } from "constants/routes";
import { useDispatch } from "react-redux";
import { authData } from "redux/reducers/auth.reducer";

const Login = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const onClickClickhere = () => {
    navigate(path);
  };

  const onClickLogin = () => {
    instance
      .loginPopup({ scopes: ["User.Read"] })
      .then((resonse) => {
        const auth:any = {
          name : resonse.account?.name,
          email : resonse.account?.username
        };
        dispatch(authData(auth));
        localStorage.setItem("authData", JSON.stringify(auth));
        navigate(path);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 const onTempRedirect = ()=>{
  const auth:any = {
    name : "Temporary User",
    email : "temoraryuser.com"
  };
  localStorage.setItem("authData", JSON.stringify(auth) );
  navigate(path);
 }
 
  return (
    <LoginScreen
      onClickClickhere={onClickClickhere}
      onClickLogin={onClickLogin}
      onTempRedirect={onTempRedirect}
    />
  );
};

export default Login;

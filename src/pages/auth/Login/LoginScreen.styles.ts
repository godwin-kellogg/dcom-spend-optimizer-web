import { logInScreenData } from "../../../constants/screensData";

export const styles = {
  container: {
    height: "100vh",
    width: "100%",
    background: `url(${logInScreenData.backgroundImage}) no-repeat center`,
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    pb: 0,
    borderRadius: 4,
  },
  logo: {
    width: "auto",
    height: "75px",
  },
  rightSideImg: {
    width: "200px",
    height: "auto",
  },
  button: {
    textTransform: "none",
    fontSize: 14,
    px: 5,
    fontWeight : 600,
    letterSpacing : "0.03125rem",
    color :"rgba(243, 212, 218, 1)"
  },
  buttonStarticon: {
    width: "14px",
    height: "auto",
    marginRight: 10,
  },
  bottomText :{
    letterSpacing : "0.03125rem",
    fontSize : "1rem",
    fontWeight : 400,
    lineHeight : "1.5rem",
    color : "rgba(34, 34, 35, 1)"
  },
};

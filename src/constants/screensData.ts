import { appRouters } from "./routes";
import applogo from "src/assets/images/Applogo.png";
import tpoimg from "src/assets/images/TPO.png";
import msoimg from "src/assets/images/MSO.png";
import image38 from "src/assets/images/image-38.png";
import patternImg from "src/assets/images/pattern.png";
import cloudImg from "src/assets/icons/cloud.png";
import watermark from "src/assets/images/watermark.png";
import notificationimg from "src/assets/icons/notification-line.png";
import questionline from "src/assets/icons/question-line.png";
import userIcon from "src/assets/icons/User-Icon.png";
import logoutIcon from "src/assets/icons/log-out.png";

export const brand = "Kelloggs";
export const brandName = "Mu-Sigma";

export const logInScreenData = {
  backgroundImage: patternImg,
  header: {
    title: "Login",
    logo: applogo,
    rightSideImg: image38,
  },
  button: {
    title: `Log in with ${brand} SSO`,
    startIcon: cloudImg,
  },
  footer: {
    text1: `Log in with your ${brand} e-mail address. If you do not have a
    ${brand} e-mail address, please enter your network ID with
    @${brand}.com at the end (i.e., abcxyz00@${brandName.toLowerCase()}.com or
    00123456@${brandName.toLowerCase()}.com).`,
    text2: " New users,",
    clickableText: "click here",
    text3: "to enroll in two-step authentication.",
  },
};
export const LandingScreenData = {
  watermark: watermark,
};
export const headerData = {
  logo: applogo,
  text: "CRUNCH LAB",
  notificationIcon: notificationimg,
  questionIcon: questionline,
  userIcon: userIcon,
  dropdown: {
    logoutIcon: logoutIcon,
    logOut: "Log Out",
  },
};

export const LandingCardsData = [
  {
    img: tpoimg,
    header: "Trade Promo Optimiser",
    subHeader: "TPO Dashboard Description",
    buttons: [
      {
        name: "Go to Dashboard",
        navigation: appRouters.tpoDashboard,
        variant: "contained",
      },
      {
        name: "Go to Optimiser",
        variant: "outlined",
        navigation: appRouters.tpoOptimiser,
      },
    ],
  },
  {
    img: msoimg,
    header: "MSO Dashboard",
    subHeader: "TPO Dashboard Description",
    buttons: [
      {
        name: "Go to Dashboard",
        variant: "contained",
        navigation: appRouters.msoDescriptive,
      },
      {
        name: "Go to Optimiser",
        variant: "outlined",
        navigation: appRouters.msoPredictive,
      },
    ],
  },
];

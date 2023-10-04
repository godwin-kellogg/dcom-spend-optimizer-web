import { appRouters } from "./routes";

export const brand = "Kelloggs";
export const brandName = "Mu-Sigma";
const brandLogo = "/assets/images/logo.png";


export const logInScreenData = {
  backgroundImage: "/assets/images/pattern.png",
  header: {
    title: "Login",
    logo: brandLogo,
    rightSideImg: "/assets/images/image-38.png",
  },
  button: {
    title: ` Log in with ${brand} SSO`,
    startIcon: "/assets/icons/cloud.png",
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
  watermark: "/assets/images/watermark.png",
};
export const headerData = {
  logo: brandLogo,
  text: "CRUNCH LAB",
  notificationIcon: "/assets/icons/notification-line.png",
  questionIcon: "/assets/icons/question-line.png",
  userIcon: "/assets/icons/User-Icon.png",
  dropdown: {
    logoutIcon: "/assets/icons/log-out.png",
    logOut: "Log Out",
  },
};


export const LandingCardsData = [
  {
    img: "/assets/images/TPO.png",
    header: "Trade Promo Optimiser",
    subHeader: "TPO Dashboard Description",
    buttons: [
      {
        name: "Go to Dashboard",
        navigation: appRouters.tpoDashboard,
        variant : "contained"
      },
      {
        name: "Go to Optimiser",
        variant: "outlined",
        navigation: appRouters.tpoOptimiser,
      },
    ],
  },
  {
    img: "/assets/images/MSO.png",
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


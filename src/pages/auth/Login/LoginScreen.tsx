/**
 * LoginScreen Component
 *
 * The `LoginScreen` component is responsible for rendering the login UI, including the login button and other relevant elements.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onClickClickhere - Callback function to handle the click event when the user clicks the "click here" link.
 * @param {Function} props.onClickLogin - Callback function to handle the click event when the user clicks the login button.
 *
 * @returns {React.ReactNode} The `LoginScreen` component.
 */

import { Box, Button, Card, Typography } from "@mui/material";
import { LoginScreenProps } from "../../../@types/components";
import { logInScreenData } from "../../../constants/screensData";
import { styles } from "./LoginScreen.styles";

const LoginScreen = ({ onClickLogin }: LoginScreenProps) => {
  return (
    <Box
      sx={styles.container}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      data-testid="login-component"
    >
      <Card sx={styles.card}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "error.light" }}
          alignItems={"center"}
          px={4}
        >
          <Box>
            <img
              src={logInScreenData.header.logo}
              alt="logo"
              style={styles.logo}
            />
            <Typography variant="h4" fontSize={28} fontWeight={700}>
              Log In
            </Typography>
          </Box>
          <Box>
            <img
              src={logInScreenData.header.rightSideImg}
              alt="logo"
              style={styles.rightSideImg}
            />
          </Box>
        </Box>
        <Box py={10} display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            size="large"
            sx={styles.button}
            onClick={onClickLogin}
          >
            <img
              src={logInScreenData.button.startIcon}
              alt="logo"
              style={styles.buttonStarticon}
            />
            {logInScreenData.button.title}
          </Button>
        </Box>
        <Box px={4} py={2} sx={styles.bottomText}>
          <Typography fontSize={14}>
            {logInScreenData.footer.text1}
          </Typography>
          <Typography mt={2} fontSize={14}>
            {logInScreenData.footer.text2} &nbsp;
            <Typography
              fontFamily={"Montserrat"}
              fontSize={14}
              component={"span"}
              color="info.main"
              sx={{ cursor: "pointer" }}
              onClick={onClickLogin}
            >
              {logInScreenData.footer.clickableText}
            </Typography>&nbsp;
            {logInScreenData.footer.text3}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginScreen;

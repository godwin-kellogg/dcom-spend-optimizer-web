/**
 * The LandingScreen component.
 *
 * Represents the landing page of the application.
 *
 * The LandingScreen component displays two images and a watermark with a link to the home page.
 *
 *
 * @returns {JSX.Element} The JSX element representing the LandingScreen.
 */

import { Box, CardMedia, Grid } from "@mui/material";
import { LandingCardsData } from "constants/screensData";
import { styles } from "./LandingScreen.styles";
import { useNavigate } from "react-router-dom";
import { Card, Typography, CardContent, CardActions } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Item } from "components/ItemPaper/ItemPaper";
import { LandingCard } from "../../../@types/components";
import MSButton from "components/MSButton/MSButton";

const LandingScreen = () => {
  return (
    <Box
      px={2}
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        height: "calc(100vh - 120px)",
      }}
      display={"flex"}
      alignItems={"center"}
    >
      <Grid container spacing={6}>
        {LandingCardsData.map((data: any) => (
          <Grid item md={6} sm={12} xs={12} key={data.header}>
            <Item radius="0.875rem">
              <Cards {...data} key={data.subHeader} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default LandingScreen;

export const Cards = ({ img, header, subHeader, buttons }: LandingCard) => {
  const navigate = useNavigate();
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        alt={header}
        image={img}
        height="280"
        width="100%"
      />
      <CardContent sx={styles.cardContent}>
        <Typography
          mt={3}
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.text}
        >
          {header}
        </Typography>
        <Typography sx={styles.subText}>{subHeader}</Typography>
      </CardContent>

      <CardActions sx={styles.cardAction}>
        {buttons.map((data, index) => (
          <MSButton
            title={data.name}
            variant={data.variant}
            key={index}
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(data.navigation)}
            sx={{ paddingTop: 1, paddingBottom: 1 }}
          />
        ))}
      </CardActions>
    </Card>
  );
};

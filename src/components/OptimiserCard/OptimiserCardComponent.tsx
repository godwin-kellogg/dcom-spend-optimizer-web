import AddIcon from "@mui/icons-material/Add";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GridViewIcon from "@mui/icons-material/GridView";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MSButton from "src/components/MSButton/MSButton";
import { TPOData } from "../../@types/components";
import { TPOChip, TPOPlanChip } from "../TPOChip/tpoChips";
import { cardStyles } from "./OptimiserComponent.styles";

export const TPOOptimiserCards = ({
  cardTitle,
  titleChip,
  titleChipColor,
  budget,
  skuVal,
  chipCategory,
  isData,
  onClickHeader,
  onClickButton,
}: TPOData) => {
  return (
    <Card sx={cardStyles.cardContainer}>
      <CardContent sx={cardStyles.cardHeader}>
        <Box onClick={onClickHeader}>{cardTitle}</Box>
        <Box>
          {isData ? (
            <TPOPlanChip color={titleChipColor} value={titleChip} />
          ) : (
            ""
          )}
        </Box>
      </CardContent>
      {isData ? (
        <>
          <CardContent sx={{ padding: 0 }}>
            <Grid container>
              <Grid xs={6} md={6} sx={cardStyles.border}>
                <Grid container padding={1}>
                  <Grid md={4}>
                    <CurrencyRupeeIcon />
                  </Grid>
                  <Grid md={8} ml={2}>
                    <Typography style={cardStyles.text1}>Budget</Typography>
                    <Typography style={cardStyles.text2}>{budget}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6} md={6} sx={cardStyles.border}>
                <Grid container padding={1}>
                  <Grid md={2}>
                    <GridViewIcon />
                  </Grid>
                  <Grid md={10} ml={2}>
                    <Typography style={cardStyles.text1}>SKU</Typography>
                    <Typography style={cardStyles.text2}>{skuVal}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={[cardStyles.border, { padding: 0 }]}>
            <Grid container pl={1} m={1}>
              <Grid xs={12} md={12} sm={12}>
                <Box mb={0.2} sx={cardStyles.text1}>
                  <img src="/assets/icons/layers.svg" alt="" />
                  <Typography component="span" sx={{ marginLeft: 2 }}>
                    Categories
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", height: "auto" }}>
                  {chipCategory.map((value: any, key: number) => (
                    <TPOChip
                      value={value.name}
                      key={key}
                      boolVal={value.value}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardActions>
        </>
      ) : (
        <NoPlanCard onClickButton={onClickButton} />
      )}
    </Card>
  );
};

export const MSOOptimiserCards = ({
  cardTitle,
  titleChip,
  titleChipColor,
  budget,
  skuVal,
  chipCategory,
  isData,
  onClickButton,
  onClickHeader,
}: TPOData) => {
  return (
    <Card sx={cardStyles.cardContainer}>
      <CardContent sx={cardStyles.cardHeader}>
        <Box onClick={onClickHeader}>{cardTitle}</Box>
        <Box>
          {isData ? (
            <TPOPlanChip color={titleChipColor} value={titleChip} />
          ) : (
            ""
          )}
        </Box>
      </CardContent>
      {isData ? (
        <>
          <CardContent sx={{ padding: 0 }}>
            <Grid container>
              <Grid xs={12} sx={cardStyles.border}>
                <Grid container padding={1}>
                  <Grid md={4} ml={1}>
                    <CurrencyRupeeIcon />
                  </Grid>
                  <Grid md={8} ml={1}>
                    <Typography style={cardStyles.text1}>Budget</Typography>
                    <Typography style={cardStyles.text2}>{budget}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={[cardStyles.border, { padding: 0 }]}>
            <Grid container pl={1} m={1}>
              <Grid xs={12} md={12} sm={12}>
                <Typography sx={cardStyles.text1}>
                  <img src="/assets/icons/layers.svg" alt="" />
                  <Typography component="span" sx={{ marginLeft: 2 }}>
                    Categories
                  </Typography>
                </Typography>
                {chipCategory.map((value: any, key: number) => (
                  <TPOChip value={value.name} key={key} boolVal={value.value} />
                ))}
              </Grid>
            </Grid>
          </CardActions>
        </>
      ) : (
        <NoPlanCard onClickButton={onClickButton} />
      )}
    </Card>
  );
};

const NoPlanCard = ({ onClickButton }: any) => {
  return (
    <CardActions sx={cardStyles.noplanContainer}>
      <Stack direction="column" padding={0}>
        <Typography align="center" sx={cardStyles.text2}>
          No Existing Plans
        </Typography>
        <Typography align="center" sx={cardStyles.noPlanText}>
          Please create a new plan to see the details here.
        </Typography>
        <Typography align="center">
          <MSButton
            startIcon={<AddIcon />}
            title="Add new plan"
            sx={{ marginTop: 2, width: "50%" }}
            onClick={onClickButton}
          />
        </Typography>
      </Stack>
    </CardActions>
  );
};

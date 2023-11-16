import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styles } from "./ProgressCard.styles";
import { CardProps } from "../../@types/components";
import { Item } from "src/components/ItemPaper/ItemPaper";
import React from "react";

export const TPOProgressCard = ({
  header,
  subHeader,
  action,
  delta,
}: CardProps) => {
  const [posDel, setDel] = React.useState<boolean>(false);
  const [isKellog, setKellog] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (delta && action) {
      setDel(parseFloat(delta) > 0);
      setKellog(action === "Kelloggs");
    }
  }, [delta]);

  return (
    <Card variant="outlined" style={styles.tpoMain}>
      <CardContent>
        <Typography style={styles.text}>{subHeader}</Typography>
        <Typography style={styles.textBig}>{header}</Typography>
      </CardContent>
      <CardActions
        sx={{
          backgroundColor: isKellog
            ? styles.kellBg
            : posDel
            ? styles.posBg
            : styles.negBg,
        }}
        style={styles.cardAction}
      >
        <Typography style={styles.actionTypography}>{action}</Typography>
        <Typography
          sx={[
            isKellog ? styles.kellText : posDel ? styles.delPos : styles.delNeg,
            styles.delFont,
          ]}
        >
          {/* {delta !== undefined
            ? delta?.startsWith("-")
              ? delta.substring(1)
              : delta
            : ""} */}
            {delta}
          <IconButton
            size="small"
            disableRipple
            sx={[
              isKellog
                ? styles.kellText
                : posDel
                ? styles.delPos
                : styles.delNeg,
              { paddingRight: 0, cursor: "auto" },
            ]}
          >
            {posDel ? (
              <ArrowUpwardIcon fontSize="small" />
            ) : (
              <ArrowDownwardIcon fontSize="small" />
            )}
          </IconButton>
        </Typography>
      </CardActions>
    </Card>
  );
};

export const MSOProgressCard = ({ header, subHeader }: CardProps) => {
  return (
    <Item radius="0.5rem">
      <Typography style={styles.text} ml={1}>
        {subHeader}
      </Typography>
      <Typography style={styles.textBig} ml={1}>
        {header}
      </Typography>
    </Item>
  );
};

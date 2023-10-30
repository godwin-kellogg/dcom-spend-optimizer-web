import { Card, CardContent, CardActions, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { cardStyles } from "./ProgressCard.styles";
import { CardProps } from "../../@types/components";
import { Item } from "components/ItemPaper/ItemPaper";

export const TPOProgressCard = ({
  header,
  subHeader,
  bgColor,
  actionLeft,
  actionRight,
  rightColor,
}: CardProps) => {
  const cardFont = {
    color: rightColor,
    fontWeight: 700,
    fontSize: 14,
  };

  return (
    <Card variant="outlined" style={cardStyles.tpoMain}>
      <CardContent>
        <Typography style={cardStyles.text}>{subHeader}</Typography>
        <Typography style={cardStyles.textBig}>{header}</Typography>
      </CardContent>
      <CardActions
        sx={{ backgroundColor: bgColor }}
        style={cardStyles.cardAction}
      >
        <Typography style={cardStyles.actionTypography}>
          {actionLeft}
        </Typography>
        <Typography sx={cardFont}>
          {actionRight}
          <ArrowUpwardIcon sx={cardFont} />
        </Typography>
      </CardActions>
    </Card>
  );
};

export const MSOProgressCard = ({ header, subHeader }: CardProps) => {
  return (
    <Item radius="0.5rem">
      <Typography style={cardStyles.text} ml={1}>{subHeader}</Typography>
      <Typography  style={cardStyles.textBig} ml={1}>{header}</Typography>
    </Item>
  );
};

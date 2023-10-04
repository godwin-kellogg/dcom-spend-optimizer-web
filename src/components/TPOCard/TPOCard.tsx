import { Card, CardContent, CardActions, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { cardStyles } from "./TPOCard.styles";
import { CardProps } from "../../@types/components";

export const CardComponent = ({
    header,
    subHeader,
    bgColor,
    actionLeft,
    actionRight,
    rightColor
}:CardProps)=>{
    const cardFont = {
        color : rightColor,
        fontWeight:700, 
        fontSize:14
    };

    
    return (
        <Card variant="outlined" style={cardStyles.cardMain}>
            <CardContent>
                <Typography style={cardStyles.text}>
                    {subHeader}
                </Typography>
                <Typography style={cardStyles.textBig}>
                    {header}
                </Typography>
            </CardContent>
            <CardActions sx={{backgroundColor : bgColor}} style={cardStyles.cardAction}>
                <Typography style={cardStyles.actionTypography}>
                    {actionLeft}
                </Typography>
                <Typography sx={cardFont}>
                    {actionRight}
                    <ArrowUpwardIcon sx={cardFont}/>
                </Typography>
            </CardActions>
        </Card>
        
    )
};




import { Item } from "components/ItemPaper/ItemPaper";
import { 
        Typography,
     } from "@mui/material";
import { styles } from "./MSOSmallCard.styles";
import { MSOCards } from "../../@types/components";

export const Cards = ({
    allocated,
    actual,
    imgUrl,
    productName
}:MSOCards)=>{
    return (
        <Item padding="0rem">
            <Typography sx={styles.cardMainText}>
                <Typography align="center" mr={1} sx={styles.cardText}>
                    {allocated}
                    <Typography sx={styles.cardTitle}>
                        Allocated
                    </Typography>
                </Typography>

                <Typography>
                    <img src={imgUrl} alt="chocos"></img>
                </Typography>

                <Typography align="center" ml={1} sx={styles.cardText}>
                    {actual}
                    <Typography sx={styles.cardTitle}>
                        Actual
                    </Typography>
                </Typography>
            </Typography>
            <Typography 
                sx={styles.product}
                align="center"
                >
                {productName}
            </Typography>
        </Item>
    )
}
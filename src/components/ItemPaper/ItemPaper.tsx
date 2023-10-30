import { styled, Paper, PaperProps } from "@mui/material";
interface ItemProps extends PaperProps {
    radius?: string | number;
    padding?:string;
    height?:string;
};
export const Item = styled(Paper)<ItemProps>(({ theme,  radius, padding, height}) => ({
    ...theme.typography.body2,
    padding : padding ? padding : theme.spacing(1),
    height: height ? height : "auto",
    boxShadow: "none",
    border: "1px solid rgba(225, 230, 239, 1)",
    borderRadius : radius? radius : "0.5rem"
}));
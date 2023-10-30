import {
  FilterAltOutlined,
  Start
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  styled
} from "@mui/material";
import "./FilterStyles.css";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export const Filter = ({ handleFilterButtonClick }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        marginRight: 1,
        height: "178px",
        width : "50px",
        marginTop: 1,
        position:"fixed",
        left : 0
      }}
    >
      <Stack direction={"column"} gap={2}>
        <IconButton
          sx={{
            mt: 1,
            color: "blue",
            cursor:"default"
          }}
          disableRipple
        >
          <FilterAltOutlined />
        </IconButton>
        <Typography
          align="center"
          sx={{ rotate: "90deg", fontSize: "1rem", fontWeight: 600 }}
        >
          Filter
        </Typography>
        <IconButton 
          sx={{ mt: 3, mb: 1 }}
          onClick={handleFilterButtonClick}
          size="small"
          disableFocusRipple
          >
          <Start />
        </IconButton>
      </Stack>
    </Box>
  );
};

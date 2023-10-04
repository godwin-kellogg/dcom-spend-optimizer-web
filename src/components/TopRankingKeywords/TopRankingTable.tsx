import {
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import { columns, rows } from "./RankingKeywords.data";

export const TopRankingTable = () => {
  return (
        <Stack direction="column" width="100%" height="auto" sx={{overflow:"auto"}}>
             <Typography component="div" sx={{padding : 2}}>
            Top Ranking Keywords
        </Typography>
        <TableContainer sx={{ maxHeight: "auto", width:"auto" }}>
            <Table size="small">
                <TableHead sx={{backgroundColor : "rgba(6, 64, 136, 1)"}}>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            style={{ 
                                color : "rgba(255, 255, 255, 1)",
                                fontWeight : 600
                            }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
            <TableBody>
                    {
                    rows.map((val, index)=>
                    <TableRow key={index}>
                        <TableCell >{val.Category}</TableCell>
                        <TableCell >{val.Keywords}</TableCell>
                        <TableCell >{val.Ranking}</TableCell>
                        <TableCell >{val.SOV}</TableCell>
                        <TableCell >{val.SOS}</TableCell>
                    </TableRow>
                    )}
            </TableBody>
          </Table>
        </TableContainer>
    </Stack>
  )
};


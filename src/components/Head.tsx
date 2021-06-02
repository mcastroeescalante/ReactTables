import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export interface HeadProps{
    title: string;
    headers : string[];
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

export const Head:React.FC<HeadProps> = ({title, headers}) =>{
    return <TableHead>
            <TableRow>
              {headers.map((_, index, array) => (
                <StyledTableCell>{index == Math.floor(array.length/2)? title : '' }</StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
                {headers.map((header) =>(
                    <StyledTableCell>{header}</StyledTableCell>
                ))}  
            </TableRow>
        </TableHead>
};
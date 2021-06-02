import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Sell } from '../model/Sell';


export interface BodyProps{
    sells : Sell[];
}

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

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


export const SellsBody:React.FC<BodyProps> = ({sells}) => {
    return <TableBody>
        {sells.map((sell)=>(
            <StyledTableRow >
              <StyledTableCell>{sell.product}</StyledTableCell>
              <StyledTableCell>{sell.customer}</StyledTableCell>
              <StyledTableCell>{sell.amount}</StyledTableCell>
            </StyledTableRow>
        ))}
    </TableBody>
};
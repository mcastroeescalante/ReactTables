import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Purchase } from '../model/Purchase';


export interface BodyProps{
    purchases : Purchase[];
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


export const PurchasesBody:React.FC<BodyProps> = ({purchases}) => {
    return <TableBody>
        {purchases.map((purchase)=>(
            <StyledTableRow >
              <StyledTableCell>{purchase.product}</StyledTableCell>
              <StyledTableCell>{purchase.provider}</StyledTableCell>
              <StyledTableCell>{purchase.amount}</StyledTableCell>
              <StyledTableCell>{purchase.state}</StyledTableCell>
            </StyledTableRow>
        ))}
    </TableBody>
};
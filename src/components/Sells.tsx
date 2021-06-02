import React from 'react';
import { Head } from './Head';
import { SellsBody } from './SellsBody';
import { Sell } from '../model/Sell';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';



export interface SellsProps{
    sells : Sell[];
}

const headerNames:string[] = ['Producto',"Cliente", "Monto"]; 

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


export const SellsTable:React.FC<SellsProps> = ({sells}) => {
    const classes = useStyles();
    const headers = headerNames;

    return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
        <Head title="Ventas" headers={headers}></Head>
        <SellsBody sells={sells}></SellsBody>
    </Table>
  </TableContainer>
};
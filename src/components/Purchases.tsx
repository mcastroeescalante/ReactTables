import React from 'react';
import { Head } from './Head';
import { Purchase } from '../model/Purchase';
import { PurchasesBody } from './PurchasesBody';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';



export interface PurchasesProps{
    purchases : Purchase[];
}

const headerNames:string[] = ['Producto',"Proveedor", "Monto", "Estado del pedido"]; 

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


export const PurchasesTable:React.FC<PurchasesProps> = ({purchases}) => {
    const classes = useStyles();
    const headers = headerNames;

    return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
        <Head title="Compras" headers={headers}></Head>
        <PurchasesBody purchases={purchases}/>
    </Table>
  </TableContainer>
};
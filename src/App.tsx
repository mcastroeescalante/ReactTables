import React from 'react';
import './App.css';
import { SellsTable} from './components/Sells';
import { PurchasesTable } from './components/Purchases';
import { Sell } from './model/Sell';
import { Purchase } from './model/Purchase';
import Container from '@material-ui/core/Container';

type MyState = {
  sells : Sell[];
  purchases: Purchase[];
}

class App extends React.Component<{}, MyState>{

  state:MyState ={
    sells:[
      {
        product: 'Laptop',
        customer: 'Jose',
        amount:125000
      }
    ],
    purchases:[
      {
        product: 'Laptop',
        provider: 'Intelec',
        amount:125000,
        state:"Recibido"
      }
    ]
  };



  render(){
    return(
      <Container >
        <SellsTable sells={this.state.sells} />
        <br />
        <PurchasesTable purchases={this.state.purchases} />
      </Container >
    )
  }

}

export default App;

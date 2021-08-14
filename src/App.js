import React, { Component } from "react";
import { Provider } from "react-redux";
import ListGroup from "./components/stocksListGroup";
import StocksChart from "./components/stocksChart";
import StockTable from "./components/stockTable";
import { getStocks } from "./fakeAPI/stocks";
import { getDates } from "./fakeAPI/dates";
import { getStokesFromStore } from "./store/stocksReducer";
import { getDatesFromStore } from "./store/datesReducer";
import store from "./store/store";
import "./styles/style.css";

store.dispatch(getStokesFromStore({ stocks: getStocks() }));
store.dispatch(getDatesFromStore({ dates: getDates() }));

class App extends Component {
  state = {
    currentStock: {},
    isMouseOverStock: false,
    showTable: false,
  };

  handleMouseOver = (stock) => {
    this.setState({ currentStock: stock, isMouseOverStock: true });
  };

  handleTable = (stock) => {
    this.setState({ currentStock: stock, showTable: true });
  };

  render() {
    const { currentStock, isMouseOverStock, showTable } = this.state;

    return (
      <Provider store={store}>
        <div>
          <div className="row">
            <div className="col-1">
              <ListGroup
                onStockOver={this.handleMouseOver}
                currentStock={currentStock}
                onShowTable={this.handleTable}
              />
            </div>
            <div className="col-7">
              <StocksChart
                currentStock={currentStock}
                onStockOver={isMouseOverStock}
              />
            </div>
            <div className="col">
              {showTable && <StockTable currentStock={currentStock} />}
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

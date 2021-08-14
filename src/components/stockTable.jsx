import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DATES, DATES_HEADER, VALUES_HEADER } from '../consts/consts';
import { InputSelector } from '../store/selector';
import { useDispatch } from 'react-redux';
import { getDatesFromStore } from '../store/datesReducer';

export default function StockTable({currentStock}) {

    

  const stockName = currentStock.name;
  const {dates} = InputSelector(DATES);
  const dispatch = useDispatch();

  useEffect(()=>{
       dispatch(getDatesFromStore());
   },[dispatch])

  // combining dates & stocks's values into array of objects
  const combineStockInfo = (values,dates) => {

      let combinedStockInfo = [];
      for(let i =0 ; i < values.length ; i++)
          combinedStockInfo.push({id:i,date:dates[i],value:values[i]});

      return combinedStockInfo;   
  }

  const stockTableInfo = combineStockInfo(currentStock.values,dates[DATES]);

  return (
    <TableContainer component={Paper}>
      <Table className="stock-table">
          <TableHead  className="table-header-stock-name"><TableRow><TableCell >{stockName}</TableCell></TableRow></TableHead>
        <TableHead>
          <TableRow>
            <TableCell>{DATES_HEADER}</TableCell>
            <TableCell>{VALUES_HEADER}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockTableInfo.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>
                {stock.date}
              </TableCell>
              <TableCell>{stock.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStokesFromStore } from '../store/stocksReducer';
import { STOCKS } from '../consts/consts';
import { InputSelector } from '../store/selector';


const ListGroup = ({onStockOver, onShowTable, currentStock}) => {

    // const {store} = useContext(ReactReduxContext);
    // const {stocks} = store.getState()["stocks"][0];

    const {stocks} = InputSelector(STOCKS);
    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(getStokesFromStore());
     },[dispatch])

    const itemStyle = "list-group-item list-group-item-action m-3"

    return (
        <div className="list-group">
                {stocks[STOCKS].map(stock=>(
                    <React.Fragment key = {stock.id} >
                        <span className = {stock ===  currentStock ? `${itemStyle} active` : itemStyle}
                             onMouseOver = {()=> onStockOver(stock)}>
                                 {stock.name}
                        </span>
                        <button className="show-table-button" onClick={()=> onShowTable(stock)}>Show Table</button>
                    </React.Fragment>
                    ))}
        </div>
    );
};

export default ListGroup;
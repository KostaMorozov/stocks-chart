import React, { useContext, useEffect } from 'react'
import { ReactReduxContext, useDispatch } from 'react-redux';
import {Line} from 'react-chartjs-2'
import { getDatesFromStore } from './../store/datesReducer';
import { DATES, BACKGROUND_COLOR_CHART, BORDER_COLOR_CHART } from '../consts/consts';

export default function StocksChart({currentStock , onStockOver}) {

    const {store} = useContext(ReactReduxContext);
    const {dates} = store.getState()[DATES][0];
    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(getDatesFromStore());
     },[dispatch])

    return (
        <div>
            {onStockOver && <Line 
            className="chart-line"
                data= {{
                    labels: dates[DATES],
                    datasets: [{
                        label: currentStock.name,
                        data: currentStock.values,
                        backgroundColor: BACKGROUND_COLOR_CHART,
                        borderColor: BORDER_COLOR_CHART,
                        borderWidth: 1
                    }]
                }}
                options= {{
                    maintainAspectRatio:false,
                    scales: {
                        yAxes: {
                            beginAtZero: true
                        }
                    }
                }}
            />}
        </div>
    )
}

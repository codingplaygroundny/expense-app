import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/configureStore'
import {addExpense} from './actions/expenses';
import {setTextFilter,setStartDate,setEndDate} from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import moment from 'moment';



import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter';

//const store=configureStore();

store.dispatch(addExpense({description:moment().subtract(10,'days').format('MMMM Do YYYY')+' -- Pay Water Bill',note:'Water',amount:123,createdAt: moment().subtract(10,'days').valueOf() }));
store.dispatch(addExpense({description: moment().subtract(5,'days').format('MMMM Do YYYY')+' -- Pay Rent',note:'Rent',amount:19000,createdAt: moment().subtract(5,'days').valueOf() }));
store.dispatch(addExpense({description:moment().format('MMMM Do YYYY')+ ' -- Pay Gas Bill',note:'Gas',amount:46,createdAt: moment().valueOf() }));
store.dispatch(setTextFilter(''))
store.dispatch(setStartDate(moment().subtract(1,'months')))
store.dispatch(setEndDate(moment().add(1,'months')))
const state=store.getState();
const visibleExpenses=getVisibleExpense(state.expenses,{text:'bill'})

console.log(visibleExpenses);

const App=()=>(
    <AppRouter />
)
const Jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(Jsx,document.getElementById('app'))


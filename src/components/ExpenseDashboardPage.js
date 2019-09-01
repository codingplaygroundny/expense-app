import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
export default (props)=>(
    <div>
        <h1>This is from Dashboard component</h1>
        
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)
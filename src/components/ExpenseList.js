import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expensesSelector from '../selectors/expenses'

export const ExpenseList=(props)=>{
    console.log(props.expenses);
    return (
        <div>
            <h1>From ExpenseList</h1>
            {expensesSelector(props.expenses,props.filters).map(expense => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })}
        </div>
    )
}
    
const mapStateToProps=(state)=>({
    expenses:state.expenses,
    filters:state.filters
})
   



export default connect(mapStateToProps)(ExpenseList);

import React from 'react';
import ExpenseForm from '../components/ExpenseForm'
import {editExpense,removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
const EditExpensePage= (props)=>{
    console.log(`edit expensePage ${props}`)
    const onSubmit=(expense)=>{
        props.dispatch(editExpense(expense.id,expense));
        props.history.push('/');
    }
    return(
        <div>          
            <ExpenseForm  onSubmit={onSubmit} expense={props.expense}/>
            <button onClick={()=>{
                props.dispatch(removeExpense({id:props.expense.id}));
                props.history.push('/');
            }}
            
            >Remove</button>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id;
    const expense=state.expenses.filter((expense)=>id===expense.id);
    return {
        expense:expense[0]
    }
}
export default connect(mapStateToProps)(EditExpensePage);
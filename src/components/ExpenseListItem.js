import React from 'react';
import {removeExpense} from '../actions/expenses'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'

const ExpenseListItem=({dispatch,id,description,amount,note,createdAt})=>(
    <div>

        <h3>{description}</h3>
        <NavLink to={`/editexpense/${id}`} className='isActiveLink' ><p>{amount} - {createdAt} - {note}</p></NavLink>
        
    </div>
);
export default connect() (ExpenseListItem);
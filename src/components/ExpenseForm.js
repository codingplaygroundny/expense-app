import React from 'react';

import moment from 'moment';
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {connect} from 'react-redux';


const now=moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        console.log(props.expense)
        this.state={
            id:props.expense?props.expense.id : 0,
            description:props.expense? props.expense.description:'',
            amount:props.expense? props.expense.amount: 0,
            createdAt:props.expense? props.expense.createdAt:moment().valueOf(),
            note:props.expense? props.expense.note:'',
            focused:false,
            error:''
        }
        console.log(this.state);
    }
    
    renderMonthElement=({month,onMonthSelect,onYearSelect})=>{
        console.log(month.months())
        return(
            <div style={{display:'flex',justifyContent:'center'}}>
                <div>
                    <select
                        value={month.month()}
                        onChange={(e) => onMonthSelect(month,e.target.value)}
                    >
                        {moment.months().map((label,value)=>(
                            <option value={value} key={value}>{label}</option>
                        ))}
                    </select>

                </div>
            </div>
        )
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState({error:'Please provide Description and Amount'})
            return;
        }else{
            this.setState({error:''})
        }
        const {error,focused,...expense}=this.state;
        this.props.onSubmit({...expense,createdAt:expense.createdAt.valueOf()})
    }
    render(){
        return(
            <div>
               {this.state.error && <h6 value='error'>{this.state.error}</h6>}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        placeholder='Description' 
                        value={this.state.description} 
                        onChange={(evt)=>{
                            this.setState({description:evt.target.value})
                        }}
                    />
                    <input 
                        type='number'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={(evt)=>{
                            const amount=evt.target.value;

                            if(amount.match(/^\d*(\.\d{0,2})?$/)){
                                this.setState({amount})
                            }
                        }}
                     />
                    <span style={{zIndex:-1000}}>

                        <SingleDatePicker 
                            date={moment(this.state.createdAt)}
                            onDateChange={(createdAt)=>{
                                if(createdAt){
                                    this.setState({createdAt:createdAt.valueOf()})
                                }
                            }}
                            focused={this.state.focused}
                            onFocusChange={({focused})=>{
                                this.setState({focused})
                            }}
                            numberOfMonths={1}
                            isOutsideRange={()=>false}
                            id='createdAt'
                            renderMonthElement={this.renderMonthElement}
                            
                        />   
                    </span>
                    <span>&nbsp;</span>          
                    <textarea style={{zIndex:1000}}
                        value={this.state.note}
                        placeholder='Note for the expense'
                        onChange={(evt)=>{
                            this.setState({note:evt.target.value})
                        }}
                    />
                    <button type='submit' >Submit</button>
                
            </form>
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//     return {expenses:state.expenses}
// }
// export default connect(mapStateToProps)(ExpenseForm);
export default ExpenseForm;
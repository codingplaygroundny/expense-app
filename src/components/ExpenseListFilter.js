import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate} from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates'
import { setEndDate,setStartDate } from "../actions/filters";





class ExpenseListFilter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            focusedInput:null,
      
        }
    }
    onChange(e){
        this.props.dispatch(setTextFilter(e.target.value))
    }
    render(){
        return (
            <div>
                <input type='text' onChange={(e)=>{ 
                   this.onChange(e);
                }}
                 value={this.props.filters.text}/>
                 <select value={this.props.filters.sortBy}   
                    onChange={(e)=>{
                        let value=e.target.value;
                        if(value==='amount'){
                            this.props.dispatch(sortByAmount());
                        }else if(value==='date'){
                            this.props.dispatch(sortByDate())
                        }
                    }}>
                     <option value='amount' >Amount</option>
                     <option value='date' >Date</option>
                 </select>
                 <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={'1'}
                    endDate={this.props.filters.endDate}
                    endDateId={'2'}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput)=>this.setState({focusedInput})}
                    onDatesChange={({startDate,endDate})=>{
                        if(endDate<startDate) return;
                        this.props.dispatch(setStartDate(startDate))
                        this.props.dispatch(setEndDate(endDate))
                    }}
                    isOutsideRange={()=>false}
                 />
            </div>
        )
    }
}

const SearchExpense=  (props)=>{
    console.log(props);
    
}
const mapStateToProps=(store)=>(
    {
        filters:store.filters
    }
)
export default connect(mapStateToProps) (ExpenseListFilter);

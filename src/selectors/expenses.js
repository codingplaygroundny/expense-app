import expenses from "../reducers/expenses";
import moment from 'moment';
//Get visible expenses

export default (expenses,{text,sortBy,startDate,endDate}) => (
    expenses.filter((expense) => {
        const startDateMatch =moment(expense.createdAt) >=startDate;
        const endDateMatch =moment(expense.createdAt)<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase())
        return textMatch;
        //return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy==='date') {
            return a.createdAt < b.createdAt ? -1 : 1
        }
        else if (sortBy==='amount') {
            return a.amount <b.amount ? -1 : 1
        }
    })
)
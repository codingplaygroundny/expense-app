//Expenses Reducer

const expensesReducerDefaultState=[];

/*
    expense={
        description:'',
        amount:0,
        note:'',
        createdAt:0
    }
*/

export default (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>(id!==action.id));
        case 'EDIT_EXPENSE':
            const expenses= state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
            return expenses;

        default: 
            return state;
    }
}
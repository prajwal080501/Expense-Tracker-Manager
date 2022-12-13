import {createSlice} from '@reduxjs/toolkit';

const initalState = {
    expenses: [],
    transactions: [],
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: initalState,
    reducers: {
        getTransactions: (state) => {
        },
    }
});

export const {getTransactions} = expenseSlice.actions;
export default expenseSlice.reducer;

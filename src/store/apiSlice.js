import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// 
const baseUrl = 'https://wandering-loss-production.up.railway.app';
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
       getCategories: builder.query({
              query: () => '/api/categories/get',
              providesTags: ['Categories'],
       }),
       getLabels: builder.query({
                query: () => '/api/transactions/labels',
                providesTags: ['transactions'],
       }),
    //    add transaction
    addTransaction: builder.mutation({
        query: (body) => ({
            url: '/api/transactions/create',
            method: 'POST',
            body: body,
        }),
        invalidatesTags: ['transactions'],
    }),

    // delete transaction
    deleteTransaction: builder.mutation({
        query: (id) => ({
            url: `/api/transactions/delete/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['transactions'],
    }),

    // get transactions
    getTransactions: builder.query({
        query: () => '/api/transactions/get',
    }),

    }),
});


export default apiSlice;

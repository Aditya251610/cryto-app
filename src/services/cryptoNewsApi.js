import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://newsapi.org';
const api_key = 'bf4b77868f5249ac8012087eda3869f3'

const createRequest = (url) => ({ url });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/v2/everything?q=${newsCategory}&apiKey=${api_key}&pageSize=${count}`),
        })
    })
});

export const{
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
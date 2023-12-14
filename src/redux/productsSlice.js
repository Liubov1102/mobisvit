import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

// export const productsApi = createApi({
//   reducerPath: "products",
//   baseQuery: axiosBaseQuery({
//     baseUrl: "https://65296c6d55b137ddc83ecbd6.mockapi.io",
//   }),
//   endpoints(build) {
//     return {
//       getProducts: build.query({
//         query: () => ({ url: "/products", method: "get" }),
//       }),
//       getProductById: build.query({
//         query: (id) => ({ url: `/products/${id}`, method: "get" }),
//       }),
//       addProduct: build.mutation({
//         query: (values) => ({
//           url: "/products",
//           method: "post",
//           body: values,
//         }),
//         invalidatesTags: ["Product"],
//         // query: (values) => ({
//         //   url: "/products",
//         //   method: "POST",
//         //   body: "values",
//         // }),
//       }),
//       mutation: build.mutation({
//         query: () => ({ url: "/mutation", method: "post" }),
//       }),
//     };
//   },
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    // baseQuery: axiosBaseQuery({
    baseUrl: "https://65296c6d55b137ddc83ecbd6.mockapi.io",
    // baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page = 1) => ({
        url: `/products?sortBy=createdAt&order=desc&page=${page}`,
        //  url: "/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => ({ url: `/products/${id}`, method: "GET" }),
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    addProduct: builder.mutation({
      query: (values) => ({
        url: "/products",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;

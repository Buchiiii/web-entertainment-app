import { apiSlice } from "../api";

interface User {
  id: string;
  email: string;
  password: string;
  accessToken: string;
}

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ user: Partial<User> }, Partial<User>>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),

      transformResponse: (result: Partial<User>, meta) => {
        return { user: result };
      },
    }),

    createUser: builder.mutation<{ message: string }, Partial<User>>({
      query: (body) => ({
        url: "user/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  
  useLoginUserMutation,
  useCreateUserMutation,
} = userApi;


// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {

//   data:[],
//   isSuccess:false,
//   message:"",
//   loading:false
// };

// export const signUpUser = createAsyncThunk("user/signupuser", async (body) => {
//   const response = await fetch(`sfsfsfs`, {
//     method: "post",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await response.json();
// });



// export const signInUser = createAsyncThunk(
//   "user/signinuser",
  
//   async (userCredentials, { rejectWithValue }) => {
//     try {
      
//     const {data} = await axios.post(
//         "https://uat.zaccbox.com/recurring/api/Authentication/Authentication",
//         userCredentials);
//       AsyncStorage.setItem("token",data.API_key);

//       // const my_token= AsyncStorage.getItem("token");
//       // console.log(my_token);

      
//       console.log(data.API_key)

//       return data;
//     } catch (error) {
    

//        rejectWithValue(error.response.data);
//     }
//   }
// );
// const userSlice = createSlice({
//   name: "user",
//   initialState,

//   reducers: {
//     logout: (state) => {
      
//       AsyncStorage.removeItem("token");

      
//       state.data = [];
//       state.isSuccess = false;
//       state.message = '';
//       state.loading = false;
//     },

//   },

//   extraReducers: {
//     //*****************login user*************//

//     [signInUser.pending]: (state, {payload}) => {
//       state.loading = true;
//     },

//     [signInUser.fulfilled]: (state, {payload}) => {
   
//       state.loading = false;
//       state.data = payload;
//       state.isSuccess =true;
     

//     },
//     [signInUser.rejected]: (state, {payload}) => {
//       state.message = payload;
//       state.loading=false;
//       state.isSuccess=false;
//     },


//     //*****************sign up user*************//

//     [signUpUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.msg = msg;
//       }
//     },
//     [signUpUser.rejected]: (state, action) => {
//       state.loading = true;
//     },
//   },
// });

// export const { addToken, addUser, logout } = userSlice.actions;

// export default userSlice;











// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // const apiSlice = createApi({
// //   baseQuery: fetchBaseQuery({ baseUrl: "https://uat.zaccbox.com/recurring/api/" }),
// //   endpoints: (builder) => ({
// //     getAPIKey: builder.query("Authentication/Authentication", {
// //       method: "POST",
// //     }),
// //   }),
// // });

// // export const { useGetAPIKeyQuery } = apiSlice;

// // const initialState = {
// //   data: [],
// //   isSuccess: false,
// //   message: "",
// //   loading: false,
// // };

// // export const signInUser = createAsyncThunk("user/signinuser", async (userCredentials, { dispatch }) => {
// //   try {
// //     const { data } = await dispatch(apiSlice.endpoints.getAPIKey.initiate({ body: userCredentials }));
// //     AsyncStorage.setItem("user", JSON.stringify(data.API_key));
// //     return data;
// //   } catch (error) {
// //     throw error;
// //   }
// // });


// // export const signUpUser = createAsyncThunk("user/signupuser", async (body) => {
// //   const response = await fetch(`sfsfsfs`, {
// //     method: "post",
// //     headers: {
// //       "Content-type": "application/json",
// //     },
// //     body: JSON.stringify(body),
// //   });
// //   return await response.json();
// // });

// // const userSlice = createSlice({
// //   name: "user",
// //   initialState,
// //   reducers: {
// //     logout: (state) => {
// //       AsyncStorage.removeItem("user");
// //       state.data = [];
// //       state.isSuccess = false;
// //       state.message = "";
// //       state.loading = false;
// //     },
// //   },
// //   extraReducers: {
// //     [signInUser.pending]: (state) => {
// //       state.loading = true;
// //     },
// //     [signInUser.fulfilled]: (state, { payload }) => {
// //       state.loading = false;
// //       state.data = payload;
// //       state.isSuccess = true;
// //     },
// //     [signInUser.rejected]: (state, { payload }) => {
// //       state.message = payload;
// //       state.loading = false;
// //       state.isSuccess = false;
// //     },




// //     //*****************sign up user*************//

// //     [signUpUser.pending]: (state, action) => {
// //       state.loading = true;
// //     },
// //     [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
// //       state.loading = false;
// //       if (error) {
// //         state.error = error;
// //       } else {
// //         state.msg = msg;
// //       }
// //     },
// //     [signUpUser.rejected]: (state, action) => {
// //       state.loading = true;
// //     },




// //   },
// // });

// // export const { logout } = userSlice.actions;

// // export default userSlice;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isSuccess: false,
  message: "",
  loading: false,
};

export const signUpUser = createAsyncThunk("user/signupuser", async (body) => {
  const response = await fetch(`sfsfsfs`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
});

export const signInUser = createAsyncThunk("user/signinuser", async (userCredentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      "https://uat.zaccbox.com/recurring/api/Authentication/Authentication",
      userCredentials
    );
    AsyncStorage.setItem("token", data.API_key);
    console.log(data.API_key);
    return data;
  } catch (error) {
    rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => {
      AsyncStorage.removeItem("token");
      state.data = [];
      state.isSuccess = false;
      state.message = "";
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    //*****************login user*************//

    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.message = payload;
        state.loading = false;
        state.isSuccess = false;
      });

    //*****************sign up user*************//

    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
      })
      .addCase(signUpUser.rejected, (state) => {
        state.loading = true;
      });
  },
});

export const { addToken, addUser, logout } = userSlice.actions;

export default userSlice;



// import { fetchProducts } from '../../creaateASyncThunk/FetchProducts';



const {createSlice} = require('@reduxjs/toolkit');

const Productslice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  reducers:{
    Getproduct: (state, action) => {
      state.products = action.payload;
    },
  
  }

});

export const {Getproduct} = Productslice.actions;
export default Productslice.reducer;
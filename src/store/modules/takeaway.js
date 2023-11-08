import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name: 'foods',

  // 定义初始值
  initialState: {
    foodsList: [],
    // 菜单激活下标值
    activeIndex: 0
  },
  // 定义方法
  reducers: {
    setFoodsList (state, action) {
      state.foodsList = action.payload
    },
    // 更改activeIndex
    changeActiveIndex (state, action) {
      state.activeIndex = action.payload
    }
  }
})

const {setFoodsList,changeActiveIndex} = foodStore.actions
const fetchFoodsList = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}

export {fetchFoodsList,changeActiveIndex }
const reducer = foodStore.reducer
export default reducer
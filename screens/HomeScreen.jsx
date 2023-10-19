import { View, Text,Button } from 'react-native'
import React from 'react'
import LogOut from '../component/logout'
import { addToken } from '../Redux/createSlice/UserSlice'
import { useDispatch,useSelector } from 'react-redux'

const LogOutScreen = () => {




  return (
    <View style={{padding:100}}>

      <LogOut/>

   


    </View>
  )
}

export default LogOutScreen
import React from 'react'; 
import { View, Text} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../stores/counter'

const Counter = () =>{
    const count = useSelector(state => state.counter.value)
    return (
        <View>
            <Text style={{marginTop:10,fontSize:20,width: "100%",textAlign: "center"}}>{count}</Text>
        </View>
    )
}
export default Counter;
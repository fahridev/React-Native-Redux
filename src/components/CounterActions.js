import React from 'react'; 
import { View, Text , TouchableHighlight} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../stores/counter'

const CounterAction = () =>{
    const dispatch = useDispatch()
    return (
        <View style={{justifyContent: "center",flexDirection: "row",marginTop: 20}}>
            <TouchableHighlight
                underlayColor='transparent' 
                style={{flex:1, alignItems: "center"}} 
                onPress={() => dispatch(decrement())}>
                <Text>Azalt (-)</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                underlayColor='transparent' 
                style={{flex:1, alignItems: "center"}} 
                onPress={() => dispatch(increment())}>
                <Text>Arttir (+)</Text>
            </TouchableHighlight>
        </View>
    )
}
export default CounterAction;
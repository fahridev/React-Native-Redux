import React, { useState } from 'react';
import { View } from 'react-native';
import Counter from './components/counter';
import CounterAction from './components/CounterActions';

const main = () => {
    const [count,setCount]= useState(0);
    return (
        <View>
            <CounterAction  count={count} setCount={setCount} />
            <Counter count={count} />
        </View>)
}
export default main;
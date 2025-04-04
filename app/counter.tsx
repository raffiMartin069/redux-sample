import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './store'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'

const Counter = () => {

    const counter = useSelector((state: RootState) => state.counter.value)
    const disp = useDispatch<AppDispatch>();

  return (
    <View style={{ flex: 1, padding:20, gap:20 }}>
      <Text>Counter</Text>
      <Text>Count: {counter}</Text>
        <Button title="Increment" onPress={() => disp(increment())} />
        <Button title="Decrement" onPress={() => disp(decrement())} />
        <Button title="Increment By Amount!" onPress={() => disp(incrementByAmount(2))} />        
    </View>
  )
}

export default Counter;
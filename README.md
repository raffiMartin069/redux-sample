# Redux Counter Demo with React Native and Expo

This repository demonstrates a basic implementation of a Counter app using Redux in a React Native project bootstrapped with Expo.

## Features

- **State Management**: Powered by Redux for predictable state management.
- **Counter Functionality**: Increment, decrement, and reset the counter.
- **React Native**: Built using React Native for cross-platform mobile development.
- **Expo**: Simplifies the development process with Expo's powerful tools.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Redux Toolkit](https://redux-toolkit.js.org/) and [React-Redux](https://react-redux.js.org/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/redux-demo.git
   cd redux-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npm start
   ```

4. Open the app on your device or emulator using the Expo Go app.

## Project Structure

```plaintext
redux-demo/
├── App.js               # Entry point of the application
├── components/          # Reusable React components
├── redux/               # Redux store, slices, and actions
│   ├── store.js         # Configures the Redux store
│   └── counterSlice.js  # Counter slice with actions and reducers
├── assets/              # Static assets like images
└── package.json         # Project dependencies and scripts
```

## Redux Implementation

The counter logic is implemented using Redux Toolkit. Below is a brief overview:

- **Store**: Configured in `store.js` using `configureStore`.
- **Slice**: The `counterSlice.js` defines the initial state, reducers, and actions (`increment`, `decrement`, `reset`).

## Example Code

### Counter Slice (`redux/counterSlice.js`)

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

### Counter Component (`components/Counter.js`)

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Counter;
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)

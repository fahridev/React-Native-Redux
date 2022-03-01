import React from 'react';
import Index from './src/index'
import {
  SafeAreaView,
} from 'react-native';
import store from "./src/store"
import { Provider } from "react-redux"


const App = () =>  {


  return (
    <SafeAreaView>
      <Provider store={store}>
        <Index />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

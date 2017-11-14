import React from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import { Header } from "./components/common";


export default class App extends Component {
    render() {
      return (
        <Provider store={createStore(reducers)}>
          <View>
            <Header headerText="Tech Stack" />
          </View>
        </Provider>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});
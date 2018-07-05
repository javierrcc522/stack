import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    //provider can only have one child subcompoenets can have as many components
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerWords="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;

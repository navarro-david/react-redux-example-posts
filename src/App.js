import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import PostForm from './components/Postform';
import Posts from './components/Posts';

import store from './store'

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

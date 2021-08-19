import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

// REDUX CODE
///////////////////////////////////

const toggle = () => {
  return {type: 'toggle'} 
}
 
const initialState = 'off';
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state; 
  }
} 
 
const store = createStore(lightSwitchReducer);

// REACT CODE
///////////////////////////////////
 
// Pass the store's current state as a prop to the LightSwitch component.
const render = () => {
  ReactDOM.render(
    <LightSwitch 
      state={store.getState()}
    />,
    document.getElementById('root')
  )
}
 
render(); // Execute once to render with the initial state.
store.subscribe(render); // Re-render in response to state changes.

// Receive the store's state as a prop.
function LightSwitch(props) {
  const state = props.state; 

  // Adjust the UI based on the store's current state.
  const bgColor = state === 'on' ? 'white' : 'black';
  const textColor = state === 'on' ? 'black' : 'white';  
 
  // The click handler dispatches an action to the store.
  const handleLightSwitchClick = () => {
    store.dispatch(toggle());
  }
 
  return (  
    <div style={{background : bgColor, color: textColor}}>
      <button onClick={handleLightSwitchClick}>
        {state}
      </button>
    </div>
  )
}


/// multiple reducers
const reducers = {
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
}
// Declare the store here.
const store = createStore(combineReducers(reducers));

const createStore = (reducer) => {
  let state;
  let listeners = [];
 
  //this is the createStore function
  const getState = () => state;
 
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
 
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {  
      listeners = listeners.filter(l => l !== listener)  
    }
  };
 
  dispatch({});
  return { getState, dispatch, subscribe };
}

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store.js';
import { Provider } from 'react-redux'
import { App } from './app/App.js';
import { store } from './app/store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
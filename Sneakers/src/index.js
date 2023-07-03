import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; //для реализации роутинга
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const defaultState = { //состояние по умолчанию
    cash: 0,
    inputValue: "",
    favItems: []
}

function reducer(state=defaultState, action){
    switch(action.type){
        case "ADD_CASH":
            return{...state, cash: state.cash + action.payload}
        case "MINUS_CASH":
            return{...state, cash: 0}
        case "CHANGE_INPUT":
            return{...state, inputValue: state.inputValue = action.payload}
        case "CLEAR_INPUT":
            return{...state, inputValue: ""}
        case "ADD_FAV":
            return{...state, favItems: [...state.favItems, action.payload]}
        case "REMOVE_FROM_FAV":
            return{...state, favItems: []}
        default:
            return state;
    }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Provider store={store}>
            < App />
       </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

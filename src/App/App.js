import React from 'react'
import './App.css'
import {Provider  } from 'react-redux'
import store from '../Store/index'
import Todolist from '../Todolist';
import Axios from 'axios';
import { getListCreator} from '../Store/actionCreators'

export default class App extends React.Component {

    render(){
        return (
            <Provider store= {store}>
                <header className='App-header'>
                   TODOLIST(react + react-redux)
                </header>
                <Todolist/>
            </Provider>
           )
    }

    componentDidMount(){
        Axios
        .get('https://www.easy-mock.com/mock/5d5cb265f39c7a20e25b9224/reactBasic/todolist')
        .then(response=>{
            const vlaue = response.data.data;
            const action = getListCreator(vlaue);
            store.dispatch(action)
        })
    }
}

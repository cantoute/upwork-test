import React from 'react'
import logo from './logo.svg'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Posts from './components/Posts'
import PostForm from './components/PostForm'
import './css/main.css'
const App = _ => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    
                    <div className="grid">
                        <div className="left">

                        </div>
                        <div className="right">
                            <img src={logo} alt="logo"></img>
                            <Posts />
                            <hr />
                            <PostForm />
                        </div>
                    </div>
                    
                </div>
                
            </Provider>
            
        </BrowserRouter>
    )
}

export default App

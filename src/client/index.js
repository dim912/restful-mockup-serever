import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Provider } from 'react-redux' //this is actually a component which glue react redux
import store from './store'


const App = () => {

    return <Provider store={store}>
        <Main />
    </Provider>

}

ReactDOM.render(<App className="body" />, document.getElementById('app'))
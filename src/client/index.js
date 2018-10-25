import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

function click(e) {
    console.log('called');
}

const App = () => {
    return <Main />
}

ReactDOM.render(<App />, document.getElementById('app'))
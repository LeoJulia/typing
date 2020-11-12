import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TypingPage } from 'pages/TypingPage'
import { rootReducers } from 'redux/reducers'

import * as serviceWorker from './utils/serviceWorker'
import './index.css'

const store = createStore(rootReducers, composeWithDevTools())

ReactDOM.render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <TypingPage />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

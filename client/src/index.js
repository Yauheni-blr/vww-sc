import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'
import { useStrict as mobxUseStrict } from 'mobx'

import App from './components/App'

import AppStore from './store/AppStore'

import './index.css'

const store = {
  app: AppStore
}
mobxUseStrict(true)

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

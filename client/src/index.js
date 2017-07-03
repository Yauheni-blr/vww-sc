import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'
import { useStrict as mobxUseStrict } from 'mobx'

import App from './components/App'

import AppStore from './store/AppStore'
import UserStore from './store/UserStore'

import './index.css'

const store = {
  app: AppStore,
  user: UserStore
}

mobxUseStrict(true)

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

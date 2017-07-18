import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'mobx-react'
import { useStrict as mobxUseStrict } from 'mobx'

import App from './components/App'

import AppStore from './store/AppStore'
import UserStore from './store/UserStore'
import GroupStore from './store/GroupStore'
import StudentStore from './store/StudentStore'


import './index.css'

const store = {
  app: AppStore,
  user: UserStore,
  group: GroupStore,
  student: StudentStore
}

mobxUseStrict(true)

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

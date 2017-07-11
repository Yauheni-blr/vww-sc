import React from 'react'
import { inject, observer } from 'mobx-react'

import './Protected.css'

export const Protected = inject('user')(observer(() =>
  <div>Protected, please logIn</div>
))
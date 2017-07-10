import { observable, action } from 'mobx'

import Config from '../Config'

class AppStore extends Config {
  @observable showLoginModal
  @observable showRegistrationModal
  @observable projectName
  @observable showLogRegModal
  @observable error

  constructor() {
    super()
    this.showLogRegModal = {
      status: false,
      showCase: true, // true: SignIn | false: SignUp
      addStyle: {}
    }
    this.projectName = "cool project"
    this.error = {
      login: ''
    }
    this.routes = {
      myGroups: '/',
      mySchedule: '/my-schedule',
      howToUse: '/how-to-use',
      support: '/support',
      singleGroup: '/:name'
    }
  }

  closeModal(value) {
    if (value)
      this.setShowLogRegModal({
        status: false,
        addStyle: {
          filter: 'none'
        }
      })
  }

  @action setShowLogRegModal(obj) {
    this.showLogRegModal = Object.assign({},
      {
        status: obj.status || this.showLogRegModal.status,
        showCase: obj.showCase || this.showLogRegModal.showCase,
        addStyle: obj.addStyle || this.showLogRegModal.addStyle
      },
    obj)
  }

  @action setProjectName(value) {
    this.projectName = value
  }

  @action setError(where, value) {
    this.error[where] = value
  }
}

export default new AppStore()

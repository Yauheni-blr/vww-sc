import { observable, action } from 'mobx'

class AppStore {
  @observable showLoginModal
  @observable showRegistrationModal
  @observable projectName
    
  constructor() {
    this.showLoginModal = {
      status: false,
      addStyle: {}
    }
    this.showRegistrationModal = {
      status: true,
      addStyle: {}
    }
    this.projectName = "cool project"
  }

  @action setShowLoginModal(status = false, styleKey = null, styleValue = null) {
    this.showLoginModal = {
      status,
      addStyle: {
        [styleKey]: styleValue
      }
    }
  }

  @action setShowRegistrationModal(status = false, styleKey = null, styleValue = null) {
    this.showRegistrationModal = {
      status,
      addStyle: {
        [styleKey]: styleValue
      }
    }
  }



  @action setProjectName(value) {
    this.projectName = value
  }
}

export default new AppStore()

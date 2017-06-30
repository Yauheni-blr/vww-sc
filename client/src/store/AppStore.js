import { observable, action } from 'mobx'

class AppStore {
  @observable showLoginModal
  @observable projectName

  constructor() {
    this.showLoginModal = {
      status: false,
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

  @action setProjectName(value) {
    this.projectName = value
  }
}

export default new AppStore()

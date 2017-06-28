import { observable, action } from 'mobx'

class AppStore {
  @observable showLoginModal
  @observable projectName

  constructor() {
    this.showLoginModal = false
    this.projectName = 'Cool Project'
  }

  @action setShowLoginModal(value = false) {
    this.showLoginModal = value
  }

  @action setProjectName(value) {
    this.projectName = value
  }
}

export default new AppStore()
 
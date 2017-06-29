import { observable, action } from 'mobx'

import Config from '../Config'

class AppStore extends Config {
    @observable showLoginModal
    @observable projectName


    constructor() {
      super()
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

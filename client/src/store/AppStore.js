import { observable, action } from 'mobx'

class AppStore {
  @observable showLoginModal
  @observable showRegistrationModal
  @observable projectName
  @observable showLogRegModal

  constructor() {
    this.showLogRegModal = {
      status: false,
      showCase: true, // true: SignIn | false: SignUp
      addStyle: {}
    }
    this.projectName = "cool project"
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
}

export default new AppStore()

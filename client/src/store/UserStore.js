import { observable, action, computed } from 'mobx'

class UserStore {
  @observable data

  constructor() {
    this.resetUser()
  }

  @action changeUserData(user) {
    this.data = Object.assign({}, this.data, user)
  }

  @action resetUser() {
    this.data = {
      name: '',
      surname: '',
      email: '',
      department: ''
    }
  }

  @computed get getFullName() {
    return `${this.data.name} ${this.data.surname}`
  }
}

export default new UserStore()

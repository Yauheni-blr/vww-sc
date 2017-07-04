import { observable, action, computed } from 'mobx'
import axios from 'axios'

class UserStore {
  @observable data

  constructor() {
    this.resetUser()
  }

  @action changeUserData(user) {
    this.data = Object.assign({}, this.data, user)
  }

  @action loginUser(url, body) {
    return axios.post(url, body)
      .then(x => {
        this.changeUserData(x.data)
        return x.data.email ? true : false
      })
      .catch(err => console.log(err))
  }

  @action registrateUser(url, body) {
    return axios.post(url, body)
      .then(x =>
        x.status === 201
          ? true
          : false
      )
      .catch(err => console.log(err))

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

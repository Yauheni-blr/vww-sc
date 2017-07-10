import { observable, action, computed } from 'mobx'
import axios from 'axios'

import LocalStore from './LocalStore'

class UserStore {
  @observable data
  @observable listOfGroups
  @observable singleGroup

  constructor() {
    this.data = LocalStore.getUser()
  }

  @action changeUserData(user) {
    this.data = Object.assign({}, this.data, user)
  }

  @action loginUser(url, body) {
    return axios.post(url, body)
      .then(x => {
        this.changeUserData(x.data)
        LocalStore.setUser(x.data)
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
    this.data = LocalStore.resetUser()
  }

  @computed get getFullName() {
    return `${this.data.name} ${this.data.surname}`
  }

  getActiveGroups(url) {
     axios
      .get(url)
      .then(action(x => this.listOfGroups = x.data))
  }

  getSingleGroup(url) {
    axios
      .get(url)
      .then(x => this.setSingleGroup(x.data))
  }

  @action setSingleGroup(group) {
    this.singleGroup = group
  }
}

export default new UserStore()

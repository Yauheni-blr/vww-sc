import { observable, action, computed } from 'mobx'
import axios from 'axios'

import LocalStore from './LocalStore'

class UserStore {
  @observable data

  constructor() {
    this.data = LocalStore.getUser()
    
    this.myGroups = [
      { 
        type: 'groupItem',
        department: 'Computer Science', 
        groupName: 'CS-E3SI'
      },
      { 
        type: 'groupItem',
        department: 'Economics', 
        groupName: 'ES-S2PI' 
      },
      { 
        type: 'groupItem',
        department: 'Architecture', 
        groupName: 'AR-S2PI' 
      },
      { 
        type: 'groupItem',
        department: 'Tourism and Recreation', 
        groupName: 'TR-S3EI' 
      },
      { 
        type: 'groupItem',
        department: 'Computer Science', 
        groupName: 'CS-E3SI' 
      },
      { 
        type: 'groupItem',
        department: 'Economics', 
        groupName: 'ES-S2PI' 
      },
      { 
        type: 'groupItem',
        department: 'Architecture', 
        groupName: 'AR-S2PI' 
      },
      { 
        type: 'groupItem',
        department: 'Tourism and Recreation', 
        groupName: 'TR-S3EI' 
      }
      
    ]
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
}

export default new UserStore()

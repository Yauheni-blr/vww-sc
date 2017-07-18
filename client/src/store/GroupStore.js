import { observable, action } from 'mobx'
import axios from 'axios'


class GroupStore {
  @observable listOfGroups
  @observable singleGroup

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
    this.singleGroup = group[0] || group
  }
}

export default new GroupStore()
import { observable, action } from 'mobx'
import axios from 'axios'


class GroupStore {
  @observable listOfGroups
  @observable singleGroup
  @observable listOfStudents

  constructor() {
    this.listOfStudents = []
  }

  getActiveGroups(url) {
     axios
      .get(url)
      .then(action(x => this.listOfGroups = x.data))
  }

  getSingleGroup(origin, route) {
    axios
      .get(origin + route)
      .then(x => this.setSingleGroup(x.data))
      .then(() => {
        if (this.singleGroup.attachedStudents.length) {
          axios
            .get(origin + '/my-students/' + this.singleGroup.attachedStudents)
            .then(x => this.setListOfStudents(x.data))
        }
      })
  }

  @action setListOfStudents(students) {
    this.listOfStudents = students
  }

  @action resetListOfStudents() {
    this.listOfStudents = []
  }

  @action setSingleGroup(group) {
    this.singleGroup = group[0] || group
  }
}

export default new GroupStore()
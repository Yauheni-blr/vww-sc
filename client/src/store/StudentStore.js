import { observable, action } from 'mobx'
import axios from 'axios'

class StudentStore {
  @observable listOfStudents

  constructor() {
    this.listOfStudents = []
  }

  @action setListOfStudents(data) {
    this.listOfStudents = data
  }

  getStudentList(url) {
    axios
      .get(url)
      .then(x => this.setListOfStudents(x.data))
  }
}



export default new StudentStore()
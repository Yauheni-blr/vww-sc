class LocalStore {
  constructor() {
    this.userModel = {
      name: '',
      surname: '',
      email: '',
      department: ''
    }
    this.user = this.initUser()
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  initUser() {
    if (this.getUser())
      return this.getUser()
      
    localStorage.setItem('user', JSON.stringify(this.userModel))
  }

  resetUser() {
    this.setUser(this.userModel)
    return this.userModel
  }
}

export default new LocalStore()
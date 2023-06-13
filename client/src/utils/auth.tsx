class Auth {
  constructor() {
    //@ts-ignore
    this.authenticated = false;
  }

  login(cb) {
    //@ts-ignore
    this.authenticated = true;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();

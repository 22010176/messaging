class User {
  constructor(email, name, uid, roles) {
    this.email = email;
    this.name = name;
    this.uid = uid
    this.roles = roles
  }

}

const UserConverter = {
  toFirestore(user) { return { name: user.name, email: user.email, uid: user.uid } },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return new User(data.email, data.name, data.uid)
  }
}

export default UserConverter
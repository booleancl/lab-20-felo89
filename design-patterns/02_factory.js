class FreeTierUser {
  constructor(properties) {
    if(!properties.email) {
      throw new Error('email is mandatory')
    }

    this.name = properties.name || 'not name set'
    this.username = properties.username || 'not username set'
    this.email = properties.email
  }
}
class EnterpriseUser {
  constructor(properties) {
    if(!properties.email) {
      throw new Error('email is mandatory')
    }

    this.name = properties.name || 'not name set'
    this.username = properties.username || 'not username set'
    this.email = properties.email

    this.organization = properties.organization
    this.credit_card = properties.credit_card
  }
}
const userTypes = {
  FreeTierUser,
  EnterpriseUser
}
function createUserFactory(type, properties) {
  const PlatformUser = userTypes[type]

  return new PlatformUser(properties)
}

module.exports = {
  FreeTierUser,
  EnterpriseUser,

  createUserFactory
}

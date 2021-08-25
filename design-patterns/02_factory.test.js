const {
  FreeTierUser,
  EnterpriseUser,
  createUserFactory
} = require('./02_factory')

describe('Factory Design Pattern', () => {

  it('should get FreeTierUser instance', () => {
    const user = createUserFactory('FreeTierUser', {
      name: 'student',
      email: 'student@boolean.cl'
    })

    expect(user instanceof FreeTierUser).toEqual(true)
    expect(user).toEqual({
      name: 'student',
      email: 'student@boolean.cl',
      username: 'not username set'
    })
  })

  it('should get EnterpriseUser instance', () => {
    const user = createUserFactory('EnterpriseUser', {
      name: 'student',
      email: 'student@boolean.cl',
      username: 'proStudent2000',
      organization: 'boolean',
      credit_card: { number: 1234455635 }
    })

    expect(user instanceof EnterpriseUser).toEqual(true)
    expect(user).toEqual({
      name: 'student',
      email: 'student@boolean.cl',
      username: 'proStudent2000',
      organization: 'boolean',
      credit_card: { number: 1234455635 }
    })
  })

  it('should throw error if the mandatory fields are not present with EnterpriseUser', () => {
    expect(() => {
      const user = createUserFactory('EnterpriseUser', {
        name: 'student',
        username: 'proStudent2000',
      })

    }).toThrow('email is mandatory')

    expect(() => {
      const user = createUserFactory('EnterpriseUser', {
        name: 'student',
        email: 'student@boolean.cl',
        username: 'proStudent2000',
      })
    }).toThrow('organization is mandatory')

    expect(() => {
      const user = createUserFactory('EnterpriseUser', {
        name: 'student',
        email: 'student@boolean.cl',
        username: 'proStudent2000',
        organization: 'boolean',
      })
    }).toThrow('credit_card is mandatory')

  })
})

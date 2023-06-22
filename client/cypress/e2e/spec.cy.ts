// import 'cypress';

describe('login', () => {
  it('user should be able to log in', () => {
    cy.visit('/app/signin')

    // open the login modal
    // cy.get('button').contains('Sign In').click()

    // fill in the form
    cy.get('input[type="email"]').type('test@test.com')
    cy.get('input[type="password"]').type('test123456789')

    // submit the form 
    cy.get('button').contains('Log In').click()
    cy.contains('button', 'Logout').should('be.visible')
  })
})